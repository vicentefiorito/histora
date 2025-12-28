import { formatYear } from '@/lib/utils'
import { Figure } from './FigureCard'
import { TraitBadge } from './TraitBadge'

type Profile = Figure & {
  thumbUrl: string
  synopsis: string
}

export function ProfileHeader({ figure }: { figure: Profile }) {
  return (
    <div className="bg-linear-to-b from-cream-100 to-cream-50 border-b-[3px] border-gold-100">
      <div className="p-6 max-w-400 mx-auto my-auto">
        <div className="flex gap-8 items-start p-2">
          {/* portrait */}
          <div className="w-50 h-70 border-4 border-gold-100 bg-white p-2 shrink-0">
            <img
              src={figure.thumbUrl}
              alt={figure.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-maroon mb-2">
              {figure.name}
            </h1>
            <p className="text-2xl italic text-gold-100 mb-4">{figure.title}</p>
            <p className="text-lg text-maroon-text mb-4">
              {formatYear(figure.birthYear)} – {formatYear(figure.deathYear)}
            </p>
            <p className="text-base text-maroon-100 leading-relaxed">
              {figure.synopsis}
            </p>

            {/* Traits */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {figure.traits.map((trait) => (
                <TraitBadge name={trait} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
