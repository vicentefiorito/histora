import { Card, CardContent, CardFooter } from './ui/card'

type FeatureCardProps = {
  title: string
  description: string
  cta: string
  imageUrl?: string
}

export default function FeatureCard({
  title,
  description,
  cta,
  imageUrl,
}: FeatureCardProps) {
  return (
    <Card className="aspect-square max-h-100 w-full bg-white p-4 border-2 rounded-md border-gold-50 hover:-translate-y-1 hover:border-gold-100 transition-all hover:duration-500">
      <CardContent>
        {imageUrl && (
          <div className="w-full h-40 overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h3 className="text-2xl font-bold mb-4 mt-4">{title}</h3>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-end items-end mt-auto mb-6">
        <button className="bg-gold-100 hover:bg-gold-100 text-gold-800 font-bold py-2 px-4 rounded-md">
          {cta}
        </button>
      </CardFooter>
    </Card>
  )
}
