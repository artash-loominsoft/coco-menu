'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { FiClock, FiMapPin, FiExternalLink } from 'react-icons/fi'

export default function YandexDelivery() {
  const { t, language } = useLanguage()

  const deliveryInfo = {
    en: {
      title: 'Order via Yandex Delivery',
      description: 'Fast and reliable delivery service throughout Yerevan',
      estimatedTime: 'Estimated delivery time: 30-45 minutes',
      deliveryZone: 'Delivery Zone: Central Yerevan',
      orderNow: 'Order via Yandex',
      note: 'Click to open Yandex Delivery app or website',
    },
    fa: {
      title: 'سفارش از طریق یاندکس',
      description: 'سرویس سریع و قابل اعتماد تحویل در سراسر ایروان',
      estimatedTime: 'زمان تقریبی تحویل: 30-45 دقیقه',
      deliveryZone: 'منطقه تحویل: مرکز ایروان',
      orderNow: 'سفارش از طریق یاندکس',
      note: 'برای باز کردن برنامه یا وب‌سایت یاندکس کلیک کنید',
    },
    hy: {
      title: 'Պատվիրել Yandex-ով',
      description: 'Արագ և հուսալի առաքման ծառայություն ամբողջ Երևանում',
      estimatedTime: 'Մոտավոր առաքման ժամանակ: 30-45 րոպե',
      deliveryZone: 'Առաքման գոտի: Երևանի կենտրոն',
      orderNow: 'Պատվիրել Yandex-ով',
      note: 'Կտտացրեք Yandex առաքման հավելվածը կամ կայքը բացելու համար',
    },
  }

  const info = deliveryInfo[language]

  const handleYandexOrder = () => {
    // In production, this would open Yandex Delivery integration
    // For now, it's a placeholder that can be connected to Yandex API
    const yandexDeliveryUrl = 'https://eda.yandex.ru/yerevan/restaurants/coco'
    
    // Open Yandex Delivery in new tab
    window.open(yandexDeliveryUrl, '_blank', 'noopener,noreferrer')
    
    // Alternative: If you have Yandex Delivery API integration
    // You can implement actual API call here:
    // 
    // Example API structure:
    // const orderData = {
    //   restaurantId: 'coco-restaurant-id',
    //   items: cartItems,
    //   address: userAddress,
    //   phone: userPhone,
    // }
    // await yandexDeliveryAPI.createOrder(orderData)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 via-primary-50 to-secondary-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Left Side - Info */}
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Я</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {t('yandexDelivery')}
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  {info.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <FiClock className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {t('estimatedTime')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.estimatedTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 rtl:space-x-reverse">
                    <FiMapPin className="w-6 h-6 text-secondary-600 dark:text-secondary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {t('deliveryZone')}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.deliveryZone}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleYandexOrder}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <span>{info.orderNow}</span>
                  <FiExternalLink className="w-5 h-5" />
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  {info.note}
                </p>
              </div>

              {/* Right Side - Visual */}
              <div className="md:w-1/2 bg-gradient-to-br from-red-100 via-yellow-100 to-red-50 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 p-8 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg mx-auto mb-6">
                    <span className="text-6xl">🚴</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-24 h-2 bg-white dark:bg-gray-700 rounded-full mx-auto"></div>
                    <div className="w-32 h-2 bg-white dark:bg-gray-700 rounded-full mx-auto"></div>
                    <div className="w-20 h-2 bg-white dark:bg-gray-700 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* API Integration Note */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Developer Note:</strong> This component is ready for Yandex Delivery API integration. 
              Connect your Yandex Delivery credentials in the API route to enable real-time order processing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

