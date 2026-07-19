import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMenuItemById } from '../data/menuUtils.js'
import { addSavedRecipeId, removeSavedRecipeId, useSavedRecipeIds } from '../utils/storage.js'

export default function FoodDetailPage() {
  const { id } = useParams()
  const item = useMemo(() => getMenuItemById(id), [id])
  const savedRecipeIds = useSavedRecipeIds()
  const saved = item ? savedRecipeIds.includes(item.id) : false
  const [src, setSrc] = useState(item ? item.image : '')
  const fallbackSrc = item
    ? `https://picsum.photos/seed/${encodeURIComponent(
        item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      )}/1200/800`
    : ''

  const handleImageError = () => {
    if (src !== fallbackSrc) {
      setSrc(fallbackSrc)
    }
  }

  if (!item) {
    return (
      <main className="page page-notfound">
        <div className="card empty-card">
          <h1>Food item not found</h1>
          <Link to="/">Back to Menu</Link>
        </div>
      </main>
    )
  }

  const toggleSaved = () => {
    if (saved) {
      removeSavedRecipeId(item.id)
    } else {
      addSavedRecipeId(item.id)
    }
  }

  return (
    <main className="page page-detail">
      <section className="detail-header">
        <div>
          <Link to="/" className="button button-secondary">Back to Menu</Link>
          <Link to="/saved-recipes" className="button button-secondary">Saved Recipes</Link>
        </div>
        <button type="button" className="button button-primary" onClick={toggleSaved}>
          {saved ? 'Saved' : 'Save Recipe'}
        </button>
      </section>

      <article className="detail-card">
        <div className="detail-image">
          <img src={src} alt={item.name} onError={handleImageError} />
          <span className={`diet-pill ${item.isVeg ? 'veg' : 'nonveg'}`}>
            {item.isVeg ? 'Veg' : 'Non-Veg'}
          </span>
        </div>

        <div className="detail-body">
          <span className="category-chip">{item.category.toUpperCase()}</span>
          <h1>{item.name}</h1>
          <p className="servings-text">{item.servings}</p>
          <p className="detail-description">{item.fullDescription}</p>
          <div className="ingredients-panel">
            <h2>Ingredients</h2>
            <ul>
              {item.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <strong>{ingredient.name}</strong> — {ingredient.quantity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </main>
  )
}
