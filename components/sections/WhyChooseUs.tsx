'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { FiStar, FiZap, FiHeart, FiMapPin } from 'react-icons/fi'

export default function WhyChooseUs() {
  const { t } = useLanguage()

  const features = [
    {
      Icon: FiStar,
      title: t('why1'),
      description: 'Traditional recipes passed down through generations',
    },
    {
      Icon: FiZap,
      title: t('why2'),
      description: 'Daily fresh ingredients sourced locally',
    },
    {
      Icon: FiHeart,
      title: t('why3'),
      description: 'Warm, welcoming atmosphere for every guest',
    },
    {
      Icon: FiMapPin,
      title: t('why4'),
      description: 'Conveniently located in the heart of Yerevan',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('whyChooseUs')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('whatMakesSpecial')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.Icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

