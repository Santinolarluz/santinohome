'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { TypingText } from '@/components/typing-text'
import { useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Hero() {
  const { t, language } = useLanguage()

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Animated violet glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 top-1/2 h-[360px] w-[360px] rounded-full bg-accent/40 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_75%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            {t('hero.available')}
          </span>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Santino Larluz
          </h1>

          <div className="mt-4 flex min-h-[2.5rem] items-center text-2xl font-semibold text-primary sm:text-3xl">
            <TypingText
              key={language}
              phrases={[t('hero.role1'), t('hero.role2'), t('hero.role3')]}
            />
          </div>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t('hero.description')}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#proyectos"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'group bg-primary px-5 text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90',
              )}
            >
              {t('hero.viewProjects')}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/cv.pdf"
              download
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'border-primary/40 bg-transparent px-5 hover:bg-primary/10',
              )}
            >
              <Download className="mr-1 h-4 w-4" />
              {t('hero.downloadCV')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
