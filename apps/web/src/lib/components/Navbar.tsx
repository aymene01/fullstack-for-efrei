import Link from 'next/link'
import { DropDown } from './DropDown'

const Navbar = () => {
  return (
    <nav className="bg-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link className="text-white font-semibold" href="/">
                Notion By Aymene Bousbia
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <DropDown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
