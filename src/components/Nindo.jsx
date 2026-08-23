import { nindo } from '../data/content.js'
import '../css/Nindo.css'

export default function Nindo() {
  return (
    <section id="nindo" className="nindo">
      <p className="eyebrow">Nindō · The Path I Walk</p>
      <h2>Power spent in silence</h2>
      <p className="nindo-quote">{nindo.quote}</p>
      {nindo.paragraphs.map((p, i) => (
        <p className="body" key={i} style={i > 0 ? { marginTop: 16 } : undefined}>
          {p}
        </p>
      ))}
      <div className="exploring">
        <strong>Current training arc:</strong> building <em>DharmaAI_Backend</em>, {nindo.exploring}
      </div>
    </section>
  )
}
