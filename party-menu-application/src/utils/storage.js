import { useSyncExternalStore } from 'react'

const SAVED_KEY = 'party_menu_saved_recipes'
const subscribers = new Set()

function readSavedList() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    return JSON.parse(window.localStorage.getItem(SAVED_KEY) || '[]')
  } catch {
    return []
  }
}

function notifySavedRecipeSubscribers() {
  subscribers.forEach((listener) => listener())
}

let cachedSavedIds = null
let cachedSavedSnapshot = null

export function getSavedRecipeIds() {
  const ids = readSavedList().filter((item) => Number.isFinite(item)).map(Number)
  if (
    cachedSavedIds &&
    ids.length === cachedSavedIds.length &&
    ids.every((value, index) => value === cachedSavedIds[index])
  ) {
    return cachedSavedSnapshot
  }

  cachedSavedIds = ids
  cachedSavedSnapshot = ids
  return ids
}

export function setSavedRecipeIds(ids) {
  if (typeof window === 'undefined') {
    return
  }
  window.localStorage.setItem(SAVED_KEY, JSON.stringify(ids))
  cachedSavedIds = ids
  cachedSavedSnapshot = ids
  notifySavedRecipeSubscribers()
}

export function addSavedRecipeId(id) {
  const existing = new Set(getSavedRecipeIds())
  existing.add(Number(id))
  const ids = Array.from(existing)
  setSavedRecipeIds(ids)
  return ids
}

export function removeSavedRecipeId(id) {
  const ids = getSavedRecipeIds().filter((item) => item !== Number(id))
  setSavedRecipeIds(ids)
  return ids
}

export function isSavedRecipeId(id) {
  return getSavedRecipeIds().includes(Number(id))
}

export function useSavedRecipeIds() {
  return useSyncExternalStore(
    (callback) => {
      subscribers.add(callback)
      const handleStorageEvent = (event) => {
        if (event.key === SAVED_KEY) {
          callback()
        }
      }
      window.addEventListener('storage', handleStorageEvent)
      return () => {
        subscribers.delete(callback)
        window.removeEventListener('storage', handleStorageEvent)
      }
    },
    getSavedRecipeIds,
    getSavedRecipeIds,
  )
}
