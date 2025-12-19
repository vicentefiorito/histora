{
  /* How it works */
}
;<section id="how" className="mx-auto max-w-7xl px-4 pb-16">
  <div
    className="rounded-3xl border p-7 md:p-10"
    style={{
      borderColor: CREAM_200,
      background: 'rgba(255,255,255,0.45)',
    }}
  >
    <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
      <div className="max-w-2xl">
        <div
          className="text-xs font-semibold uppercase tracking-wider"
          style={{ color: INK }}
        >
          How Histora works
        </div>
        <h2
          className="mt-2 text-2xl font-semibold md:text-3xl"
          style={{
            fontFamily:
              "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
          }}
        >
          Explore like a historian.
        </h2>
        <p className="mt-2 text-sm md:text-base" style={{ color: '#5a5147' }}>
          Start broad, then narrow: search, connect entities, verify with
          sources, and save your own collections.
        </p>
      </div>
      <div
        className="rounded-2xl border px-4 py-3 text-sm"
        style={{
          borderColor: CREAM_200,
          background: 'rgba(251,247,242,0.75)',
        }}
      >
        <span className="font-semibold" style={{ color: MAROON }}>
          Design principle:
        </span>{' '}
        clarity first, wonder second.
      </div>
    </div>

    <div className="mt-7 grid gap-4 md:grid-cols-4">
      {[
        { icon: Search, title: 'Search', text: 'Any topic, any era.' },
        {
          icon: Compass,
          title: 'Connect',
          text: 'Follow links across time.',
        },
        {
          icon: ShieldCheck,
          title: 'Verify',
          text: 'Citations + sources.',
        },
        { icon: BookOpen, title: 'Save', text: 'Collections + notes.' },
      ].map((s) => (
        <div
          key={s.title}
          className="rounded-2xl border p-5"
          style={{
            borderColor: CREAM_200,
            background: 'rgba(255,255,255,0.55)',
          }}
        >
          <div className="flex items-center gap-2">
            <s.icon className="h-5 w-5" style={{ color: INK }} />
            <div className="text-sm font-semibold text-neutral-900">
              {s.title}
            </div>
          </div>
          <div className="mt-2 text-sm" style={{ color: '#5a5147' }}>
            {s.text}
          </div>
          <div
            className="mt-4 h-1.5 w-full rounded-full"
            style={{ background: CREAM_200 }}
          >
            <div
              className="h-1.5 rounded-full"
              style={{
                width: '70%',
                background: `linear-gradient(90deg, ${INK}, ${GOLD})`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
