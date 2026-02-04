'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'fa' | 'hy'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    menu: 'Menu',
    order: 'Order Online',
    about: 'About Us',
    contact: 'Contact',
    heroTitle: 'Welcome to COCO',
    heroSubtitle: 'Authentic Iranian Cuisine in the Heart of Yerevan',
    orderNow: 'Order Now',
    viewMenu: 'View Menu',
    introTitle: 'About COCO',
    introText: 'COCO brings the rich flavors and traditions of Iranian cuisine to Yerevan, Armenia. Our chefs prepare authentic Persian dishes using traditional recipes passed down through generations.',
    featuredDishes: 'Featured Dishes',
    whyChooseUs: 'Why Choose Us',
    why1: 'Authentic Recipes',
    why2: 'Fresh Ingredients',
    why3: 'Warm Hospitality',
    why4: 'Prime Location',
    menuTitle: 'Our Menu',
    addToCart: 'Add to Cart',
    cart: 'Cart',
    checkout: 'Checkout',
    total: 'Total',
    payment: 'Payment',
    aboutTitle: 'Our Story',
    contactTitle: 'Get in Touch',
    address: 'Address',
    phone: 'Phone',
    instagram: 'Instagram',
    sendMessage: 'Send Message',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Submit',
    allRightsReserved: 'All rights reserved',
    quantity: 'Quantity',
    price: 'Price',
    remove: 'Remove',
    continueShopping: 'Continue Shopping',
    proceedToPayment: 'Proceed to Payment',
    cardNumber: 'Card Number',
    expiryDate: 'Expiry Date',
    cvv: 'CVV',
    cardholderName: 'Cardholder Name',
    payNow: 'Pay Now',
    orderSummary: 'Order Summary',
    subtotal: 'Subtotal',
    deliveryFee: 'Delivery Fee',
    tax: 'Tax',
    new: 'New',
    delivery: 'Delivery',
    yandexDelivery: 'Yandex Delivery',
    orderViaYandex: 'Order via Yandex',
    estimatedTime: 'Estimated Delivery Time',
    deliveryZone: 'Delivery Zone',
    minutes: 'minutes',
    slogan: 'Authentic Iranian Cuisine',
    discoverDishes: 'Discover our most popular dishes',
    exploreCuisine: 'Explore our authentic Iranian cuisine',
    whatMakesSpecial: 'What makes COCO special',
    weLoveToHear: "We'd love to hear from you",
    thankYouMessage: 'Thank you! Your message has been sent successfully.',
    sending: 'Sending...',
    processing: 'Processing...',
    paymentSuccessful: 'Payment Successful!',
    orderPlaced: 'Your order has been placed successfully. You will be redirected shortly.',
    cartEmpty: 'Cart is Empty',
    addItems: 'Add some delicious items to your cart!',
  },
  hy: {
    home: 'Գլխավոր',
    menu: 'Մենյու',
    order: 'Առցանց պատվեր',
    about: 'Մեր մասին',
    contact: 'Կապ',
    heroTitle: 'Բարի գալուստ COCO',
    heroSubtitle: 'Ավանդական իրանական խոհանոց Երևանի սրտում',
    orderNow: 'Պատվիրել հիմա',
    viewMenu: 'Դիտել մենյուն',
    introTitle: 'COCO-ի մասին',
    introText: 'COCO-ն բերում է իրանական խոհանոցի հարուստ համերն ու ավանդույթները Երևան, Հայաստան: Մեր խոհարարները պատրաստում են ավանդական պարսկական ուտեստներ՝ օգտագործելով ավանդական բաղադրատոմսեր, որոնք փոխանցվել են սերնդից սերունդ:',
    featuredDishes: 'Առաջարկվող ուտեստներ',
    whyChooseUs: 'Ինչու ընտրել մեզ',
    why1: 'Ավանդական բաղադրատոմսեր',
    why2: 'Թարմ բաղադրիչներ',
    why3: 'Ջերմ հյուրընկալություն',
    why4: 'Լավագույն գտնվելու վայր',
    menuTitle: 'Մեր մենյուն',
    addToCart: 'Ավելացնել զամբյուղ',
    cart: 'Զամբյուղ',
    checkout: 'Վճարում',
    total: 'Ընդամենը',
    payment: 'Վճարում',
    aboutTitle: 'Մեր պատմությունը',
    contactTitle: 'Կապվեք մեզ հետ',
    address: 'Հասցե',
    phone: 'Հեռախոս',
    instagram: 'Instagram',
    sendMessage: 'Ուղարկել հաղորդագրություն',
    name: 'Անուն',
    email: 'Էլ. փոստ',
    message: 'Հաղորդագրություն',
    submit: 'Ուղարկել',
    allRightsReserved: 'Բոլոր իրավունքները պաշտպանված են',
    quantity: 'Քանակ',
    price: 'Գին',
    remove: 'Հեռացնել',
    continueShopping: 'Շարունակել գնումները',
    proceedToPayment: 'Անցնել վճարման',
    cardNumber: 'Քարտի համար',
    expiryDate: 'Վավերականության ժամկետ',
    cvv: 'CVV',
    cardholderName: 'Քարտատիրոջ անուն',
    payNow: 'Վճարել հիմա',
    orderSummary: 'Պատվերի ամփոփում',
    subtotal: 'Ենթագումար',
    deliveryFee: 'Առաքման վճար',
    tax: 'Հարկ',
    new: 'Նոր',
    delivery: 'Առաքում',
    yandexDelivery: 'Yandex առաքում',
    orderViaYandex: 'Պատվիրել Yandex-ով',
    estimatedTime: 'Մոտավոր առաքման ժամանակ',
    deliveryZone: 'Առաքման գոտի',
    minutes: 'րոպե',
    slogan: 'Ավանդական իրանական խոհանոց',
    discoverDishes: 'Բացահայտեք մեր ամենահայտնի ուտեստները',
    exploreCuisine: 'Բացահայտեք մեր ավանդական իրանական խոհանոցը',
    whatMakesSpecial: 'Ինչն է COCO-ն հատուկ դարձնում',
    weLoveToHear: 'Մենք ուրախ կլինենք ձեզանից լսել',
    thankYouMessage: 'Շնորհակալություն! Ձեր հաղորդագրությունը հաջողությամբ ուղարկվել է:',
    sending: 'Ուղարկվում է...',
    processing: 'Մշակվում է...',
    paymentSuccessful: 'Վճարումը հաջողված է!',
    orderPlaced: 'Ձեր պատվերը հաջողությամբ տեղադրվել է: Դուք շուտով կուղղորդվեք:',
    cartEmpty: 'Զամբյուղը դատարկ է',
    addItems: 'Ավելացրեք համեղ ուտեստներ ձեր զամբյուղին!',
  },
  fa: {
    home: 'خانه',
    menu: 'منو',
    order: 'سفارش آنلاین',
    about: 'درباره ما',
    contact: 'تماس',
    heroTitle: 'به رستوران کوکو خوش آمدید',
    heroSubtitle: 'غذای اصیل ایرانی در قلب ایروان',
    orderNow: 'سفارش دهید',
    viewMenu: 'مشاهده منو',
    introTitle: 'درباره کوکو',
    introText: 'کوکو طعم‌های غنی و سنت‌های آشپزی ایرانی را به ایروان، ارمنستان می‌آورد. آشپزهای ما غذاهای اصیل ایرانی را با استفاده از دستور العمل‌های سنتی که از نسلی به نسل دیگر منتقل شده است، آماده می‌کنند.',
    featuredDishes: 'غذاهای ویژه',
    whyChooseUs: 'چرا ما را انتخاب کنید',
    why1: 'دستور العمل‌های اصیل',
    why2: 'مواد اولیه تازه',
    why3: 'مهمان‌نوازی گرم',
    why4: 'موقعیت مکانی عالی',
    menuTitle: 'منوی ما',
    addToCart: 'افزودن به سبد',
    cart: 'سبد خرید',
    checkout: 'تسویه حساب',
    total: 'مجموع',
    payment: 'پرداخت',
    aboutTitle: 'داستان ما',
    contactTitle: 'با ما در تماس باشید',
    address: 'آدرس',
    phone: 'تلفن',
    instagram: 'اینستاگرام',
    sendMessage: 'ارسال پیام',
    name: 'نام',
    email: 'ایمیل',
    message: 'پیام',
    submit: 'ارسال',
    allRightsReserved: 'تمام حقوق محفوظ است',
    quantity: 'تعداد',
    price: 'قیمت',
    remove: 'حذف',
    continueShopping: 'ادامه خرید',
    proceedToPayment: 'ادامه به پرداخت',
    cardNumber: 'شماره کارت',
    expiryDate: 'تاریخ انقضا',
    cvv: 'CVV',
    cardholderName: 'نام صاحب کارت',
    payNow: 'پرداخت',
    orderSummary: 'خلاصه سفارش',
    subtotal: 'جمع جزء',
    deliveryFee: 'هزینه ارسال',
    tax: 'مالیات',
    new: 'جدید',
    delivery: 'ارسال',
    yandexDelivery: 'ارسال یاندکس',
    orderViaYandex: 'سفارش از طریق یاندکس',
    estimatedTime: 'زمان تقریبی ارسال',
    deliveryZone: 'منطقه ارسال',
    minutes: 'دقیقه',
    slogan: 'غذای اصیل ایرانی',
    discoverDishes: 'کشف محبوب‌ترین غذاهای ما',
    exploreCuisine: 'کشف غذای اصیل ایرانی ما',
    whatMakesSpecial: 'چه چیزی کوکو را خاص می‌کند',
    weLoveToHear: 'ما دوست داریم از شما بشنویم',
    thankYouMessage: 'متشکریم! پیام شما با موفقیت ارسال شد.',
    sending: 'در حال ارسال...',
    processing: 'در حال پردازش...',
    paymentSuccessful: 'پرداخت موفق!',
    orderPlaced: 'سفارش شما با موفقیت ثبت شد. به زودی هدایت خواهید شد.',
    cartEmpty: 'سبد خرید خالی است',
    addItems: 'چند غذای خوشمزه به سبد خود اضافه کنید!',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && (saved === 'en' || saved === 'fa' || saved === 'hy')) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  useEffect(() => {
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

