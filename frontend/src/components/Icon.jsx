// Minimal stroke-based icon set. viewBox is 24x24 for every glyph.
const paths = {
  gauge: 'M3 15a9 9 0 1 1 18 0M12 15l4-4',
  building:
    'M4 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M15 9h4a1 1 0 0 1 1 1v11M2 21h20M7 7h2M7 11h2M7 15h2M11 7h1M11 11h1M11 15h1',
  boxes:
    'M3 9V6l4-2 4 2v3l-4 2-4-2ZM13 9V6l4-2 4 2v3l-4 2-4-2ZM8 18v-3l4-2 4 2v3l-4 2-4-2Z',
  dollar: 'M12 2v20M16.5 6.5H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H7',
  gavel:
    'm3 21 6-6M13.5 3.5 20.5 10.5M17 7l-6 6M10.5 6.5 13.5 3.5M17.5 13.5 20.5 10.5M8 12l4 4',
  monitor: 'M3 5h18v11H3zM9 20h6M12 16v4',
  walking: 'M13 4a1.5 1.5 0 1 0 0-.01M12 8l-3 4 2 3-1 6M14 9l3 2 1 4M9 12l-3 8',
  chevron: 'm6 9 6 6 6-6',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0',
  gear: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1',
  signout: 'M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M10 8l-4 4 4 4M6 12h10',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.4-4.4',
  chart: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  envelope: 'M3 6h18v12H3zM3 7l9 6 9-6',
  envelopeOpen: 'M3 10 12 3l9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM3 10l9 6 9-6',
  chat: 'M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1Z',
  card: 'M2 6h20v12H2zM2 10h20M6 15h4',
  calendar: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M9 15l2 2 4-4',
  listCheck: 'M9 6h12M9 12h12M9 18h12M3 6l1.5 1.5L7 5M3 12l1.5 1.5L7 11M3 18l1.5 1.5L7 17',
  reply: 'M9 7 4 12l5 5M4 12h9a7 7 0 0 1 7 7v1',
  deposit: 'M12 3v10M8 9l4 4 4-4M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3',
  truck: 'M2 6h11v10H2zM13 10h4l4 3v3h-8M6.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  phone: 'M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM10 19h4',
  badge: 'M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 17a4 4 0 0 1 8 0',
  users:
    'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2 20a7 7 0 0 1 14 0M16 4.5a3.5 3.5 0 0 1 0 7M18 13a7 7 0 0 1 4 7',
  desktop: 'M3 4h18v12H3zM8 20h8M12 16v4M6 8h6',
  grid: 'M3 4h18v16H3zM3 9h18M3 14h18M9 4v16M15 4v16',
  help: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9.5 9.5a2.5 2.5 0 1 1 3.2 2.4c-.5.2-.7.6-.7 1.1v.5M12 16.5v.5',
  box: 'M3 7.5 12 3l9 4.5v9L12 21l-9-4.5zM3 7.5 12 12l9-4.5M12 12v9',
  eye: 'M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12ZM12 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z',
  eyeOff:
    'M2 12s3.6-6.5 10-6.5c1.6 0 3 .4 4.2 1M22 12s-3.6 6.5-10 6.5c-1.6 0-3-.4-4.2-1M9.8 9.8a3 3 0 0 0 4.4 4.4M3 3l18 18',
}

export default function Icon({ name, size = 16, className = '' }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
