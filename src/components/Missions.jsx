import { useInView } from '../hooks/useInView.js'
import { missions } from '../data/content.js'
import '../css/Missions.css'

function MissionEntry({ mission }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`mission ${inView ? 'in-view' : ''}`}>
      <div className="mission-head">
        <span className={`mission-rank ${mission.rankClass}`}>{mission.rank}</span>
        <h3>{mission.title}</h3>
      </div>
      <div className="dates">{mission.dates}</div>
      <ul>
        {mission.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Missions() {
  return (
    <section id="missions" className="missions">
      <p className="eyebrow">Mission Log · Field Record</p>
      <h2>Rank progression</h2>
      <div className="mission-track">
        {missions.map((m, i) => (
          <MissionEntry key={i} mission={m} />
        ))}
      </div>
    </section>
  )
}
