'use client'

import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiWordpress,
  SiWoocommerce,
  SiElementor,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiCloudflare,
  SiCpanel,
  SiPlesk,
  SiSupabase,
  SiAirtable,
} from 'react-icons/si'
import { Image as ImageIcon, Waypoints, Table } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage, type TranslationKey } from '@/lib/i18n'

type Item = {
  label: string
  Icon: ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
}

const categories: { titleKey: TranslationKey; items: Item[] }[] = [
  {
    titleKey: 'skills.frontend',
    items: [
      { label: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { label: 'CSS3', Icon: SiCss, color: '#663399' },
      { label: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
      { label: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
      { label: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { label: 'React', Icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    titleKey: 'skills.backend',
    items: [
      { label: 'PHP', Icon: SiPhp, color: '#777BB4' },
      { label: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
      { label: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
      { label: 'REST API', Icon: Waypoints, color: '#8B5CF6' },
    ],
  },
  {
    titleKey: 'skills.databases',
    items: [
      { label: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { label: 'Supabase', Icon: SiSupabase, color: '#3FCF8E' },
      { label: 'DataTables', Icon: Table, color: '#8B5CF6' },
      { label: 'Airtable', Icon: SiAirtable, color: '#18BFFF' },
    ],
  },
  {
    titleKey: 'skills.cms',
    items: [
      { label: 'WordPress', Icon: SiWordpress, color: '#21759B' },
      { label: 'WooCommerce', Icon: SiWoocommerce, color: '#96588A' },
      { label: 'Elementor', Icon: SiElementor, color: '#92003B' },
    ],
  },
]

const tools: Item[] = [
  { label: 'Git', Icon: SiGit, color: '#F05032' },
  { label: 'GitHub', Icon: SiGithub, color: '#F5F5F5' },
  { label: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { label: 'Vercel', Icon: SiVercel, color: '#F5F5F5' },
  { label: 'Cloudflare', Icon: SiCloudflare, color: '#F38020' },
  { label: 'cPanel', Icon: SiCpanel, color: '#FF6C2C' },
  { label: 'Plesk', Icon: SiPlesk, color: '#52BBE6' },
  { label: 'Photoshop', Icon: ImageIcon, color: '#31A8FF' },
]

function Chip({ item }: { item: Item }) {
  const { Icon, label, color } = item
  return (
    <span className="inline-flex items-center gap-2.5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2.5 text-base font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-primary/15">
      <Icon className="h-5 w-5 shrink-0" style={{ color }} />
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
            <div className="mt-5 flex flex-wrap gap-3">
              {category.items.map((item) => (
                <Chip key={item.label} item={item} />
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
        <div className="mt-5 flex flex-wrap gap-3">
          {tools.map((tool) => (
            <Chip key={tool.label} item={tool} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
