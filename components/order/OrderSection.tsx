'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { useCartStore, CartItem } from '@/store/cartStore'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi'

export default function OrderSection() {
  const { t, language } = useLanguage()
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCartStore()
  const total = getTotal()
  const deliveryFee = 500
  const tax = Math.round(total * 0.1)
  const finalTotal = total + deliveryFee + tax

  if (items.length === 0) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <FiShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('cartEmpty')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('addItems')}
          </p>
          <Link
            href="/menu"
            className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
          >
            {t('viewMenu')}
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('cart')}
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-24"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('orderSummary')}
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>{t('subtotal')}</span>
                  <span>{total.toLocaleString()} AMD</span>
                </div>
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>{t('deliveryFee')}</span>
                  <span>{deliveryFee.toLocaleString()} AMD</span>
                </div>
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>{t('tax')}</span>
                  <span>{tax.toLocaleString()} AMD</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                  <span>{t('total')}</span>
                  <span>{finalTotal.toLocaleString()} AMD</span>
                </div>
              </div>
              <div className="space-y-3">
                <Link
                  href="/payment"
                  className="block w-full text-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                >
                  {t('proceedToPayment')}
                </Link>
                <Link
                  href="/menu"
                  className="block w-full text-center px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-colors"
                >
                  {t('continueShopping')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CartItemCard({ item }: { item: CartItem }) {
  const { t, language } = useLanguage()
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col sm:flex-row gap-4"
    >
      <div className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={item.image}
          alt={item.name[language]}
          fill
          className="object-cover"
          unoptimized={item.image.startsWith('/images/')}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {item.name[language]}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {item.description[language]}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <FiMinus className="w-4 h-4" />
            </button>
            <span className="text-lg font-semibold w-8 text-center text-gray-900 dark:text-white">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <FiPlus className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
              {(item.price * item.quantity).toLocaleString()} AMD
            </span>
            <button
              onClick={() => removeItem(item.id)}
              className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
            >
              <FiTrash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

