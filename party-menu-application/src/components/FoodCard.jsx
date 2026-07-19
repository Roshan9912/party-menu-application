import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSavedRecipeIds } from '../utils/storage.js'

export default function FoodCard({ item, onRemove }) {
  const savedItems = useSavedRecipeIds()
  const isSaved = savedItems.includes(item.id)
  const [src, setSrc] = useState(item.image)
  const fallbackSrc = `https://picsum.photos/seed/${encodeURIComponent(
    item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  )}/1200/800`

  const handleImageError = () => {
    if (src !== fallbackSrc) {
      setSrc(fallbackSrc)
    }
  }

  return (
    <article className="food-card">
      <Link to={`/menu/${item.id}`} className="food-card-link">
        <div className="food-card-image">
          <img src={src} alt={item.name} loading="lazy" onError={handleImageError} />
          <span className={`diet-pill ${item.isVeg ? 'veg' : 'nonveg'}`}>
            {item.isVeg ? 'Veg' : 'Non-Veg'}
          </span>
          {isSaved ? <span className="saved-label">Saved</span> : null}
        </div>

        <div className="food-card-body">
          <span className="category-chip">{item.category.toUpperCase()}</span>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span className="servings-text">{item.servings}</span>
        </div>
      </Link>

      {onRemove ? (
        <button
          type="button"
          className="remove-button"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            onRemove(item.id)
          }}
        >
          Remove
        </button>
      ) : null}
    </article>
  )
}
