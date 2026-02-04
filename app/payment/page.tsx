import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PaymentSection from '@/components/payment/PaymentSection'

export default function PaymentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PaymentSection />
      </main>
      <Footer />
    </>
  )
}

