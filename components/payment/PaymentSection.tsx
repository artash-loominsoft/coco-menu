'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useCartStore } from '@/store/cartStore'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { FiCreditCard, FiLock, FiCheck } from 'react-icons/fi'

export default function PaymentSection() {
  const { t, language } = useLanguage()
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const total = getTotal()
  const deliveryFee = 500
  const tax = Math.round(total * 0.1)
  const finalTotal = total + deliveryFee + tax

  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  })

  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim()
    } else if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substring(0, 5)
    } else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 3)
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setIsSuccess(true)
    clearCart()

    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  if (isSuccess) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white dark:bg-gray-800 rounded-xl p-12 shadow-lg"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheck className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('paymentSuccessful')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('orderPlaced')}
          </p>
        </motion.div>
      </section>
    )
  }

  if (items.length === 0) {
    router.push('/order')
    return null
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
            {t('payment')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Secure payment gateway - Visa & MasterCard accepted
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
                <FiLock className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Secure SSL Encrypted Payment
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {t('cardNumber')}
                  </label>
                  <div className="relative">
                    <FiCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 rtl:left-auto rtl:right-3" />
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent rtl:pl-4 rtl:pr-10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      {t('expiryDate')}
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      {t('cvv')}
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength={3}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {t('cardholderName')}
                  </label>
                  <input
                    type="text"
                    name="cardholderName"
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full px-6 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t('processing')}</span>
                    </>
                  ) : (
                    <>
                      <FiLock className="w-5 h-5" />
                      <span>{t('payNow')}</span>
                    </>
                  )}
                </button>
              </form>

              {/* Payment Gateway Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Accepted Payment Methods:
                </p>
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    Visa
                  </div>
                  <div className="px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded text-red-600 dark:text-red-400 font-semibold text-sm">
                    MasterCard
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  Note: This is a demo payment form. For production, integrate with a secure payment gateway like Stripe, PayPal, or local Armenian payment processors.
                </p>
              </div>
            </motion.div>
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

