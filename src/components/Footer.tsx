import { CREAM_200, MAROON, INK } from '@/routes'
import { Compass, Github, Download, ShieldCheck, BookOpen } from 'lucide-react'

{
  /* Footer */
}
;<footer className="border-t" style={{ borderColor: CREAM_200 }}>
  <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-3">
    <div>
      <div className="flex items-center gap-2">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl"
          style={{
            background: `${MAROON}0f`,
            border: `1px solid ${CREAM_200}`,
          }}
        >
          <Compass className="h-5 w-5" style={{ color: MAROON }} />
        </div>
        <div className="text-lg font-semibold">Histora</div>
      </div>
      <p className="mt-3 text-sm" style={{ color: '#5a5147' }}>
        A history explorer built for time, place, people, and sources.
      </p>
      <div
        className="mt-4 flex items-center gap-3 text-sm"
        style={{ color: INK }}
      >
        <a href="#" className="inline-flex items-center gap-2">
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a href="#" className="inline-flex items-center gap-2">
          <Download className="h-4 w-4" /> Exports
        </a>
      </div>
    </div>
    <div className="text-sm" style={{ color: '#5a5147' }}>
      <div className="font-semibold" style={{ color: '#2b2b2b' }}>
        Product
      </div>
      <div className="mt-3 grid gap-2">
        <a href="#explore">Explore</a>
        <a href="#lenses">Lenses</a>
        <a href="#collections">Collections</a>
        <a href="#how">How it works</a>
      </div>
    </div>
    <div className="text-sm" style={{ color: '#5a5147' }}>
      <div className="font-semibold" style={{ color: '#2b2b2b' }}>
        Principles
      </div>
      <div className="mt-3 grid gap-3">
        <div className="flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-4 w-4" style={{ color: MAROON }} />
          <span>Sources-first. Claims link to evidence.</span>
        </div>
        <div className="flex items-start gap-2">
          <Compass className="mt-0.5 h-4 w-4" style={{ color: MAROON }} />
          <span>Multiple lenses. One truth is rarely enough.</span>
        </div>
        <div className="flex items-start gap-2">
          <BookOpen className="mt-0.5 h-4 w-4" style={{ color: MAROON }} />
          <span>Collections turn curiosity into learning paths.</span>
        </div>
      </div>
    </div>
  </div>
  <div className="px-4 pb-8 text-center text-xs" style={{ color: '#8a8176' }}>
    © {new Date().getFullYear()} Histora • Built for exploration
  </div>
</footer>
