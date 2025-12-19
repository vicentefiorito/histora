{
  /* Collections */
}
;<section id="collections" className="mx-auto max-w-7xl px-4 pb-16">
  <div className="flex items-end justify-between gap-6">
    <div>
      <div
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: INK }}
      >
        Featured collections
      </div>
      <h2
        className="mt-2 text-2xl font-semibold md:text-3xl"
        style={{
          fontFamily:
            "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
        }}
      >
        Curated paths you can binge.
      </h2>
      <p
        className="mt-2 max-w-2xl text-sm md:text-base"
        style={{ color: '#5a5147' }}
      >
        Collections feel like playlists: a sequence of moments, figures, places,
        and sources.
      </p>
    </div>
    <button
      className="hidden items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold md:inline-flex"
      style={{
        borderColor: CREAM_200,
        color: MAROON,
        background: 'rgba(251,247,242,0.75)',
      }}
    >
      View all collections <ArrowRight className="h-4 w-4" />
    </button>
  </div>

  <div className="mt-6 grid gap-4 md:grid-cols-2">
    {collections.map((c, idx) => (
      <motion.div
        key={c.title}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: idx * 0.05 }}
        className="group relative overflow-hidden rounded-3xl border p-6"
        style={{
          borderColor: CREAM_200,
          background: 'rgba(255,255,255,0.50)',
        }}
      >
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${GOLD}1f, transparent 55%), radial-gradient(circle at 80% 60%, ${INK}14, transparent 55%)`,
          }}
        />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="text-xl font-semibold text-neutral-900">
              {c.title}
            </div>
            <div className="mt-1 text-sm" style={{ color: '#5a5147' }}>
              {c.meta}
            </div>
            <div className="mt-3 text-sm font-semibold" style={{ color: INK }}>
              {c.counts}
            </div>

            {/* mini timeline dots */}
            <div className="mt-4 flex items-center gap-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: i < 4 + (idx % 3) ? INK : CREAM_200,
                    opacity: i < 4 + (idx % 3) ? 0.85 : 1,
                  }}
                />
              ))}
              <span className="text-xs" style={{ color: '#8a8176' }}>
                preview
              </span>
            </div>
          </div>

          <button
            className="relative inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm"
            style={{ background: MAROON, color: CREAM }}
          >
            Open <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</section>
