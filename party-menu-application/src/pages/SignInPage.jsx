import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function SignInPage() {
  const navigate = useNavigate()
  const { isAuthenticated, login } = useAuth()
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('admin123')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await login({ email, password })
      navigate('/', { replace: true })
    } catch (err) {
      setError(err.message || 'Unable to sign in')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="page page-signin">
      <section className="card auth-card">
        <div className="auth-branding">
          <div className="brand-mark">PM</div>
          <div>
            <h1>Party Menu</h1>
            <p className="subtitle">Sign in to explore our delicious menu</p>
          </div>
        </div>

        {error ? (
          <div className="alert-banner" role="alert" aria-live="polite">
            {error}
          </div>
        ) : null}

        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="hidden" name="auth" value="party-menu" />
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="admin@example.com"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              placeholder="admin123"
            />
          </label>

          <button
            type="submit"
            className="button button-primary"
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </section>
    </main>
  )
}
