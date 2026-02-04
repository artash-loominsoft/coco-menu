'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { menuItems, categories, MenuItem } from '@/lib/menu'
import { useCartStore } from '@/store/cartStore'
import { motion } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

export default function MenuSection() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const addItem = useCartStore((state) => state.addItem)

  const filteredItems = selectedCategory
    ? menuItems.filter((item) => item.category === selectedCategory)
    : menuItems

  const categoryList = Object.keys(categories) as Array<keyof typeof categories>

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('menuTitle')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('exploreCuisine')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-primary-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {categoryList.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {categories[category][language]}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <MenuItemCard key={item.id} item={item} index={index} onAddToCart={addItem} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MenuItemCard({
  item,
  index,
  onAddToCart,
}: {
  item: MenuItem
  index: number
  onAddToCart: (item: MenuItem) => void
}) {
  const { t, language } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name[language]}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
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
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm min-h-[3rem]">
          {item.description[language]}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            {item.price.toLocaleString()} AMD
          </span>
          <button
            onClick={() => onAddToCart(item)}
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium flex items-center space-x-1 rtl:space-x-reverse"
          >
            <FiPlus className="w-4 h-4" />
            <span>{t('addToCart')}</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

