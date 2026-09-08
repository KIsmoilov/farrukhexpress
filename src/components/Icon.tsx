type IconProps = {
  name: IconName
  size?: number
  className?: string
}

const paths: Record<string, React.ReactNode> = {
  van: (
    <>
      <path d="M2 6h13v11H2z" />
      <path d="M15 9h4l3 4v4h-7z" />
      <circle cx="7" cy="18.5" r="2" />
      <circle cx="17.5" cy="18.5" r="2" />
    </>
  ),
  reefer: (
    <>
      <path d="M3 6h12v11H3z" />
      <path d="M15 9h4l2 4v4h-6z" />
      <path d="M9 8.5v6M7 10l4 3M11 10l-4 3" />
      <circle cx="7" cy="18.5" r="1.8" />
      <circle cx="17.5" cy="18.5" r="1.8" />
    </>
  ),
  flatbed: (
    <>
      <path d="M2 14h13V6h-2" />
      <path d="M15 9h4l3 4v1h-7" />
      <path d="M2 14h20" />
      <circle cx="7" cy="17.5" r="2" />
      <circle cx="17.5" cy="17.5" r="2" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M9 6h5a4 4 0 0 1 0 8h-4a4 4 0 0 0 0 8h5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </>
  ),
  support: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13v3a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2Z" />
      <path d="M20 13v3a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2Z" />
      <path d="M17 18v1a2 2 0 0 1-2 2h-2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.6-3.1 8.4-7.5 9.5-4.4-1.1-7.5-4.9-7.5-9.5V6Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2 2.5-2.5L18 19l2-2-6-6-2 2-3-3 3-3 4 2h3" />
      <path d="M10 7 7 4 2 9l5 5 2-2" />
    </>
  ),
  wrench: (
    <>
      <path d="M15.5 8.5a4.5 4.5 0 0 1-5.9 4.3L5 17.4 6.6 19l4.6-4.6a4.5 4.5 0 0 0 4.3-5.9l-2.3 2.3-2.1-.4-.4-2.1 2.3-2.3a4.5 4.5 0 0 1 2.5 2.5Z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.3a3.2 3.2 0 0 1 0 5.4M17.5 14.4A6 6 0 0 1 21 20" />
    </>
  ),
  phone: <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 6.2 2 2 0 0 1 6.5 3Z" />,
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.6 6-7.9 6-10.5a6 6 0 1 0-12 0C6 13.1 8 16.4 12 21Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  alert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5.5M12 16.2v.1" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  truck: (
    <>
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4.5l3.5 4v2h-8z" />
      <circle cx="6.5" cy="17.5" r="2" />
      <circle cx="17" cy="17.5" r="2" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12.5h18" />
    </>
  ),
}

export type IconName = keyof typeof paths

export default function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}
