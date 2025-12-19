import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/figures')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-cream-50">
      <h1 className="text-center">Current Figures</h1>
    </div>
  )
}
