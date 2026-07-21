import { useCallback, useMemo, useState } from 'react'
import { AuthContext } from './auth-context.js'

const KEY = 'storagesystem.user'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem(KEY))

  const signIn = useCallback((name) => {
    localStorage.setItem(KEY, name)
    setUser(name)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem(KEY)
    setUser(null)
  }, [])

  const value = useMemo(() => ({ user, signIn, signOut }), [user, signIn, signOut])
  return <AuthContext value={value}>{children}</AuthContext>
}
