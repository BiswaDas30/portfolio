import { contact } from '../data/content.js'
import '../css/Contact.css'

export default function Contact() {
  return (
    <section id="contract" className="contract">
      <p className="eyebrow" style={{ justifyContent: 'center' }}>
        Send a Raven
      </p>
      <h2>Reach out</h2>
      <p className="sub">{contact.subtitle}</p>
      <div className="contract-links">
        {contact.links.map((link) => (
          <a
            className="contract-link"
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            <span className="stamp">{link.stamp}</span> {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
