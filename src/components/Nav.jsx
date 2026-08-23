import { useState } from 'react'
import SharinganIcon from './SharinganIcon.jsx'
import '../css/Nav.css'

const LINKS = [
  { href: '#nindo', label: 'Nindō' },
  { href: '#missions', label: 'Missions' },
  { href: '#jutsu', label: 'Jutsu' },
  { href: '#scrolls', label: 'Awakening' },
  { href: '#academy', label: 'Academy' },
  { href: '#contract', label: 'Contract' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="brand">
        <div className="sharingan">
          <SharinganIcon variant="tomoe" tomoeCount={3} />
        </div>
        <div className="brand-name">
          Biswaranjan Das
          <small>Bingo Book · S-Rank Entry</small>
        </div>
      </div>

      <ul className={open ? 'nav-open' : ''}>
        {LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button className="navtoggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle navigation">
        ☰
      </button>
    </nav>
  )
}
