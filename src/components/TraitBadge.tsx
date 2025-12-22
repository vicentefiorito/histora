import { Badge } from './ui/badge'

export function TraitBadge({ name }: { name: string }) {
  return (
    <Badge className="font-bold text-[#8b6914] text-sm uppercase border-[1.5px] border-solid border-gold-100 rounded-[3px] bg-white px-2 py-1 mb-2">
      {name}
    </Badge>
  )
}
