'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { FaBell, FaUser, FaCog, FaQuestionCircle } from 'react-icons/fa'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          RexAI
        </Link>
        <div className="flex items-center space-x-4">
          <button className="btn btn-secondary" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button className="text-gray-600 dark:text-gray-300 hover:text-primary">
            <FaBell size={20} />
          </button>
          <button className="text-gray-600 dark:text-gray-300 hover:text-primary">
            <FaCog size={20} />
          </button>
          <button className="text-gray-600 dark:text-gray-300 hover:text-primary">
            <FaQuestionCircle size={20} />
          </button>
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              <FaUser size={20} />
              <span>Profile</span>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1">
                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Your Profile
                </Link>
                <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </Link>
                <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Sign out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

