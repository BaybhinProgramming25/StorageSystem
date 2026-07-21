import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader.jsx'
import './SignIn.css'

/** Stand-in for the signed-out marketing pages (Features, Partner, Contact, Sign Up). */
export default function PublicPage({ title }) {
  return (
    <div className="signin">
      <SiteHeader />
      <main className="signin-main">
        <h1 className="signin-title">{title}</h1>
        <p className="public-note">
          This page is not built yet. <Link to="/signin">Return to Sign In</Link>
        </p>
      </main>
    </div>
  )
}
