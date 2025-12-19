import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: HistoraLandingMock })

import {
  ArrowRight,
  BookOpen,
  Compass,
  FlaskConical,
  Globe2,
  Landmark,
  LibraryBig,
  ScrollText,
  Swords,
  Users,
} from 'lucide-react'
import { useMemo, useState } from 'react'

/**
 * Histora landing page mock
 * - Single component you can drop into a route to see the look/feel.
 * - Uses Tailwind classes. No external UI kit required.
 *
 * Tip: set body bg to --cream in your globals. This file includes its own background.
 */

export const CREAM = '#fbf7f2'
export const CREAM_100 = '#f4ede4'
export const CREAM_200 = '#e8dccb'
// export const MAROON = '#5b1f1f'
// export const MAROON_HOVER = '#6f2a2a'
export const INK = '#1f3a5f'
// export const GOLD = '#c9a24d'

const eras = [
  { id: 'ancient', label: 'Antiquity', from: -800, to: 500 },
  { id: 'medieval', label: 'Middle Ages', from: 500, to: 1500 },
  { id: 'early', label: 'Early Modern', from: 1500, to: 1800 },
  { id: 'modern', label: 'Modern', from: 1800, to: 2025 },
]

const timelineMoments = [
  {
    year: 476,
    title: 'Western Roman Empire dissolves',
    lens: 'Power & Politics',
    tags: ['Late Antiquity', 'Europe'],
    summary:
      'A symbolic endpoint for ancient Rome in the West; institutions transform rather than vanish.',
    figures: ['Odoacer', 'Romulus Augustulus', 'Zeno'],
    places: ['Ravenna', 'Rome'],
  },
  {
    year: 622,
    title: 'The Hijra',
    lens: 'Ideas & Faith',
    tags: ['Late Antiquity', 'Middle East'],
    summary:
      'A foundational migration marking the start of the Islamic calendar and a turning point in community formation.',
    figures: ['Muhammad'],
    places: ['Mecca', 'Medina'],
  },
  {
    year: 1066,
    title: 'Norman Conquest of England',
    lens: 'Wars & Conflict',
    tags: ['Middle Ages', 'Europe'],
    summary:
      'A dynastic and administrative shift that reshaped language, law, and elite culture.',
    figures: ['William the Conqueror', 'Harold Godwinson'],
    places: ['Hastings', 'London'],
  },
  {
    year: 1453,
    title: 'Fall of Constantinople',
    lens: 'Wars & Conflict',
    tags: ['Middle Ages', 'Eurasia'],
    summary:
      'A pivotal siege with wide ripple effects across trade, politics, and cultural memory.',
    figures: ['Mehmed II', 'Constantine XI'],
    places: ['Constantinople'],
  },
  {
    year: 1492,
    title: 'Columbian Exchange accelerates',
    lens: 'Trade & Routes',
    tags: ['Early Modern', 'Atlantic'],
    summary:
      'Ecological and economic transformations connect continents—often violently and unevenly.',
    figures: ['Indigenous polities', 'European crowns'],
    places: ['Caribbean', 'Iberia'],
  },
  {
    year: 1687,
    title: 'Principia Mathematica published',
    lens: 'Science & Inventions',
    tags: ['Early Modern', 'Europe'],
    summary:
      'A landmark synthesis in physics and mathematics shaping scientific methods for centuries.',
    figures: ['Isaac Newton'],
    places: ['London'],
  },
  {
    year: 1789,
    title: 'French Revolution begins',
    lens: 'Power & Politics',
    tags: ['Modern', 'Europe'],
    summary:
      'A political rupture that redefined sovereignty, citizenship, and the vocabulary of rights.',
    figures: ['National Assembly', 'Louis XVI'],
    places: ['Paris'],
  },
  {
    year: 1918,
    title: 'End of World War I',
    lens: 'Wars & Conflict',
    tags: ['Modern', 'Global'],
    summary:
      'Armistice and political reordering; empires dissolve, borders shift, and new states emerge.',
    figures: ['Woodrow Wilson', 'Clemenceau', 'Lloyd George'],
    places: ['Compiègne', 'Versailles'],
  },
  {
    year: 1969,
    title: 'Apollo 11 Moon landing',
    lens: 'Science & Inventions',
    tags: ['Modern', 'Global'],
    summary:
      'A technological milestone fueled by Cold War competition and massive systems engineering.',
    figures: ['Neil Armstrong', 'Buzz Aldrin'],
    places: ['Moon', 'Houston'],
  },
]

const lensTiles = [
  {
    title: 'Power & Politics',
    icon: Landmark,
    hint: 'Revolutions, states, law',
    example: 'Try: “Congress of Vienna”',
  },
  {
    title: 'Wars & Conflict',
    icon: Swords,
    hint: 'Campaigns, strategy',
    example: 'Try: “Hannibal”',
  },
  {
    title: 'Trade & Routes',
    icon: Globe2,
    hint: 'Goods, networks',
    example: 'Try: “Silk Road”',
  },
  {
    title: 'Ideas & Faith',
    icon: ScrollText,
    hint: 'Beliefs, philosophy',
    example: 'Try: “Stoicism”',
  },
  {
    title: 'Science & Inventions',
    icon: FlaskConical,
    hint: 'Discoveries',
    example: 'Try: “Printing press”',
  },
  {
    title: 'Art & Culture',
    icon: LibraryBig,
    hint: 'Works, styles',
    example: 'Try: “Renaissance”',
  },
  {
    title: 'Daily Life',
    icon: Users,
    hint: 'Food, work, norms',
    example: 'Try: “Medieval bakery”',
  },
  {
    title: 'Sources',
    icon: BookOpen,
    hint: 'Evidence, citations',
    example: 'Try: “Primary sources 1453”',
  },
]

const collections = [
  {
    title: 'The Fall of Rome',
    meta: 'Late Antiquity • Politics • War',
    counts: '18 moments • 42 figures',
  },
  {
    title: 'The Silk Road',
    meta: 'Eurasia • Trade • Ideas',
    counts: '22 moments • 55 figures',
  },
  {
    title: 'Age of Revolutions',
    meta: '1750–1900 • Global',
    counts: '20 moments • 61 figures',
  },
  {
    title: 'Printing & the Public Sphere',
    meta: 'Early Modern • Culture',
    counts: '14 moments • 38 figures',
  },
]

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function formatYear(y: number) {
  if (y < 0) return `${Math.abs(y)} BCE`
  return `${y} CE`
}

function PaperGrain() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 10%, rgba(255,255,255,0.75), transparent 45%), radial-gradient(circle at 80% 25%, rgba(0,0,0,0.05), transparent 55%), radial-gradient(circle at 40% 80%, rgba(0,0,0,0.04), transparent 55%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.25,
        }}
      />
    </div>
  )
}

// function StatPill({ icon: Icon, label, value }: any) {
//   return (
//     <div
//       className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
//       style={{ borderColor: CREAM_200, background: 'rgba(255,255,255,0.35)' }}
//     >
//       <Icon className="h-4 w-4" style={{ color: INK }} />
//       <span className="text-neutral-800">{label}</span>
//       <span className="font-semibold" style={{ color: MAROON }}>
//         {value}
//       </span>
//     </div>
//   )
// }

// function MomentCard({ moment }: { moment: (typeof timelineMoments)[number] }) {
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={moment.year}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -10 }}
//         transition={{ duration: 0.25 }}
//         className="relative overflow-hidden rounded-2xl border p-5 shadow-sm"
//         style={{ borderColor: CREAM_200, background: 'rgba(255,255,255,0.55)' }}
//       >
//         <div
//           className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
//           style={{
//             background: `radial-gradient(circle, ${INK}33, transparent 60%)`,
//           }}
//         />
//         <div className="flex items-start justify-between gap-4">
//           <div>
//             <div
//               className="text-xs font-semibold uppercase tracking-wider"
//               style={{ color: INK }}
//             >
//               Featured moment • {formatYear(moment.year)}
//             </div>
//             <div className="mt-1 text-xl font-semibold text-neutral-900">
//               {moment.title}
//             </div>
//             <div className="mt-2 text-sm" style={{ color: '#5a5147' }}>
//               {moment.summary}
//             </div>
//           </div>
//           <span
//             className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
//             style={{
//               background: `${MAROON}10`,
//               color: MAROON,
//               border: `1px solid ${CREAM_200}`,
//             }}
//           >
//             {moment.lens}
//           </span>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {moment.tags.map((t) => (
//             <span
//               key={t}
//               className="rounded-full px-2.5 py-1 text-xs"
//               style={{
//                 background: `${GOLD}1a`,
//                 color: '#4b3b22',
//                 border: `1px solid ${CREAM_200}`,
//               }}
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
//           <div
//             className="rounded-xl border p-3"
//             style={{
//               borderColor: CREAM_200,
//               background: 'rgba(251,247,242,0.7)',
//             }}
//           >
//             <div
//               className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
//               style={{ color: INK }}
//             >
//               <Users className="h-4 w-4" /> Key figures
//             </div>
//             <div className="mt-2 flex flex-wrap gap-2">
//               {moment.figures.slice(0, 3).map((f) => (
//                 <span
//                   key={f}
//                   className="rounded-full border px-2 py-1 text-xs"
//                   style={{ borderColor: CREAM_200 }}
//                 >
//                   {f}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <div
//             className="rounded-xl border p-3"
//             style={{
//               borderColor: CREAM_200,
//               background: 'rgba(251,247,242,0.7)',
//             }}
//           >
//             <div
//               className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"
//               style={{ color: INK }}
//             >
//               <MapPin className="h-4 w-4" /> Places
//             </div>
//             <div className="mt-2 flex flex-wrap gap-2">
//               {moment.places.slice(0, 3).map((p) => (
//                 <span
//                   key={p}
//                   className="rounded-full border px-2 py-1 text-xs"
//                   style={{ borderColor: CREAM_200 }}
//                 >
//                   {p}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-5 flex items-center gap-3">
//           <button
//             className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition"
//             style={{ background: MAROON, color: CREAM }}
//           >
//             Explore this moment <ArrowRight className="h-4 w-4" />
//           </button>
//           <button
//             className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition"
//             style={{
//               borderColor: CREAM_200,
//               color: MAROON,
//               background: 'rgba(251,247,242,0.75)',
//             }}
//           >
//             View sources <ShieldCheck className="h-4 w-4" />
//           </button>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

// function LensTile({ title, hint, example, icon: Icon }: any) {
//   return (
//     <motion.button
//       whileHover={{ y: -4 }}
//       whileTap={{ scale: 0.98 }}
//       className="group relative overflow-hidden rounded-2xl border p-5 text-left shadow-sm"
//       style={{ borderColor: CREAM_200, background: 'rgba(255,255,255,0.55)' }}
//     >
//       <div
//         className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//         style={{
//           background: `radial-gradient(circle, ${MAROON}26, transparent 60%)`,
//         }}
//       />
//       <div className="flex items-start gap-3">
//         <div
//           className="flex h-10 w-10 items-center justify-center rounded-xl border"
//           style={{ borderColor: CREAM_200, background: `${MAROON}08` }}
//         >
//           <Icon className="h-5 w-5" style={{ color: MAROON }} />
//         </div>
//         <div className="min-w-0">
//           <div className="text-base font-semibold text-neutral-900">
//             {title}
//           </div>
//           <div className="mt-1 text-sm" style={{ color: '#5a5147' }}>
//             {hint}
//           </div>
//           <div
//             className="mt-3 flex items-center gap-2 text-xs font-semibold"
//             style={{ color: INK }}
//           >
//             <Sparkles className="h-4 w-4" />
//             <span className="opacity-70 group-hover:opacity-100 transition-opacity">
//               {example}
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4 flex items-center justify-between">
//         <span
//           className="text-xs font-semibold uppercase tracking-wider"
//           style={{ color: INK }}
//         >
//           Open lens
//         </span>
//         <ArrowRight
//           className="h-4 w-4 transition-transform group-hover:translate-x-1"
//           style={{ color: INK }}
//         />
//       </div>
//     </motion.button>
//   )
// }

export default function HistoraLandingMock() {
  const [query, setQuery] = useState('')
  const [era, setEra] = useState(eras[1].id)
  const eraObj = useMemo(() => eras.find((e) => e.id === era)!, [era])

  const [year, setYear] = useState(1453)
  const yearClamped = clamp(year, eraObj.from, eraObj.to)

  const moment = useMemo(() => {
    // pick closest moment to the selected year
    return timelineMoments.reduce((best, m) =>
      Math.abs(m.year - yearClamped) < Math.abs(best.year - yearClamped)
        ? m
        : best,
    )
  }, [yearClamped])

  const sliderPct = useMemo(() => {
    const span = eraObj.to - eraObj.from
    return ((yearClamped - eraObj.from) / span) * 100
  }, [yearClamped, eraObj])

  return (
    <div
      className="min-h-screen"
      style={{ background: CREAM, color: '#2b2b2b' }}
    >
      <div className="relative">
        <PaperGrain />

        {/* Hero */}
        <section
          id="explore"
          className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:pt-14"
        >
          <div className="grid items-start gap-10 md:grid-cols-2">
            {/* Left */}
            <div>
              <h1
                className="text-4xl font-semibold leading-tight md:text-5xl"
                style={{
                  fontFamily:
                    "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
                }}
              >
                History, alive in <span style={{ color: INK }}>time</span> and{' '}
                <span style={{ color: INK }}>place</span>.
              </h1>
              <p
                className="mt-4 max-w-xl text-base md:text-lg"
                style={{ color: '#5a5147' }}
              >
                Search people, events, places, and ideas — then follow the
                connections with sources. Build collections, compare figures,
                and switch lenses anytime.
              </p>

              {/* CTA row */}
              {/* <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm"
                  style={{ background: MAROON, color: CREAM }}
                >
                  Start exploring <ArrowRight className="h-4 w-4" />
                </button>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
