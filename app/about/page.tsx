import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutSection from '@/components/about/AboutSection'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}

