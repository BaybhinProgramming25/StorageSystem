import Icon from './Icon.jsx'

/**
 * Wordmark used in both the marketing header and the app top bar.
 * `invert` renders it for a dark background; `tagline` shows the sub-label.
 */
export default function Brand({ invert = false, tagline = false }) {
  return (
    <span className={invert ? 'brand brand-invert' : 'brand'}>
      <span className="brand-mark">
        <Icon name="box" size={22} />
      </span>
      <span className="brand-text">
        <span className="brand-word">
          storage<strong>system</strong>
        </span>
        {tagline && <span className="brand-tagline">BUSINESS PLATFORM®</span>}
      </span>
    </span>
  )
}
