import FeatureCard from './FeatureCard'

const features = [
  {
    id: 1,
    title: 'Detailed Profiles',
    description:
      'Dive deep into the lives of historical figures. Learn about their achievements, failures, and lasting impact on history.  ',
    cta: 'Explore Profiles',
  },
  {
    id: 2,
    title: 'Places',
    description:
      'Explore the locations where history unfolded. See how geography shaped events and influenced the lives of historical figures.',
    cta: 'Explore Places',
    imageUrl: '/public/assets/landing_places.jpg',
  },
  {
    id: 3,
    title: 'Events & Conflicts',
    description:
      'Check out the major events and conflicts that defined history. Learn about the causes, consequences, and lasting impact of these events.',
    cta: 'Explore Events & Conflicts',
  },
]

export default function FeaturesSection() {
  return (
    <div className="container px-4 ">
      <h2 className="text-4xl text-center text-maroon-text font-bold mb-5">
        Explore History Like Never Before
      </h2>
      <p className="text-center mb-5 text-maroon-100">
        Powerful Tools to understand the figures and places that shaped our
        world.
      </p>
      <div className="grid grid-cols-3 gap-12 mb-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            cta={feature.cta}
            imageUrl={feature.imageUrl ?? ''}
          />
        ))}
      </div>
    </div>
  )
}
