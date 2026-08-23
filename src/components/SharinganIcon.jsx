const TOMOE_PATH =
  'M50,50 C46,38 46,26 54,22 C62,18 70,26 66,34 C62,42 54,44 50,50 Z'
const BLADE_PATH = 'M50,50 L38,8 L60,16 Z'

/**
 * Renders a Sharingan eye SVG.
 *
 * variant: 'tomoe' (classic, N comma-shapes) | 'mangekyo' (3-blade pinwheel)
 *          | 'eternal' (6-blade pinwheel, gold)
 * tomoeCount: 1-3, only used when variant === 'tomoe'
 * animated: wraps each piece in a <g class="{animatedClassName}-piece"> holder
 *           (indexed via CSS nth-child) so parent CSS can stagger a snap-in animation.
 */
export default function SharinganIcon({
  variant = 'tomoe',
  tomoeCount = 3,
  animated = false,
  animatedClassName = 'evo-tomoe',
  className = '',
}) {
  if (variant === 'mangekyo' || variant === 'eternal') {
    const isEternal = variant === 'eternal'
    const color = isEternal ? '#c9a227' : '#e0263f'
    const angles = isEternal ? [0, 60, 120, 180, 240, 300] : [0, 120, 240]

    return (
      <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="50" r="46" fill="#0e0b0d" stroke={color} strokeWidth="3" />
        <g fill={color}>
          {angles.map((deg, i) => (
            <g
              key={deg}
              className={animated ? `${animatedClassName}-piece` : undefined}
              transform={deg ? `rotate(${deg} 50 50)` : undefined}
            >
              <path
                className={animated ? animatedClassName : undefined}
                d={BLADE_PATH}
                opacity={isEternal && i % 2 === 1 ? 0.75 : 1}
              />
            </g>
          ))}
        </g>
        <circle cx="50" cy="50" r="8" fill={color} />
      </svg>
    )
  }

  const angleStep = 360 / tomoeCount
  const angles = Array.from({ length: tomoeCount }, (_, i) => i * angleStep)

  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="#a3142e"
        stroke="#08070a"
        strokeWidth="4"
        className={animated ? 'iris' : undefined}
      />
      <g fill="#08070a">
        {angles.map((deg) => (
          <g
            key={deg}
            className={animated ? `${animatedClassName}-piece` : undefined}
            transform={deg ? `rotate(${deg} 50 50)` : undefined}
          >
            <path className={animated ? animatedClassName : undefined} d={TOMOE_PATH} />
          </g>
        ))}
      </g>
      <circle cx="50" cy="50" r="9" fill="#08070a" className={animated ? 'pupil' : undefined} />
    </svg>
  )
}
