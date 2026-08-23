import { useInView } from '../hooks/useInView.js'
import SharinganIcon from './SharinganIcon.jsx'
import { evolution } from '../data/content.js'
import '../css/Evolution.css'

function EvoRow({ item }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`evo-row ${inView ? 'in-view' : ''}`}>
      <div className="evo-icon">
        <SharinganIcon
          variant={item.variant}
          tomoeCount={item.tomoeCount}
          animated
          animatedClassName="evo-tomoe"
        />
      </div>
      <div className={`evo-card ${item.eternal ? 'eternal' : ''}`}>
        <span className="evo-stage">{item.stage}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="evo-meta">{item.meta}</div>
        {item.link && (
          <a className="link" href={item.link} target="_blank" rel="noopener noreferrer">
            {item.linkLabel}
          </a>
        )}
      </div>
    </div>
  )
}

export default function Evolution() {
  return (
    <section id="scrolls" className="scrolls">
      <p className="eyebrow">Awakening · Sharingan Evolution</p>
      <h2>Every system, another tomoe</h2>
      <p className="lead">
        The Sharingan doesn't awaken all at once — it matures with every trial survived. Each system
        below marks a stage in that same progression, from first awakening to the eyes carried now.
      </p>

      <div className="evolution-track">
        {evolution.map((item, i) => (
          <EvoRow key={i} item={item} />
        ))}
      </div>
    </section>
  )
}
