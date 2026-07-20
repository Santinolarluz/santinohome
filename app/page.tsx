import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { AnimatedBackground } from '@/components/animated-background'
import { LanguageProvider } from '@/lib/i18n'

export default function Page() {
  return (
    <LanguageProvider>
      <main className="relative">
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
