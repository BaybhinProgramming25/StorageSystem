import { Link } from 'react-router-dom'
import { useAuth } from '../auth-context.js'

export default function NotFound() {
  const { user } = useAuth()

  return (
    <div className="notfound">
      <h1>404</h1>
      <p>That page doesn&rsquo;t exist.</p>
      <Link to={user ? '/dashboard' : '/signin'}>
        {user ? 'Back to Dashboard' : 'Go to Sign In'}
      </Link>
    </div>
  )
}
