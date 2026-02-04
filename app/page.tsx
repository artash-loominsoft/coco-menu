import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Introduction from '@/components/sections/Introduction'
import FeaturedDishes from '@/components/sections/FeaturedDishes'
import YandexDelivery from '@/components/sections/YandexDelivery'
import WhyChooseUs from '@/components/sections/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <FeaturedDishes />
        <YandexDelivery />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}

