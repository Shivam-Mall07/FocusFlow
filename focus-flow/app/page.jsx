import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Philosophy } from '@/components/philosophy'
import { Showcase } from '@/components/showcase'
import { HowItWorks } from '@/components/how-it-works'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Showcase />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
