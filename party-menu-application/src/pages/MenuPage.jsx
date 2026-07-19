import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FilterBar from '../components/FilterBar.jsx'
import FoodCard from '../components/FoodCard.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { filterMenuItems } from '../data/menuUtils.js'
import { useSavedRecipeIds } from '../utils/storage.js'

export default function MenuPage() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [category, setCategory] = useState('all')
  const [diet, setDiet] = useState('all')
  const [searchValue, setSearchValue] = useState('')
  const [query, setQuery] = useState('')

  const savedRecipeIds = useSavedRecipeIds()
  const items = useMemo(
    () => filterMenuItems({ category, diet, name: query }),
    [category, diet, query],
  )

  return (
    <main className="page page-menu">
      <header className="page-header">
        <div>
          <h1>Party Menu</h1>
          <p className="welcome-text">Welcome, {user?.name || 'Guest'}</p>
        </div>

        <div className="header-actions">
          <Link to="/saved-recipes" className="button button-secondary">
            Saved Recipes <span className="badge">{savedRecipeIds.length}</span>
          </Link>
          <button type="button" className="button button-tertiary" onClick={() => { logout(); navigate('/signin', { replace: true }) }}>
            Logout
          </button>
        </div>
      </header>

      <FilterBar
        category={category}
        diet={diet}
        searchValue={searchValue}
        onCategoryChange={setCategory}
        onDietChange={setDiet}
        onSearchValueChange={setSearchValue}
        onSearch={() => setQuery(searchValue)}
      />

      <section className="menu-summary">
        <p>{items.length} items found</p>
      </section>

      {items.length > 0 ? (
        <section className="grid-layout">
          {items.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </section>
      ) : (
        <div className="empty-state">
          <h2>No dishes found.</h2>
          <p>Try different filters.</p>
        </div>
      )}
    </main>
  )
}
