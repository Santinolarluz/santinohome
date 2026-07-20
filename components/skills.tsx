'use client'

import { motion } from 'framer-motion'
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiReact,
  SiWordpress,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage } from '@/lib/i18n'

const skills: { name: string; Icon: IconType; color: string }[] = [
  { name: 'HTML5', Icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS3', Icon: SiCss, color: '#1572b6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
  { name: 'React', Icon: SiReact, color: '#61dafb' },
  { name: 'Laravel', Icon: SiLaravel, color: '#ff2d20' },
  { name: 'PHP', Icon: SiPhp, color: '#777bb4' },
  { name: 'WordPress', Icon: SiWordpress, color: '#21759b' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479a1' },
]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow={t('skills.eyebrow')}
        title={t('skills.title')}
        description={t('skills.description')}
      />

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <skill.Icon
              className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
              style={{ color: skill.color }}
            />
            <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
