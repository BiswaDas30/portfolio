import { academy } from '../data/content.js'
import '../css/Academy.css'

export default function Academy() {
  return (
    <section id="academy" className="academy academy-section">
      <p className="eyebrow">Academy Records · Education &amp; Certification</p>
      <h2>Training foundation</h2>
      {academy.map((record) => (
        <div className="record-row" key={record.title}>
          <span className="r-title">{record.title}</span>
          <span className="r-meta">{record.meta}</span>
        </div>
      ))}
    </section>
  )
}
