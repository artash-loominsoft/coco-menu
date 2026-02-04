import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuSection from '@/components/menu/MenuSection'

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <MenuSection />
      </main>
      <Footer />
    </>
  )
}

