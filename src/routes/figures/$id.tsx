import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import * as React from 'react'

import { ProfileHeader } from '@/components/ProfileHeader'
import { LEADERS } from '@/lib/leader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import { BookOpen, Clock, MessageCircle, Network } from 'lucide-react'
import { ProfileTabs } from '@/components/ProfileTabs'

type FigureEvent = {
  year: number
  title: string
  summary: string // 1–2 sentences
  whyItMatters?: string // 1 bullet
}

type Achievement = {
  title: string
  description: string // 1 line
  earnedDuring?: string
  type?: 'military' | 'politics' | 'culture' | 'science'
}

type HighlightCard = {
  title: string
  snippet: string // 1–2 lines
  detail?: string // optional expanded text
}

type FigureProfile = {
  oneLiner: string
  impactBullets: string[] // max ~3
  highlightCards: HighlightCard[] // 3–6
  events: FigureEvent[] // 5–10
  achievements: Achievement[] // 3–8
  wikipediaUrl?: string
}

type Figure = (typeof LEADERS)[number] & {
  profile?: FigureProfile
}

// Helper function to format years

export const Route = createFileRoute('/figures/$id')({
  loader: ({ params }) => {
    const figure = (LEADERS as Figure[]).find((f) => f.id === params.id)
    if (!figure) throw notFound()
    return { figure }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { figure } = Route.useLoaderData()

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Back to Figures */}
      <div className="mx-auto max-w-400 px-4 py-6">
        <Link
          to="/figures"
          className="inline-flex text-sm font-bold uppercase tracking-wider text-[#8b6914] hover:underline"
        >
          ← Back to Figures
        </Link>
      </div>

      {/* Profile Header */}
      <ProfileHeader figure={figure} />

      {/* tabs menu*/}
      <ProfileTabs />
    </div>
  )
}

/* ----------------------------- UI pieces ----------------------------- */

function Chip({
  children,
  icon,
}: {
  children: React.ReactNode
  icon?: React.ReactNode
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded border border-[#e7dcc8] bg-white/60 px-3 py-2 text-sm font-semibold text-[#2b1d0b]">
      {icon}
      {children}
    </span>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-md border border-[#e7dcc8] bg-white px-4 py-3">
      <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b6914]">
        {title}
      </p>
      <div>{children}</div>
    </div>
  )
}

function SidebarCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-md border border-[#e7dcc8] bg-[#faf8f5] px-4 py-3">
      <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b6914]">
        {title}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function RevealCard({ card }: { card: HighlightCard }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="rounded-md border border-[#eee3d0] bg-[#faf8f5] px-4 py-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-bold text-[#2b1d0b]">{card.title}</p>
          <p className="mt-1 text-sm text-[#2b1d0b] leading-relaxed">
            {card.snippet}
          </p>
        </div>

        {card.detail ? (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded border border-[#e7dcc8] bg-white px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#8b6914] hover:bg-[#faf8f5]"
          >
            {open ? 'Hide' : 'Reveal'}
          </button>
        ) : null}
      </div>

      {open && card.detail ? (
        <div className="mt-3 rounded-md border border-[#e7dcc8] bg-white px-3 py-2 text-sm text-[#2b1d0b] leading-relaxed">
          {card.detail}
        </div>
      ) : null}
    </div>
  )
}

// function TimelineItem({ ev }: { ev: FigureEvent }) {
//   const [open, setOpen] = React.useState(false)

//   return (
//     <div className="rounded-md border border-[#eee3d0] bg-[#faf8f5] px-4 py-3">
//       <button
//         type="button"
//         onClick={() => setOpen((v) => !v)}
//         className="w-full text-left"
//       >
//         <div className="flex items-start justify-between gap-3">
//           <div className="min-w-0">
//             <p className="text-xs font-bold uppercase tracking-wider text-[#8b6914]">
//               {formatYear(ev.year)}
//             </p>
//             <p className="mt-1 font-bold text-[#2b1d0b]">{ev.title}</p>
//             <p className="mt-1 text-sm text-[#2b1d0b] leading-relaxed">
//               {ev.summary}
//             </p>
//           </div>

//           {open ? (
//             <ChevronUp className="h-5 w-5 text-[#8b6914] shrink-0" />
//           ) : (
//             <ChevronDown className="h-5 w-5 text-[#8b6914] shrink-0" />
//           )}
//         </div>
//       </button>

//       {open && ev.whyItMatters ? (
//         <div className="mt-3 rounded-md border border-[#e7dcc8] bg-white px-3 py-2">
//           <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b6914]">
//             Why it matters
//           </p>
//           <p className="mt-1 text-sm text-[#2b1d0b] leading-relaxed">
//             {ev.whyItMatters}
//           </p>
//         </div>
//       ) : null}
//     </div>
//   )
// }

/* ----------------------------- Helpers ----------------------------- */

// function buildProfileFallback(figure: Figure): FigureProfile {
//   // Minimal “fun” defaults so every profile feels alive even before you hand-author everything.
//   const influenceYears = Math.abs(
//     figure.influenceEnd - (figure.influenceStart - 1),
//   )

//   return {
//     oneLiner: `${figure.name} became historically significant through influence that shaped their era and lasted beyond their lifetime.`,
//     impactBullets: [
//       `Defined an era through major decisions and leadership.`,
//       `Left an enduring legacy tied to ${figure.association}.`,
//       `Influence spanned roughly ${influenceYears} years.`,
//     ],
//     highlightCards: [
//       {
//         title: 'Origin',
//         snippet: `Associated with ${figure.association}.`,
//         detail: `This profile uses bite-size highlights instead of long essays. You can expand details as you build out more data.`,
//       },
//       {
//         title: 'Rise',
//         snippet: `Rose to prominence during their influence period.`,
//       },
//       {
//         title: 'Signature',
//         snippet: `Known for traits like ${figure.traits.slice(0, 2).join(' & ')}.`,
//       },
//       {
//         title: 'Legacy',
//         snippet: `Remembered as a key figure of their time.`,
//       },
//     ],
//     events: [
//       {
//         year: figure.influenceStart,
//         title: 'Prominence begins',
//         summary: 'Marks the beginning of their major historical influence.',
//         whyItMatters:
//           'This is where their actions started shaping broader history.',
//       },
//       {
//         year: figure.influenceEnd,
//         title: 'Prominence ends',
//         summary: 'Marks the end of their primary period of influence.',
//         whyItMatters: 'The aftermath often defines how history remembers them.',
//       },
//     ],
//     achievements: [
//       {
//         title: 'Influence Streak',
//         description: `Maintained influence for ~${influenceYears} years.`,
//         earnedDuring: `${formatYear(figure.influenceStart)} – ${formatYear(figure.influenceEnd)}`,
//       },
//       {
//         title: 'Legacy Marker',
//         description: `Recognized as a historically notable figure.`,
//       },
//       {
//         title: 'Trait Set',
//         description: `Embodies: ${figure.traits.join(', ')}.`,
//       },
//     ],
//     wikipediaUrl: undefined,
//   }
// }
