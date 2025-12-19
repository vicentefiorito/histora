import { Link } from '@tanstack/react-router'
import { BookUser, Home, Mountain, X } from 'lucide-react'

type NavbarLink = {
  title: string
  href: string
  icon: React.ReactNode
}

type NavbarProps = {
  onClick: () => void
  isOpen: boolean
}

const links: NavbarLink[] = [
  { title: 'Home', href: '/', icon: <Home size={20} /> },
  {
    title: 'Figures',
    href: '/figures',
    icon: <BookUser size={20} />,
  },
  { title: 'Places', href: '/places', icon: <Mountain size={20} /> },
]

export default function Navbar({ onClick, isOpen }: NavbarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-80 bg-maroon text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gold-100">
        <h2 className="text-xl font-bold">Explore History</h2>
        <button
          onClick={onClick}
          className="p-2 hover:bg-gold-100 rounded-lg transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex-1 p-4 overflow-y-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={onClick}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-maroon-hover transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-gold-100 hover:bg-maroon-hover transition-colors mb-2',
            }}
          >
            {link.icon}
            <span className="font-medium">{link.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
