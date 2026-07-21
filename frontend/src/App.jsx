import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AppLayout from './layouts/AppLayout.jsx'
import DashboardHome from './pages/DashboardHome.jsx'
import Placeholder from './pages/Placeholder.jsx'
import NotFound from './pages/NotFound.jsx'
import PublicPage from './pages/PublicPage.jsx'
import SignIn from './pages/SignIn.jsx'
import { useAuth } from './auth-context.js'
import { NAV, TASKS } from './nav.js'

/** Bounces signed-out visitors to /signin, remembering where they were headed. */
function RequireAuth({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) return <Navigate to="/signin" state={{ from: location }} replace />
  return children
}

/** Signed-in users never need to see the sign-in screen. */
function RedirectIfAuthed({ children }) {
  const { user } = useAuth()
  if (user) return <Navigate to="/dashboard" replace />
  return children
}

// Every nav/task destination that has no real screen yet.
const STUB_PATHS = [
  ...NAV.filter((n) => n.path !== '/dashboard').map((n) => n.path),
  ...TASKS.map((t) => t.path),
  '/organization',
  '/move-in',
  '/search/advanced',
]

// Signed-out marketing pages linked from the site header.
const PUBLIC_STUBS = [
  { path: '/features', title: 'Features' },
  { path: '/partner', title: 'Partner With Us' },
  { path: '/contact', title: 'Contact Us' },
  { path: '/signup', title: 'Sign Up' },
]

export default function App() {
  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <RedirectIfAuthed>
            <SignIn />
          </RedirectIfAuthed>
        }
      />

      {PUBLIC_STUBS.map((p) => (
        <Route key={p.path} path={p.path} element={<PublicPage title={p.title} />} />
      ))}

      <Route
        element={
          <RequireAuth>
            <AppLayout />
          </RequireAuth>
        }
      >
        <Route path="/dashboard" element={<DashboardHome />} />
        {STUB_PATHS.map((path) => (
          <Route key={path} path={path} element={<Placeholder />} />
        ))}
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
