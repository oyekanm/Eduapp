import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">EduApp</h3>
          <p className="text-gray-600">
            Bringing quality education closer to home.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">For Teachers</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/auth/register/teacher">Become a Teacher</Link>
            </li>
            <li>
              <Link href="/help/teachers">Teacher Guide</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">For Parents</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/search">Find Teachers</Link>
            </li>
            <li>
              <Link href="/help/parents">Parent Guide</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}
