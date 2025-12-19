import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/figures')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='p-3 border-stone-400'>
    <h1 className='text-center'>Current Figures</h1>
  </div>
}
