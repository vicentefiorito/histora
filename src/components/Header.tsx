import { Link } from '@tanstack/react-router'

import { Menu } from 'lucide-react'
import { useState } from 'react'
import Navbar from './ui/navbar'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="p-4 flex items-center bg-maroon text-white shadow-lg border-b border-gold-100">
        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gold-100 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="ml-4 text-xl font-semibold">
          <Link to="/">
            {/* <img
              src="/tanstack-word-logo-white.svg"
              alt="TanStack Logo"
              className="h-10"
            /> */}
          </Link>
        </h1>
      </header>

      <Navbar isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  )
}
