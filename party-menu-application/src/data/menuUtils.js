import menuData from './menuData.js'

export function filterMenuItems({ category = 'all', diet = 'all', name = '' } = {}) {
  const search = name.trim().toLowerCase()

  return menuData.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category
    const matchesDiet =
      diet === 'all' ||
      (diet === 'veg' ? item.isVeg === true : item.isVeg === false)
    const matchesName = !search || item.name.toLowerCase().includes(search)

    return matchesCategory && matchesDiet && matchesName
  })
}

export function getMenuItemById(id) {
  return menuData.find((item) => item.id === Number(id))
}

export default menuData
