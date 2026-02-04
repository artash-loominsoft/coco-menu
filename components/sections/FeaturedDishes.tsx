'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { menuItems } from '@/lib/menu'
import { useCartStore } from '@/store/cartStore'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft, FiPlus } from 'react-icons/fi'

export default function FeaturedDishes() {
  const { t, language } = useLanguage()
  const addItem = useCartStore((state) => state.addItem)
  const featured = menuItems.slice(0, 6)

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('featuredDishes')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('discoverDishes')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.isNew && (
                  <span className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {t('new')}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.name[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {item.description[language]}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {item.price.toLocaleString()} AMD
                  </span>
                  <button
                    onClick={() => addItem(item)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium flex items-center space-x-1 rtl:space-x-reverse"
                  >
                    <FiPlus className="w-4 h-4" />
                    <span>{t('addToCart')}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors font-medium"
          >
            {language === 'fa' && <FiArrowLeft className="ml-2 w-5 h-5" />}
            View Full Menu
            {language === 'en' && <FiArrowLeft className="ml-2 w-5 h-5 rotate-180" />}
          </Link>
        </div>
      </div>
    </section>
  )
}

