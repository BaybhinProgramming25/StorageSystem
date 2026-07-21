import { Link, useLocation } from 'react-router-dom'
import { titleFor } from '../nav.js'

/** Stand-in for every screen that isn't built yet. */
export default function Placeholder({ title }) {
  const { pathname } = useLocation()
  const heading = title ?? titleFor(pathname)

  return (
    <section className="panel">
      <div className="panel-head">
        <h2>{heading}</h2>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
      <div className="panel-body placeholder-body">
        <p>
          <strong>{heading}</strong> is not built yet — this route renders inside the
          app layout so the navigation is wired end to end.
        </p>
        <p className="placeholder-path">{pathname}</p>
      </div>
    </section>
  )
}
