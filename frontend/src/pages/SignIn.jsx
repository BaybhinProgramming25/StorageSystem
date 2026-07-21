import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import SiteHeader from '../components/SiteHeader.jsx'
import { useAuth } from '../auth-context.js'
import './SignIn.css'

export default function SignIn() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [step, setStep] = useState('username')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [reveal, setReveal] = useState(false)

  const onUsername = step === 'username'
  const value = onUsername ? username : password

  function handleSubmit(e) {
    e.preventDefault()
    if (!value.trim()) return
    if (onUsername) {
      setStep('password')
      setReveal(false)
      return
    }
    signIn(username)
    navigate(location.state?.from?.pathname ?? '/dashboard', { replace: true })
  }

  return (
    <div className="signin">
      <SiteHeader />

      <main className="signin-main">
        <h1 className="signin-title">Sign In</h1>

        <form className="signin-form" onSubmit={handleSubmit}>
          <label htmlFor="signin-field">{onUsername ? 'Username' : 'Password'}</label>

          <div className="field">
            <input
              id="signin-field"
              name={onUsername ? 'username' : 'password'}
              type={onUsername || reveal ? 'text' : 'password'}
              autoComplete={onUsername ? 'username' : 'current-password'}
              value={value}
              onChange={(e) =>
                onUsername ? setUsername(e.target.value) : setPassword(e.target.value)
              }
              autoFocus
            />
            <button
              type="button"
              className="reveal"
              aria-label={reveal ? 'Hide value' : 'Show value'}
              aria-pressed={reveal}
              onClick={() => setReveal((r) => !r)}
            >
              <Icon name={reveal ? 'eyeOff' : 'eye'} size={17} />
            </button>
          </div>

          <button type="submit" className="btn-next">
            {onUsername ? 'Next' : 'Sign In'}
          </button>

          {!onUsername && (
            <button
              type="button"
              className="link-back"
              onClick={() => {
                setStep('username')
                setPassword('')
              }}
            >
              Back
            </button>
          )}
        </form>
      </main>
    </div>
  )
}
