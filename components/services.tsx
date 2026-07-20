'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Layers, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage, type TranslationKey } from '@/lib/i18n'

const services: {
  Icon: LucideIcon
  titleKey: TranslationKey
  descriptionKey: TranslationKey
}[] = [
  {
    Icon: Code2,
    titleKey: 'services.web.title',
    descriptionKey: 'services.web.description',
  },
  {
    Icon: Layers,
    titleKey: 'services.apps.title',
    descriptionKey: 'services.apps.description',
  },
  {
    Icon: Wrench,
    titleKey: 'services.wordpress.title',
    descriptionKey: 'services.wordpress.description',
  },
  {
    Icon: Database,
    titleKey: 'services.database.title',
    descriptionKey: 'services.database.description',
  },
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          description={t('services.description')}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                <service.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">
                {t(service.titleKey)}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {t(service.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
