import FiguresSelect from '@/components/FiguresSelect'
import { SelectOption } from '@/lib/types'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/figures')({
  component: RouteComponent,
})

// placeholder options for the filter component
const erasOptions: SelectOption[] = [
  { value: 'ancient', label: 'Ancient (500 - 0 BCE)' },
  { value: 'medieval', label: 'Medieval (1000 - 2000 BCE)' },
  { value: 'renaissance', label: 'Renaissance' },
  { value: 'modern', label: 'Modern' },
]

function RouteComponent() {
  // handles the era state
  const [selectedEra, setSelectedEra] = useState<string>('')

  return (
    <div className="min-h-screen bg-cream-100 pt-6">
      <div className="px-6 py-6 mx-4 my-auto bg-gold-50 rounded-lg">
        <h1 className="text-6xl mb-8 text-maroon-text font-light">
          Historical Figures
        </h1>
        <p className="text-2xl text-maroon-100">
          Explore the Emperors, Kings, and Leaders who shaped civilization
          across time and continents
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex  p-6 bg-white m-4 border-gold-50 border-2 rounded-lg w-400">
          <div className="">
            <FiguresSelect
              value={selectedEra}
              onChange={setSelectedEra}
              label="Time Period"
              options={erasOptions}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
