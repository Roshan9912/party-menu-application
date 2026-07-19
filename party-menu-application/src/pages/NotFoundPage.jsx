import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function NotFoundPage() {
  const { isAuthenticated } = useAuth()
  const destination = isAuthenticated ? '/' : '/signin'
  const label = isAuthenticated ? 'Back to Menu' : 'Back to Sign In'

  return (
    <main className="page page-notfound">
      <div className="card empty-card">
        <h1>404 – Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to={destination} className="button button-secondary">
          {label}
        </Link>
      </div>
    </main>
  )
}
