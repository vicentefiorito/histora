// This select component is designed to be reusable
// its supposed to take some options and able to filter the data based on those options

import { SelectOption } from '@/lib/types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

type FigureSelectProps = {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  label: string
  placeholder?: string
}

export default function FigureSelect({
  options,
  value,
  onChange,
  label,
  placeholder,
}: FigureSelectProps) {
  return (
    <div>
      <h3 className="text-left text-xl text-slate-600 font-semibold">
        {label}
      </h3>
      <Select value={value} onValueChange={(val) => onChange(val)}>
        <SelectTrigger className="border-gold-100! border-2 bg-white max-w-80 w-full ring-0! text-md font-medium text-black">
          <SelectValue
            placeholder={placeholder || 'Select an option'}
            className="text-black"
          />
        </SelectTrigger>
        <SelectContent className="border-gold-100" position="popper">
          {options.map((opt) => (
            <SelectItem
              key={opt.value}
              value={opt.value}
              className="data-[state=checked]:bg-slate-200 data-[state=checked]:font-semibold"
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
