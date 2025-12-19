{
  /* Search */
}
;<div
  className="mt-7 rounded-2xl border p-3 shadow-sm"
  style={{
    borderColor: CREAM_200,
    background: 'rgba(255,255,255,0.55)',
  }}
>
  <div className="flex flex-col gap-3 md:flex-row md:items-center">
    <div className="relative flex-1">
      <Search
        className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
        style={{ color: '#8a8176' }}
      />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Try: “1453”, “Silk Road”, “Cleopatra”, “Industrial Revolution”"
        className="w-full rounded-xl border bg-transparent py-3 pl-10 pr-3 text-sm outline-none md:text-base"
        style={{ borderColor: CREAM_200 }}
      />
    </div>
    <button
      className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition md:text-base"
      style={{ background: MAROON, color: CREAM }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLButtonElement).style.background = MAROON_HOVER
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLButtonElement).style.background = MAROON
      }}
    >
      Explore <ArrowRight className="h-5 w-5" />
    </button>
  </div>
  <div className="mt-3 flex flex-wrap gap-2">
    {eras.map((e) => (
      <button
        key={e.id}
        onClick={() => {
          setEra(e.id)
          setYear(clamp(yearClamped, e.from, e.to))
        }}
        className="rounded-full border px-3 py-1 text-xs font-semibold transition"
        style={{
          borderColor: CREAM_200,
          background: era === e.id ? `${INK}12` : 'rgba(251,247,242,0.65)',
          color: era === e.id ? INK : '#5a5147',
        }}
      >
        {e.label}
      </button>
    ))}
  </div>
</div>
