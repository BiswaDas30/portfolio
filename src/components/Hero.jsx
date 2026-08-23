import SharinganIcon from './SharinganIcon.jsx'
import { profile } from '../data/content.js'
import '../css/Hero.css'

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="moon-glow" />
        <div className="dossier">
          <div className="dossier-top">
            <span>Bingo Book · Field Record</span>
            <span>Status: Active</span>
          </div>
          <div className="dossier-inner">
            <div className="dossier-eye">
              <SharinganIcon variant="tomoe" tomoeCount={3} animated animatedClassName="tomoe" />
              <div className="eye-flash" />
            </div>
            <div>
              <p className="id-label field" style={{ '--d': 0 }}>
                Registered Name
              </p>
              <h1 className="field" style={{ '--d': 1 }}>
                {profile.name}
              </h1>
              <div className="role field" style={{ '--d': 2 }}>
                {profile.role}
              </div>
              <div className="id-stats">
                <div className="id-stat field" style={{ '--d': 3 }}>
                  <div className="k">Village</div>
                  <div className="v">{profile.village}</div>
                </div>
                <div className="id-stat field" style={{ '--d': 4 }}>
                  <div className="k">Years Active</div>
                  <div className="v">{profile.yearsActive}</div>
                </div>
                <div className="id-stat field" style={{ '--d': 5 }}>
                  <div className="k">Specialty</div>
                  <div className="v">{profile.specialty}</div>
                </div>
                <div className="id-stat field" style={{ '--d': 6 }}>
                  <div className="k">Known Techniques</div>
                  <div className="v">{profile.knownTechniques}</div>
                </div>
              </div>
              <div className="rank-badge field" style={{ '--d': 7 }}>
                {profile.rankBadge}
              </div>
            </div>
          </div>
        </div>
        <p className="hero-tagline field" style={{ '--d': 8 }}>
          {profile.tagline}
        </p>
      </section>
      <div className="hero-scroll-cue">— scroll to open the file —</div>
    </>
  )
}
