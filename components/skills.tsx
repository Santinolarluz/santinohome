'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage, type TranslationKey } from '@/lib/i18n'

const categories: { titleKey: TranslationKey; items: string[] }[] = [
  {
    titleKey: 'skills.frontend',
    items: ['HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'JavaScript', 'React'],
  },
  {
    titleKey: 'skills.backend',
    items: ['PHP', 'Laravel', 'Node.js', 'REST API'],
  },
  {
    titleKey: 'skills.databases',
    items: ['MySQL'],
  },
  {
    titleKey: 'skills.cms',
    items: ['WordPress', 'WooCommerce', 'Elementor'],
  },
]

const tools: string[] = [
  'Git',
  'GitHub',
  'Figma',
  'Vercel',
  'Cloudflare',
  'cPanel',
  'Plesk',
  'Photoshop',
]

function Chip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:border-primary/60 hover:bg-primary/15">
      {label}
    </span>
  )
}

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow={t('skills.eyebrow')}
        title={t('skills.title')}
        description={t('skills.description')}
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {categories.map((category, i) => (
          <motion.div
            key={category.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {t(category.titleKey)}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <Chip key={item} label={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
      >
        <h3 className="text-lg font-semibold text-foreground">
          {t('skills.tools')}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {tools.map((tool) => (
            <Chip key={tool} label={tool} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
