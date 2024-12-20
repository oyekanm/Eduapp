"use client"

import React from 'react'
import { Menu, X } from 'lucide-react';
import Link from 'next/link';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <header className="bg-white shadow-sm">
    <nav className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          EduAppPlatform
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/teachers/find" className="text-gray-600 hover:text-blue-600">
            Find Teachers
          </Link>
          <Link href="/auth/login" className="text-gray-600 hover:text-blue-600">
            Login
          </Link>
          <Link 
            href="/auth/register/centre"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Register Centre
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link 
            href="/search"
            className="block text-gray-600 hover:text-blue-600"
          >
            Find Teachers
          </Link>
          <Link 
            href="/auth/login"
            className="block text-gray-600 hover:text-blue-600"
          >
            Login
          </Link>
          <Link 
            href="/auth/register/centre"
            className="bg-blue-600 text-white mt-4 w-full text-center px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Register Centre
          </Link>
        </div>
      )}
    </nav>
  </header>
  )
}
