'use client'

import { Reveal } from '@/components/reveal'
import { useLanguage, type TranslationKey } from '@/lib/i18n'

const stats: { value: string; labelKey: TranslationKey }[] = [
  { value: '22', labelKey: 'about.stat.years' },
  { value: '8+', labelKey: 'about.stat.technologies' },
  { value: '100%', labelKey: 'about.stat.commitment' },
]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          {t('about.eyebrow')}
        </span>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {t('about.title')}
        </h2>
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
          {t('about.p1')}
        </p>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {t('about.p2')}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.labelKey}
              className="rounded-xl border border-border bg-card p-4 text-center"
            >
              <div className="text-2xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
