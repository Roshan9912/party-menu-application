/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const TOKEN_KEY = 'party_menu_token'
const USER_KEY = 'party_menu_user'
const AUTH_URL = 'https://serverless-api-teal.vercel.app/api/auth/signin'

const AuthContext = createContext(null)

function getStoredString(key) {
  if (typeof window === 'undefined') {
    return null
  }
  return window.localStorage.getItem(key)
}

function parseStoredUser() {
  const stored = getStoredString(USER_KEY)
  if (!stored) {
    return null
  }

  try {
    return JSON.parse(stored)
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => getStoredString(TOKEN_KEY) || null)
  const [user, setUser] = useState(() => parseStoredUser())

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === TOKEN_KEY) {
        setToken(event.newValue || null)
      }

      if (event.key === USER_KEY) {
        if (event.newValue) {
          try {
            setUser(JSON.parse(event.newValue))
          } catch {
            setUser(null)
          }
        } else {
          setUser(null)
        }
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const login = async ({ email, password }) => {
    const response = await fetch(AUTH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const result = await response.json()
    if (!response.ok || !result?.success) {
      throw new Error(result?.message || 'Unable to sign in')
    }

    const nextToken = result.data?.token
    const nextUser = result.data?.user
    if (!nextToken || !nextUser) {
      throw new Error('Authentication response is missing token or user data')
    }

    window.localStorage.setItem(TOKEN_KEY, nextToken)
    window.localStorage.setItem(USER_KEY, JSON.stringify(nextUser))

    setToken(nextToken)
    setUser(nextUser)
  }

  const logout = () => {
    window.localStorage.removeItem(TOKEN_KEY)
    window.localStorage.removeItem(USER_KEY)
    setToken(null)
    setUser(null)
  }

  const value = useMemo(
    () => ({ token, user, login, logout, isAuthenticated: Boolean(token) }),
    [token, user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return context
}
