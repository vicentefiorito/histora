{
  /* Lenses */
}
;<section id="lenses" className="mx-auto max-w-7xl px-4 pb-16">
  <div className="flex items-end justify-between gap-6">
    <div>
      <div
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: INK }}
      >
        Browse by lens
      </div>
      <h2
        className="mt-2 text-2xl font-semibold md:text-3xl"
        style={{
          fontFamily:
            "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
        }}
      >
        Pick a perspective. Follow the thread.
      </h2>
      <p
        className="mt-2 max-w-2xl text-sm md:text-base"
        style={{ color: '#5a5147' }}
      >
        Lenses are just viewpoints — switch anytime to see the same era through
        different forces: ideas, trade, war, daily life, and more.
      </p>
    </div>
    <div className="hidden md:block">
      <div
        className="rounded-2xl border px-4 py-3 text-sm"
        style={{
          borderColor: CREAM_200,
          background: 'rgba(255,255,255,0.45)',
        }}
      >
        <span className="font-semibold" style={{ color: INK }}>
          Pro tip:
        </span>{' '}
        Use the timeline first, then add a lens.
      </div>
    </div>
  </div>

  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {/* {lensTiles.map((t) => (
              <LensTile key={t.title} {...t} />
            ))} */}
  </div>
</section>
