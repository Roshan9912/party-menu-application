import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import FoodCard from '../components/FoodCard.jsx'
import { getMenuItemById } from '../data/menuUtils.js'
import { removeSavedRecipeId, useSavedRecipeIds } from '../utils/storage.js'

export default function SavedRecipesPage() {
  const ids = useSavedRecipeIds()
  const items = useMemo(() => ids.map(getMenuItemById).filter(Boolean), [ids])

  const handleRemove = (id) => {
    removeSavedRecipeId(id)
  }

  return (
    <main className="page page-saved">
      <section className="page-header">
        <div>
          <h1>Saved Recipes</h1>
          <p>{items.length} recipes saved</p>
        </div>
        <Link to="/" className="button button-secondary">
          Back to Menu
        </Link>
      </section>

      {items.length > 0 ? (
        <section className="grid-layout">
          {items.map((item) => (
            <FoodCard key={item.id} item={item} onRemove={handleRemove} />
          ))}
        </section>
      ) : (
        <div className="empty-state">
          <h2>No saved recipes yet</h2>
          <p>
            Browse the <Link to="/">menu</Link> to save your favorites.
          </p>
        </div>
      )}
    </main>
  )
}
