export const company = {
  name: 'FARRUKH EXPRESS INC',
  shortName: 'Farrukh Express',
  domain: 'www.farrukhexpress.com',
  mc: '1418733',
  dot: '3873235',
  phone: '(415) 794-6677',
  phoneHref: 'tel:+14157946677',
  email: 'info@farrukhexpress.com',
  address: '141 Broad Blvd Ste 116, Cuyahoga Falls, OH 44221',
  addressLines: ['141 Broad Blvd Ste 116', 'Cuyahoga Falls, OH 44221'],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=141+Broad+Blvd+Ste+116,+Cuyahoga+Falls,+OH+44221',
  hours: 'Dispatch available 24/7 · Office Mon–Fri, 9:00 AM – 6:00 PM EST',
  /**
   * The real badge. Save the artwork to public/logo.png and it is picked up
   * automatically — <Logo> falls back to logoFallback until that file exists.
   */
  logo: '/logo.png',
  logoFallback: '/logo.svg',
} as const

export const stats = [
  { value: '30+', label: 'Professional Drivers' },
  { value: '30+', label: 'Power Units in the Fleet' },
  { value: '15M+', label: 'Miles Driven Safely' },
  { value: '3,480', label: 'Loads Delivered' },
] as const

export type Service = {
  slug: string
  icon: string
  title: string
  blurb: string
  points: string[]
}

export const services: Service[] = [
  {
    slug: 'dry-van',
    icon: 'van',
    title: 'Dry Van Freight',
    blurb:
      'Nationwide general freight in 53-foot dry vans, running both drop-and-hook and live-load shipments.',
    points: [
      '53-foot air-ride trailers',
      'Drop-and-hook and live load',
      'Palletized and floor-loaded freight',
      'Nationwide coverage, all 48 states',
    ],
  },
  {
    slug: 'reefer',
    icon: 'reefer',
    title: 'Refrigerated (Reefer)',
    blurb:
      'Temperature-controlled transport with continuous monitoring of trailer temperature, reefer fuel, and appointment windows.',
    points: [
      'Continuous temperature monitoring',
      'Produce, food-grade, and pharma-adjacent freight',
      'Pre-cool and download verification',
      'Strict appointment compliance',
    ],
  },
  {
    slug: 'flatbed',
    icon: 'flatbed',
    title: 'Flatbed & Open Deck',
    blurb:
      'Open-deck freight secured, inspected, and protected on every leg of the trip by experienced flatbed drivers.',
    points: [
      'Straps, chains, binders, and tarping',
      'Building materials, steel, and machinery',
      'Full load-securement compliance',
      'Route and permit planning',
    ],
  },
  {
    slug: 'dedicated',
    icon: 'route',
    title: 'Dedicated Lanes',
    blurb:
      'Consistent capacity on recurring lanes, with the same equipment and the same drivers running your freight.',
    points: [
      'Committed weekly capacity',
      'Consistent drivers on your account',
      'Predictable transit times',
      'Volume-based pricing',
    ],
  },
  {
    slug: 'expedited',
    icon: 'clock',
    title: 'Expedited & Team Service',
    blurb:
      'Team-driven, time-critical shipments that keep moving around the clock when a delivery window cannot slip.',
    points: [
      'Coast-to-coast team power',
      'Time-critical and hot loads',
      'Minimal dwell, continuous movement',
      'Live status through delivery',
    ],
  },
  {
    slug: 'dispatch',
    icon: 'support',
    title: '24/7 Dispatch & Tracking',
    blurb:
      'A dispatch desk that answers the phone, plus proactive tracking updates from pickup through proof of delivery.',
    points: [
      'Around-the-clock dispatch',
      'Proactive check calls and updates',
      'ELD and hours-of-service monitoring',
      'Fast POD and document turnaround',
    ],
  },
]

export type Position = {
  slug: string
  title: string
  type: string
  summary: string
  responsibilities?: string[]
  requirements: string[]
}

export const driverPositions: Position[] = [
  {
    slug: 'company-driver-dry-van',
    title: 'Company Driver — Dry Van',
    type: 'Company Driver',
    summary:
      'Transport general freight nationwide using 53-foot dry-van trailers. Drivers handle drop-and-hook and live-load shipments, complete inspections, maintain ELD records, and communicate delivery updates.',
    requirements: [
      'Valid Class A CDL',
      'Two years of verifiable OTR experience',
      'Acceptable driving and safety record',
      'Current DOT medical card',
      'Ability to pass required screenings',
      'Professional and reliable communication',
    ],
  },
  {
    slug: 'company-driver-reefer',
    title: 'Company Driver — Reefer',
    type: 'Company Driver',
    summary:
      'Transport temperature-controlled freight while monitoring trailer temperature, reefer fuel, appointment times, and shipment requirements.',
    requirements: [
      'Valid Class A CDL',
      'Two years of verifiable OTR experience',
      'Reefer experience preferred',
      'Acceptable driving and safety record',
      'Ability to manage temperature-sensitive loads',
      'Strong attention to detail and communication',
    ],
  },
  {
    slug: 'company-driver-flatbed',
    title: 'Company Driver — Flatbed',
    type: 'Company Driver',
    summary:
      'Transport open-deck freight while properly securing, inspecting, and protecting each load throughout the trip.',
    requirements: [
      'Valid Class A CDL',
      'Two years of verifiable OTR experience',
      'Flatbed and load-securement experience',
      'Knowledge of straps, chains, binders, and tarping',
      'Ability to perform the physical duties of the position',
      'Strong safety and inspection habits',
    ],
  },
  {
    slug: 'team-drivers',
    title: 'Team Drivers',
    type: 'Team',
    summary:
      'Operate as a driving team on long-distance and time-sensitive shipments. Team members alternate driving responsibilities to keep freight moving safely and efficiently.',
    requirements: [
      'Both drivers must hold valid Class A CDLs',
      'Two years of verifiable OTR experience',
      'Established teams preferred',
      'Acceptable driving and safety records',
      'Strong teamwork and communication',
      'Ability to remain OTR for extended periods',
    ],
  },
  {
    slug: 'owner-operators',
    title: 'Owner-Operators',
    type: 'Owner-Operator',
    summary:
      'Operate your own truck while hauling freight through FARRUKH EXPRESS INC. Owner-operators manage their equipment and operating expenses while following company safety and service standards.',
    requirements: [
      'Road-ready Class 8 tractor',
      'Valid Class A CDL',
      'Two years of verifiable OTR experience',
      'Tractor must pass company inspection',
      'Required registration and insurance documents',
      'ELD, safety, and communication compliance',
    ],
  },
  {
    slug: 'lease-to-purchase',
    title: 'Lease-to-Purchase Drivers',
    type: 'Lease Purchase',
    summary:
      'Operate an approved truck through a written lease-to-purchase program while working toward ownership. Drivers manage fuel, maintenance, operating expenses, and weekly settlements as independent business operators.',
    requirements: [
      'Valid Class A CDL',
      'Two years of verifiable OTR experience',
      'Qualifying driving and safety record',
      'Ability to manage business expenses responsibly',
      'Compliance with maintenance and operational requirements',
      'Approval and signed lease-purchase agreement',
    ],
  },
]

export const driverPositionsNote =
  'Program availability and terms may vary by equipment and applicant.'

export const officePositions: Position[] = [
  {
    slug: 'dispatcher',
    title: 'Dispatcher',
    type: 'Operations',
    summary:
      'Coordinate drivers, equipment, and freight from dispatch through delivery. The dispatcher plans routes, confirms appointments, monitors service, resolves delays, and helps maximize safe and efficient fleet performance.',
    responsibilities: [
      'Assign and manage loads',
      'Coordinate routes, appointments, fuel, and home time',
      'Communicate with drivers, brokers, and customers',
      'Monitor ELD hours and delivery progress',
      'Resolve breakdowns, delays, and service issues',
    ],
    requirements: [
      'OTR trucking or dispatch experience preferred',
      'Knowledge of ELD, hours-of-service, and load boards',
      'Strong communication and problem-solving skills',
      'Ability to manage multiple drivers and loads',
      'Professional, organized, and dependable',
    ],
  },
  {
    slug: 'load-tracking-specialist',
    title: 'Load Tracking & Customer Updates Specialist',
    type: 'Operations',
    summary:
      'Monitor active shipments and provide accurate, timely updates from pickup through delivery. This role keeps drivers, dispatchers, brokers, and customers connected.',
    responsibilities: [
      'Track pickups, transit progress, and deliveries',
      'Confirm arrival and departure times',
      'Update customer and broker tracking systems',
      'Collect bills of lading and proof-of-delivery documents',
      'Report delays or service issues immediately',
    ],
    requirements: [
      'Strong attention to detail',
      'Clear written and verbal communication',
      'Comfortable using computers, spreadsheets, and tracking platforms',
      'Ability to multitask in a fast-paced environment',
      'Transportation experience preferred',
    ],
  },
  {
    slug: 'safety-compliance-coordinator',
    title: 'Safety & Compliance Coordinator',
    type: 'Safety',
    summary:
      'Support safe and compliant fleet operations by maintaining driver records, monitoring ELD activity, reviewing inspections, and helping the company remain prepared for audits.',
    responsibilities: [
      'Maintain driver qualification and compliance files',
      'Review ELD records and hours-of-service violations',
      'Track inspections, citations, permits, and safety documents',
      'Assist with driver onboarding and safety training',
      'Coordinate incident, claim, and corrective-action documentation',
    ],
    requirements: [
      'Trucking safety or compliance experience preferred',
      'Knowledge of DOT and FMCSA requirements',
      'Familiarity with ELD, CSA, MVR, and driver qualification records',
      'Excellent documentation and organizational skills',
      'Ability to handle confidential information responsibly',
    ],
  },
  {
    slug: 'billing-settlements-specialist',
    title: 'Billing & Settlements Specialist',
    type: 'Accounting',
    summary:
      'Manage customer billing, driver settlements, payment records, and supporting freight documents with accuracy and confidentiality.',
    responsibilities: [
      'Prepare invoices using rate confirmations, BOLs, and PODs',
      'Process company-driver and owner-operator settlements',
      'Reconcile fuel, tolls, advances, and authorized deductions',
      'Track accounts receivable and missing documents',
      'Maintain complete and accurate financial records',
    ],
    requirements: [
      'Billing, accounting, or trucking-settlement experience preferred',
      'Strong Excel and data-entry skills',
      'High level of accuracy and attention to detail',
      'Ability to review and reconcile financial records',
      'Professional handling of confidential information',
    ],
  },
  {
    slug: 'business-development-manager',
    title: 'Business Development & Account Manager',
    type: 'Sales',
    summary:
      'Grow FARRUKH EXPRESS INC by developing relationships with shippers and brokers, identifying freight opportunities, and maintaining strong customer accounts.',
    responsibilities: [
      'Find and develop new shipper and broker relationships',
      'Present company services and available capacity',
      'Negotiate competitive rates and service agreements',
      'Maintain customer accounts and follow up on performance',
      'Coordinate customer needs with dispatch and operations',
    ],
    requirements: [
      'Transportation sales or account-management experience preferred',
      'Strong communication, sales, and negotiation skills',
      'Understanding of freight rates and transportation markets',
      'Ability to build and maintain professional relationships',
      'Self-motivated and focused on measurable growth',
    ],
  },
  {
    slug: 'fleet-maintenance-coordinator',
    title: 'Fleet Maintenance Coordinator',
    type: 'Maintenance',
    summary:
      'Keep company tractors and trailers safe, compliant, and road-ready by coordinating preventive maintenance, repairs, inspections, and roadside service.',
    responsibilities: [
      'Schedule preventive maintenance and required inspections',
      'Coordinate repairs with shops, dealerships, and roadside vendors',
      'Track breakdowns, warranties, repair estimates, and invoices',
      'Maintain service records for each truck and trailer',
      'Minimize downtime through proactive maintenance planning',
    ],
    requirements: [
      'Fleet maintenance or trucking experience preferred',
      'Basic knowledge of Class 8 tractors and trailers',
      'Strong vendor coordination and problem-solving skills',
      'Ability to review repair estimates and maintenance records',
      'Availability to respond to urgent equipment issues',
    ],
  },
]

export const values = [
  {
    icon: 'shield',
    title: 'Safety First, Always',
    text: 'Every load starts with a clean inspection and a rested driver. Our safety and compliance desk reviews ELD activity and driver files continuously, not just before an audit.',
  },
  {
    icon: 'handshake',
    title: 'Straight Answers',
    text: 'Drivers get honest miles and transparent settlements. Shippers get a real status, even when the news is a delay. No one has to chase us for an update.',
  },
  {
    icon: 'clock',
    title: 'On Time, On Purpose',
    text: 'Appointments are planned around hours of service and real transit times, so the delivery window we commit to is the one we can actually hit.',
  },
  {
    icon: 'wrench',
    title: 'Road-Ready Equipment',
    text: 'Preventive maintenance is scheduled, not reactive. A well-kept fleet means fewer breakdowns, fewer service failures, and safer miles for everyone.',
  },
]

export const driverBenefits = [
  'Consistent weekly miles and steady freight',
  'Transparent, on-time weekly settlements',
  'Late-model, well-maintained equipment',
  'Dispatch that answers 24/7 — real people, real fast',
  'Respected home time you can plan around',
  'Direct line to safety, maintenance, and payroll',
  'Rider and pet policies available',
  'Paid orientation and onboarding support',
]

export const fleet = [
  {
    title: 'Class 8 Tractors',
    spec: '30+ power units',
    text: 'Late-model sleeper tractors maintained on a scheduled preventive program, fully ELD-equipped and inspection-ready.',
    features: ['APU-equipped sleepers', 'ELD and GPS on every unit', 'Scheduled PM intervals', 'Automatic and manual options'],
  },
  {
    title: '53′ Dry Van Trailers',
    spec: 'General freight',
    text: 'Air-ride dry vans for palletized and floor-loaded general commodities, running drop-and-hook and live-load freight nationwide.',
    features: ['Air-ride suspension', 'Swing and roll doors', 'Load bars and straps', 'Drop-and-hook capable'],
  },
  {
    title: '53′ Refrigerated Trailers',
    spec: 'Temperature controlled',
    text: 'Reefer units with continuous temperature monitoring and verified pre-cool for food-grade and temperature-sensitive freight.',
    features: ['Continuous temp monitoring', 'Verified pre-cool', 'Fuel-level tracking', 'Download on delivery'],
  },
  {
    title: 'Flatbed & Open Deck',
    spec: 'Secured and tarped',
    text: 'Open-deck equipment with full securement kits, operated by drivers experienced in tarping and load protection.',
    features: ['Straps, chains, and binders', 'Tarping capability', 'Coil and machinery freight', 'Permit and route planning'],
  },
]

export const faqs = [
  {
    q: 'What experience do I need to drive for Farrukh Express?',
    a: 'A valid Class A CDL, two years of verifiable OTR experience, an acceptable driving and safety record, and a current DOT medical card. Specific positions may add requirements, such as reefer or flatbed experience.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We run nationwide across the lower 48 states, with dedicated lane capacity available for recurring freight.',
  },
  {
    q: 'How quickly will I hear back after applying?',
    a: 'Applications are reviewed as they arrive and our recruiting team typically responds within one to two business days. Call our office if you need an answer sooner.',
  },
  {
    q: 'Do you work with owner-operators?',
    a: 'Yes. Owner-operators run under our authority with a road-ready Class 8 tractor that passes company inspection, along with the required registration, insurance, and ELD compliance.',
  },
  {
    q: 'Is a lease-to-purchase program available?',
    a: 'We offer a written lease-to-purchase program for qualifying drivers. Program availability and terms vary by equipment and applicant — talk to our office for current details.',
  },
  {
    q: 'How do I request a quote or capacity for my freight?',
    a: 'Send your lane, commodity, equipment type, and target dates through the contact form or call dispatch directly. We respond with pricing and available capacity the same business day.',
  },
]
