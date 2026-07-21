// Single source of truth for the sidebar and the Common Tasks grid.
// Every `path` here has a matching route in App.jsx.

export const NAV = [
  { label: 'Dashboard', icon: 'gauge', path: '/dashboard' },
  { label: 'Facility', icon: 'building', path: '/facility' },
  { label: 'Inventory', icon: 'boxes', path: '/inventory' },
  { label: 'Rate Management', icon: 'dollar', path: '/rates' },
  { label: 'Auctions', icon: 'gavel', path: '/auctions' },
  { label: 'My WebSelfStorage', icon: 'monitor', path: '/my-account' },
  { label: 'Walk Around Admin', icon: 'walking', path: '/walk-around' },
]

export const TASKS = [
  { label: 'Reports', icon: 'chart', path: '/reports' },
  { label: 'Letters', icon: 'envelope', path: '/letters' },
  { label: 'SMS Texting', icon: 'chat', path: '/sms-texting' },
  { label: 'Sell Retail', icon: 'card', path: '/sell-retail' },
  { label: 'Openings / Letters', icon: 'envelopeOpen', path: '/openings' },
  { label: 'Reservations', icon: 'calendar', path: '/reservations' },
  { label: 'To-Do', icon: 'listCheck', path: '/to-do' },
  { label: 'Return Retail', icon: 'reply', path: '/return-retail' },
  { label: 'Closings / Deposits', icon: 'deposit', path: '/closings' },
  { label: 'Remote Move In', icon: 'truck', path: '/remote-move-in' },
  { label: 'Mobile Walk Around', icon: 'phone', path: '/mobile-walk-around' },
  { label: 'Pre-existing Customer', icon: 'badge', path: '/pre-existing-customer' },
  { label: 'Waiting List', icon: 'users', path: '/waiting-list' },
  { label: 'Site Map Display', icon: 'desktop', path: '/site-map' },
  { label: 'Mailing Labels', icon: 'grid', path: '/mailing-labels' },
  { label: 'LiSA AI Assistant', icon: 'help', path: '/assistant' },
]

export const FACILITIES = [
  '024642 - Kil Storage Plus',
  '024643 - Riverbend Self Storage',
  '024644 - Northgate Storage Center',
]

/** Human-readable title for any routed path, used by the placeholder pages. */
export const titleFor = (pathname) =>
  [...NAV, ...TASKS].find((i) => i.path === pathname)?.label ?? 'Page'
