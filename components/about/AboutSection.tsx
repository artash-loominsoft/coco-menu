'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { FiStar, FiHeart, FiMapPin, FiAward } from 'react-icons/fi'

export default function AboutSection() {
  const { t, language } = useLanguage()

  const story = {
    en: {
      title: 'Our Story',
      paragraph1: 'COCO Restaurant was born from a passion for authentic Iranian cuisine and a desire to share the rich culinary traditions of Persia with the people of Yerevan, Armenia.',
      paragraph2: 'Founded by a family with deep roots in Iranian cooking, we bring generations of recipes and techniques to create dishes that honor our heritage while embracing our Armenian home.',
      paragraph3: 'Every dish at COCO tells a story - from the aromatic spices of our kebabs to the delicate flavors of our rice dishes. We source the finest ingredients and prepare each meal with care, ensuring that every bite transports you to the heart of Persian culinary tradition.',
      paragraph4: 'Located in the vibrant heart of Yerevan, COCO has become a beloved destination for both locals and visitors seeking authentic Iranian flavors. We are proud to be part of Armenia\'s diverse culinary landscape.',
    },
    fa: {
      title: 'داستان ما',
      paragraph1: 'رستوران کوکو از علاقه به غذای اصیل ایرانی و تمایل به اشتراک‌گذاری سنت‌های غنی آشپزی ایران با مردم ایروان، ارمنستان متولد شد.',
      paragraph2: 'تأسیس شده توسط خانواده‌ای با ریشه‌های عمیق در آشپزی ایرانی، ما دستور العمل‌ها و تکنیک‌های نسل‌ها را می‌آوریم تا غذاهایی ایجاد کنیم که میراث ما را گرامی می‌دارند و در عین حال خانه ارمنی ما را در آغوش می‌گیرند.',
      paragraph3: 'هر غذا در کوکو داستانی می‌گوید - از ادویه‌های معطر کباب‌های ما تا طعم‌های ظریف غذاهای برنجی ما. ما بهترین مواد اولیه را تهیه می‌کنیم و هر وعده را با دقت آماده می‌کنیم، اطمینان حاصل می‌کنیم که هر لقمه شما را به قلب سنت آشپزی ایرانی می‌برد.',
      paragraph4: 'واقع در قلب پر جنب و جوش ایروان، کوکو به مقصدی محبوب برای هر دو محلی و بازدیدکنندگان در جستجوی طعم‌های اصیل ایرانی تبدیل شده است. ما مفتخریم که بخشی از منظر آشپزی متنوع ارمنستان باشیم.',
    },
    hy: {
      title: 'Մեր պատմությունը',
      paragraph1: 'COCO ռեստորանը ծնվել է իրանական ավանդական խոհանոցի նկատմամբ կիրքից և Պարսկաստանի հարուստ խոհանոցային ավանդույթները Երևան, Հայաստանի ժողովրդի հետ կիսելու ցանկությունից:',
      paragraph2: 'Հիմնադրված իրանական խոհանոցում խորը արմատներ ունեցող ընտանիքի կողմից, մենք բերում ենք սերնդից սերունդ փոխանցված բաղադրատոմսեր և տեխնիկաներ՝ ստեղծելու համար ուտեստներ, որոնք պատվում են մեր ժառանգությունը և միաժամանակ գրկում են մեր հայկական տունը:',
      paragraph3: 'COCO-ի յուրաքանչյուր ուտեստ պատմություն է պատմում - մեր քաբաբների բուրավետ համեմունքներից մինչև մեր բրնձով ուտեստների նուրբ համերը: Մենք օգտագործում ենք լավագույն բաղադրիչները և յուրաքանչյուր կերակուրը պատրաստում ենք խնամքով, ապահովելով, որ յուրաքանչյուր կծում ձեզ տեղափոխի պարսկական խոհանոցային ավանդույթի սրտում:',
      paragraph4: 'Տեղակայված Երևանի կենդանի սրտում, COCO-ն դարձել է սիրելի վայր և՛ տեղացիների, և՛ այցելուների համար, ովքեր փնտրում են իրանական ավանդական համեր: Մենք հպարտ ենք, որ Հայաստանի բազմազան խոհանոցային բնապատկերի մի մասն ենք:',
    },
  }

  const values = {
    en: [
      {
        Icon: FiStar,
        title: 'Authentic Recipes',
        description: 'Traditional recipes passed down through generations',
      },
      {
        Icon: FiHeart,
        title: 'Passion for Food',
        description: 'Every dish is prepared with love and care',
      },
      {
        Icon: FiMapPin,
        title: 'Cultural Bridge',
        description: 'Connecting Iranian and Armenian cultures through food',
      },
      {
        Icon: FiAward,
        title: 'Excellence',
        description: 'Committed to quality and customer satisfaction',
      },
    ],
    fa: [
      {
        Icon: FiStar,
        title: 'دستور العمل‌های اصیل',
        description: 'دستور العمل‌های سنتی که از نسلی به نسل دیگر منتقل شده است',
      },
      {
        Icon: FiHeart,
        title: 'علاقه به غذا',
        description: 'هر غذا با عشق و مراقبت آماده می‌شود',
      },
      {
        Icon: FiMapPin,
        title: 'پل فرهنگی',
        description: 'اتصال فرهنگ‌های ایرانی و ارمنی از طریق غذا',
      },
      {
        Icon: FiAward,
        title: 'برتری',
        description: 'متعهد به کیفیت و رضایت مشتری',
      },
    ],
    hy: [
      {
        Icon: FiStar,
        title: 'Ավանդական բաղադրատոմսեր',
        description: 'Ավանդական բաղադրատոմսեր, որոնք փոխանցվել են սերնդից սերունդ',
      },
      {
        Icon: FiHeart,
        title: 'Սեր ուտելիքի նկատմամբ',
        description: 'Յուրաքանչյուր ուտեստ պատրաստվում է սիրով և խնամքով',
      },
      {
        Icon: FiMapPin,
        title: 'Մշակութային կամուրջ',
        description: 'Իրանական և հայկական մշակույթների միացում սննդի միջոցով',
      },
      {
        Icon: FiAward,
        title: 'Գերազանցություն',
        description: 'Պարտավորված ենք որակին և հաճախորդների բավարարվածությանը',
      },
    ],
  }

  const currentValues = values[language] || values.en

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {story[language].title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            <p>{story[language].paragraph1}</p>
            <p>{story[language].paragraph2}</p>
            <p>{story[language].paragraph3}</p>
            <p>{story[language].paragraph4}</p>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&h=600&fit=crop"
              alt="Restaurant interior"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {language === 'en' ? 'Our Values' : 'ارزش‌های ما'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentValues.map((value, index) => {
              const IconComponent = value.Icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

