import { useState } from 'react'
import { company } from '../data/site'

/**
 * Renders the company badge.
 *
 * Prefers the real artwork at `company.logo` and falls back to the bundled
 * placeholder if that file is not present, so dropping the real logo into
 * public/ is the only step needed to install it — no code change.
 */
export default function Logo({ size }: { size: number }) {
  const [src, setSrc] = useState<string>(company.logo)

  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      onError={() => setSrc(company.logoFallback)}
    />
  )
}
