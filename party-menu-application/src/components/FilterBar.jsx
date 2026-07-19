export default function FilterBar({
  category,
  diet,
  searchValue,
  onCategoryChange,
  onDietChange,
  onSearchValueChange,
  onSearch,
}) {
  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Starter', value: 'starter' },
    { label: 'Main', value: 'main' },
    { label: 'Sides', value: 'sides' },
    { label: 'Desert', value: 'desert' },
  ]

  const diets = [
    { label: 'All', value: 'all' },
    { label: 'Veg', value: 'veg' },
    { label: 'Non-Veg', value: 'nonveg' },
  ]

  return (
    <section className="filter-bar">
      <div className="filter-group">
        <span className="filter-group-label">Category</span>
        <div className="chip-row">
          {categories.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`chip ${category === option.value ? 'chip-active' : ''}`}
              onClick={() => onCategoryChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <span className="filter-group-label">Diet</span>
        <div className="chip-row">
          {diets.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`chip ${diet === option.value ? 'chip-active' : ''}`}
              onClick={() => onDietChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="search-row">
        <label className="search-field">
          <input
            type="search"
            value={searchValue}
            onChange={(event) => onSearchValueChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                onSearch()
              }
            }}
            placeholder="Search dishes"
          />
        </label>
        <button type="button" className="button button-secondary" onClick={onSearch}>
          Search
        </button>
      </div>
    </section>
  )
}
