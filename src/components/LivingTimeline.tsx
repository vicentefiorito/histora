{
  /* Right: Living Timeline */
}
;<div>
  <div
    className="relative overflow-hidden rounded-3xl border shadow-sm"
    style={{
      borderColor: CREAM_200,
      background: 'rgba(255,255,255,0.45)',
    }}
  >
    {/* header strip */}
    <div
      className="flex items-center justify-between border-b px-5 py-4"
      style={{ borderColor: CREAM_200 }}
    >
      <div>
        <div
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: INK }}
        >
          Live demo
        </div>
        <div className="text-base font-semibold text-neutral-900">
          The Living Timeline
        </div>
      </div>
      <div
        className="rounded-full border px-3 py-1 text-xs font-semibold"
        style={{
          borderColor: CREAM_200,
          background: 'rgba(251,247,242,0.75)',
          color: '#5a5147',
        }}
      >
        Drag the year
      </div>
    </div>

    {/* map-ish background */}
    <div className="relative px-5 pb-5 pt-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 35%, rgba(31,58,95,0.10), transparent 55%), radial-gradient(circle at 70% 60%, rgba(91,31,31,0.10), transparent 55%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="900" height="450" viewBox="0 0 900 450"><g fill="none" stroke="%231f3a5f" stroke-opacity="0.35" stroke-width="1"><path d="M80 220 C140 180, 210 180, 270 215 C330 250, 400 270, 470 240 C540 210, 620 190, 700 210"/><path d="M120 260 C190 230, 260 240, 320 270 C380 300, 450 310, 520 280 C590 250, 660 240, 760 260"/><path d="M180 160 C250 140, 320 150, 380 175 C440 200, 520 210, 600 185 C680 160, 750 150, 820 165"/></g></svg>\')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      {/* slider */}
      <div className="relative">
        <div
          className="flex items-center justify-between text-xs font-semibold"
          style={{ color: '#5a5147' }}
        >
          <span>{formatYear(eraObj.from)}</span>
          <span>{formatYear(eraObj.to)}</span>
        </div>

        <div className="mt-3">
          <input
            type="range"
            min={eraObj.from}
            max={eraObj.to}
            value={yearClamped}
            onChange={(e) => setYear(parseInt(e.target.value, 10))}
            className="w-full accent-[--ink]"
            style={{
              // Safari-ish: we still want a nice track feel
              accentColor: INK,
            }}
          />
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
            style={{
              borderColor: CREAM_200,
              background: 'rgba(251,247,242,0.75)',
              color: INK,
            }}
          >
            <CalendarDays className="h-4 w-4" />
            Selected:{' '}
            <span className="font-bold">{formatYear(yearClamped)}</span>
          </div>
          <div className="text-xs" style={{ color: '#8a8176' }}>
            Closest highlight:{' '}
            <span className="font-semibold" style={{ color: INK }}>
              {formatYear(moment.year)}
            </span>
          </div>
        </div>

        {/* visual progress line */}
        <div
          className="mt-4 h-2 w-full rounded-full"
          style={{ background: `${CREAM_200}` }}
        >
          <div
            className="h-2 rounded-full"
            style={{
              width: `${sliderPct}%`,
              background: `linear-gradient(90deg, ${INK}, ${MAROON})`,
            }}
          />
        </div>
      </div>

      {/* <div className="mt-5">
                    <MomentCard moment={moment} />
                  </div> */}
    </div>
  </div>

  {/* mini trust row under demo */}
  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
    {[
      {
        icon: ShieldCheck,
        title: 'Citations',
        text: 'Every page links to sources.',
      },
      {
        icon: Compass,
        title: 'Lenses',
        text: 'Switch perspectives instantly.',
      },
      {
        icon: BookOpen,
        title: 'Collections',
        text: 'Save your own paths.',
      },
    ].map((it) => (
      <div
        key={it.title}
        className="flex items-start gap-3 rounded-2xl border p-4"
        style={{
          borderColor: CREAM_200,
          background: 'rgba(255,255,255,0.40)',
        }}
      >
        <it.icon className="h-5 w-5" style={{ color: MAROON }} />
        <div>
          <div className="text-sm font-semibold text-neutral-900">
            {it.title}
          </div>
          <div className="text-xs" style={{ color: '#5a5147' }}>
            {it.text}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
