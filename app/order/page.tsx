import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OrderSection from '@/components/order/OrderSection'

export default function OrderPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <OrderSection />
      </main>
      <Footer />
    </>
  )
}

