'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import Logo from './Logo'
import { FiInstagram, FiPhone, FiMapPin, FiExternalLink } from 'react-icons/fi'

export default function Footer() {
  const { t } = useLanguage()

  const externalLinks = [
    { name: 'Visit Armenia', url: 'https://www.armenia.travel/', icon: FiExternalLink },
    { name: 'Yerevan Tourism', url: 'https://www.yerevan.am/', icon: FiExternalLink },
    { name: 'Iranian Cuisine', url: 'https://en.wikipedia.org/wiki/Iranian_cuisine', icon: FiExternalLink },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              {t('introText')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('contactTitle')}</h3>
            <div className="space-y-3">
              <a
                href="https://www.google.com/maps?q=Baghramyan+77,+Yerevan,+Armenia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 rtl:space-x-reverse hover:text-primary-400 transition-colors"
              >
                <FiMapPin className="w-5 h-5" />
                <span>Baghramyan 77, Yerevan, Armenia</span>
              </a>
              <a
                href="tel:098595438"
                className="flex items-center space-x-2 rtl:space-x-reverse hover:text-primary-400 transition-colors"
              >
                <FiPhone className="w-5 h-5" />
                <span>098595438</span>
              </a>
              <a
                href="https://instagram.com/mr.mrs.coco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 rtl:space-x-reverse hover:text-primary-400 transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
                <span>@mr.mrs.coco</span>
              </a>
            </div>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <div className="space-y-3">
              {externalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 rtl:space-x-reverse hover:text-primary-400 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} COCO Restaurant. {t('allRightsReserved')}.</p>
        </div>
      </div>
    </footer>
  )
}

