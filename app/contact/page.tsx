import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from '@/components/contact/ContactSection'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

