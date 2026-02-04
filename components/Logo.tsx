'use client'

import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
          <span className="text-white font-bold text-2xl">C</span>
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-400 rounded-full border-2 border-white"></div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
        COCO
      </span>
    </Link>
  )
}

