import { FigureCard } from '@/components/FigureCard'
import FiguresSelect from '@/components/FiguresSelect'
import SearchBar from '@/components/ui/SearchBar'
import { LEADERS } from '@/lib/leader'
import { SelectOption } from '@/lib/types'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/figures/')({
  component: RouteComponent,
})

// Helper function to determine era from influenceStart year
function getEra(influenceStart: number): string {
  if (influenceStart < 500) return 'ancient'
  if (influenceStart < 1500) return 'medieval'
  if (influenceStart < 1800) return 'early-modern'
  if (influenceStart < 1945) return 'modern'
  return 'contemporary'
}

const erasOptions: SelectOption[] = [
  { value: 'all', label: 'All' },
  { value: 'ancient', label: 'Ancient (Before 500 CE)' },
  { value: 'medieval', label: 'Middle Ages/ Medieval (500 - 1500)' },
  { value: 'early-modern', label: 'Early Modern (1500 - 1800)' },
  { value: 'modern', label: 'Modern (1800 - 1945)' },
  { value: 'contemporary', label: 'Contemporary (1945 - Present)' },
]

const regionOptions: SelectOption[] = [
  { value: 'mediterranean', label: 'Mediterranean' },
  { value: 'europe', label: 'Europe' },
  { value: 'east-asia', label: 'East Asia' },
  { value: 'south-asia', label: 'South Asia' },
  { value: 'central-asia', label: 'Central Asia' },
  { value: 'middle-east', label: 'Middle East' },
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
]

function RouteComponent() {
  const [selectedEra, setSelectedEra] = useState<string>('')
  const [selectedRegion, setSelectedRegion] = useState<string>('')
  const [search, setSearch] = useState<string>('')

  // Apply all filters together
  const filteredLeaders = LEADERS.filter((leader) => {
    // Search filter - check if name includes search term
    const matchesSearch = leader.name
      .toLowerCase()
      .includes(search.toLowerCase())

    // Era filter - only apply if an era is selected
    const matchesEra =
      !selectedEra || getEra(leader.influenceStart) === selectedEra

    // Region filter - only apply if a region is selected
    const matchesRegion =
      !selectedRegion || leader.regions.includes(selectedRegion)

    // Leader must match ALL active filters
    return matchesSearch && matchesEra && matchesRegion
  }).sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="min-h-screen bg-cream-100">
      <div className="px-6 py-4 bg-gold-50">
        <h1 className="text-4xl font-light text-maroon-text">
          Historical Figures
        </h1>
        <p className="text-[16px] text-maroon-100 mt-1">
          Explore Emperors, Kings, and Leaders who shaped civilization
        </p>
      </div>

      <div className="max-w-400 mx-auto px-4 py-4">
        <div className="flex gap-4 items-end">
          <div className="flex-1">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <FiguresSelect
            value={selectedEra}
            onChange={setSelectedEra}
            label="Era"
            options={erasOptions}
          />
          <FiguresSelect
            value={selectedRegion}
            onChange={setSelectedRegion}
            label="Region"
            options={regionOptions}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 max-w-400 mx-auto gap-8 px-4 pb-8">
        {filteredLeaders.length > 0 ? (
          filteredLeaders.map((leader) => (
            <FigureCard key={leader.id} {...leader} />
          ))
        ) : (
          <div className="col-span-2 text-center py-8">
            <p className="text-maroon-100">No results found</p>
          </div>
        )}
      </div>
    </div>
  )
}
