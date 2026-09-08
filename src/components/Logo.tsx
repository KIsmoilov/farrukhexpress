import { useState } from 'react'
import { company } from '../data/site'

/**
 * Renders the company badge.
 *
 * Prefers the real artwork at `company.logo` and falls back to the bundled
 * placeholder if that file is missing. The artwork has a solid white
 * background, so it is clipped to a circle by `.brand__mark` — see
 * components.css.
 */
export default function Logo({ size }: { size: number }) {
  const [src, setSrc] = useState<string>(company.logo)

  return (
    <span className="brand__mark" style={{ width: size, height: size }}>
      <img src={src} alt="" onError={() => setSrc(company.logoFallback)} />
    </span>
  )
}
