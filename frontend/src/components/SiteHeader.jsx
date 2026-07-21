import { Link, NavLink } from 'react-router-dom'
import Brand from './Brand.jsx'

const LINKS = [
  { label: 'Sign In', path: '/signin' },
  { label: 'Features', path: '/features' },
  { label: 'Partner With Us', path: '/partner' },
  { label: 'Contact Us', path: '/contact' },
]

/** Public marketing header shown above the sign-in and other signed-out pages. */
export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-link" to="/signin">
        <Brand tagline />
      </Link>
      <nav className="site-nav">
        {LINKS.map((l) => (
          <NavLink
            key={l.path}
            to={l.path}
            className={({ isActive }) => (isActive ? 'site-link is-active' : 'site-link')}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/signup" className="btn-signup">
          Sign Up
        </Link>
      </nav>
    </header>
  )
}
