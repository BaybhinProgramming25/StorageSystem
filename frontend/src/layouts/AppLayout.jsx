import { Link, NavLink, Outlet } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Brand from '../components/Brand.jsx'
import { useAuth } from '../auth-context.js'
import { FACILITIES, NAV } from '../nav.js'
import './AppLayout.css'

function TopBar() {
  const { user, signOut } = useAuth()

  return (
    <header className="topbar">
      <Link className="brand-link" to="/dashboard">
        <Brand invert />
      </Link>

      <nav className="topbar-links">
        <Link to="/my-account" className="topbar-link">
          <span className="avatar">
            <Icon name="user" size={15} />
            <span className="badge">62</span>
          </span>
          {user}
        </Link>
        <Link to="/organization" className="topbar-link">
          <Icon name="gear" size={15} />
          Organization
        </Link>
        <button type="button" className="topbar-link as-button" onClick={signOut}>
          <Icon name="signout" size={15} />
          Sign Out
        </button>
      </nav>
    </header>
  )
}

function Toolbar() {
  return (
    <div className="toolbar">
      <div className="facility-select">
        <select defaultValue={FACILITIES[0]} aria-label="Facility">
          {FACILITIES.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </div>

      <div className="toolbar-actions">
        <Link to="/move-in" className="btn">Move-in</Link>
        <Link to="/reservations" className="btn">Take A Reservation</Link>
        <Link to="/site-map" className="btn">Site Map</Link>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        {NAV.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-item is-active' : 'nav-item')}
            >
              {({ isActive }) => (
                <>
                  <Icon name={item.icon} size={17} className="nav-icon" />
                  <span>{item.label}</span>
                  {!isActive && <Icon name="chevron" size={15} className="nav-chevron" />}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default function AppLayout() {
  return (
    <div className="app">
      <TopBar />
      <div className="page">
        <Toolbar />
        <div className="layout">
          <Sidebar />
          <main className="content">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
