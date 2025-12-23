import { Search } from 'lucide-react'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function SearchBar({
  value,
  onChange,
  placeholder,
}: SearchBarProps) {
  return (
    <div className="max-w-400 mx-auto px-4">
      <div className="relative">
        <Search className="w-5 h-5 ml-2 text-[#8b6914] pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={
            placeholder ?? 'Search figures (e.g. Caesar, Augustus)...'
          }
          className="
            ml-2
            w-full
            bg-[#faf8f5]
            border border-[#e7dcc8]
            rounded-lg
            pl-10 pr-4 py-3
            text-[#8b6914]
            placeholder:text-[#6b4f12]/60
            focus:outline-none
            focus:ring-2 focus:ring-[#8b6914]/25
            focus:border-[#8b6914]
            shadow-[0_8px_20px_-16px_rgba(43,29,11,0.35)]
          "
        />
      </div>
    </div>
  )
}
