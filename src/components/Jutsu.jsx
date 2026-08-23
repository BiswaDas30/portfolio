import { jutsu } from '../data/content.js'
import '../css/Jutsu.css'

export default function Jutsu() {
  return (
    <section id="jutsu" className="jutsu-section">
      <p className="eyebrow">Jutsu List · Technical Arsenal</p>
      <h2 className="jutsu-heading">Techniques mastered</h2>
      <div className="jutsu-grid">
        {jutsu.map((card) => (
          <div className="jutsu-card" data-glyph={card.glyph} key={card.title}>
            <h3>{card.title}</h3>
            <span className="sub">{card.sub}</span>
            <div className="chip-row">
              {card.chips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
