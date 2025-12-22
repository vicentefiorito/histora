import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'

export type Figure = {
  id: string
  name: string
  title: string
  birthYear: number
  deathYear: number
  region: string
  association: string // this is the association of any historical figure, can be an empire or a kingdom or a state or any other movement
  influenceStart: number // this is the start of the period of importance
  influenceEnd: number // this is the end of the period of importance
}

type FigureCardProps = Figure & { thumbUrl: string; synopsis: string }

export function FigureCard({
  id,
  name,
  title,
  birthYear,
  deathYear,
  region,
  association,
  influenceStart,
  influenceEnd,
  thumbUrl,
  synopsis,
}: FigureCardProps) {
  return (
    <div className="mb-6">
      <Card className="rounded-none py-0">
        <CardHeader className="border-b-4 border-[#8b6914] bg-linear-120 from-[#ebe5dc] to-[#d4c5a9] mt-0">
          <CardTitle className="font-bold text-4xl mt-8 mb-2">{name}</CardTitle>

          <div className="flex flex-wrap justify-between items-end gap-2 pb-4">
            <h3 className="text-[#8b6914] font-semibold italic text-xl">
              {title}
            </h3>
            <span className="text-xl text-[#8b6914] font-medium">
              {birthYear < 0 ? `${Math.abs(birthYear)} BCE` : `${birthYear} AD`}{' '}
              –{' '}
              {deathYear < 0 ? `${Math.abs(deathYear)} BCE` : `${deathYear} AD`}
            </span>
          </div>
        </CardHeader>

        <CardContent className="grid gap-4 p-6 md:grid-cols-[220px_1fr]">
          {/* Thumbnail */}
          <div className="w-full max-w-55 aspect-square border-4 border-[#8b6914] overflow-hidden bg-[#faf8f5]">
            <img
              src={thumbUrl}
              alt={id}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-3">
            {/* Hook snippet */}
            <div className="bg-[#faf8f5] p-4 border-l-4 border-l-gold-100 rounded-lg">
              <p className="text-maroon-100 text-xl leading-relaxed line-clamp-4">
                {synopsis}
              </p>
            </div>

            {/* Context strip (universal) */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="px-4 py-3 rounded-md bg-[#faf8f5] border border-[#eee3d0]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b6914]">
                  Associated with
                </p>
                <p className="mt-1 text-sm font-semibold text-[#2b1d0b] line-clamp-1">
                  {association}
                </p>
              </div>

              <div className="px-4 py-3 rounded-md bg-[#faf8f5] border border-[#eee3d0]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b6914]">
                  Region
                </p>
                <p className="mt-1 text-sm font-semibold text-[#2b1d0b] line-clamp-1">
                  {region}
                </p>
              </div>
            </div>

            {/* Period of Importance (cleaner timeline row) */}
            <div className="rounded-md border border-[#e7dcc8] bg-white px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b6914]">
                    Period of Importance
                  </p>
                  <p className="mt-1 text-base font-bold text-[#2b1d0b]">
                    {influenceStart < 0
                      ? `${Math.abs(influenceStart)} BCE`
                      : `${influenceStart} AD`}{' '}
                    –{' '}
                    {influenceEnd < 0
                      ? `${Math.abs(influenceEnd)} BCE`
                      : `${influenceEnd} AD`}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#8b6914]">
                    Influence
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-extrabold text-[#2b1d0b] leading-none">
                      {Math.abs(influenceEnd - (influenceStart - 1))}
                    </p>
                    <p className="text-sm font-semibold text-[#6b4f12]">
                      years
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="bg-[#faf8f5] border-t-2 border-gold-50 flex justify-end w-full">
          <button
            className="bg-gold-100 text-white text-sm uppercase px-4 py-2 m-2 rounded-sm font-bold cursor-pointer tracking-wider hover:bg-[#8b6914] hover:-translate-y-0.5 transition"
            onClick={() => console.log(`View profile of ${name}`)}
          >
            View Profile →
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}
