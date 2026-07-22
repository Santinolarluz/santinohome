'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { useLanguage, type TranslationKey } from '@/lib/i18n'

const projects: {
  titleKey: TranslationKey
  image: string
  descriptionKey: TranslationKey
  stack: string[]
  demo: string
}[] = [
  {
    titleKey: 'projects.ecommerce.title',
    image: '/bookedkit.jpg',
    descriptionKey: 'projects.ecommerce.description',
    stack: ['React', 'PHP', 'MySQL'],
    demo: 'https://www.bookedkit.com/',
  },
  {
    titleKey: 'projects.dashboard.title',
    image: '/romeo.jpg',
    descriptionKey: 'projects.dashboard.description',
    stack: ['HTML5', 'PHP'],
    demo: 'https://romeososa.com/',
  },
  {
    titleKey: 'projects.blog.title',
    image: '/enfasis.jpg',
    descriptionKey: 'projects.blog.description',
    stack: ['Laravel', 'MySQL', 'PHP', 'CSS'],
    demo: 'https://www.enfasissalud.com.ar/',
  },
  {
    titleKey: 'projects.landing.title',
    image: '/colonian-boat.jpg',
    descriptionKey: 'projects.landing.description',
    stack: [ 'HTML5', 'Wordpress'],
    demo: 'https://coloniaboatcharter.com/',
  },
  {
    titleKey: 'projects.project5.title',
    image: '/placeholder.svg',
    descriptionKey: 'projects.project5.description',
    stack: ['[completar]'],
    demo: '#',
  },
  {
    titleKey: 'projects.project6.title',
    image: '/placeholder.svg',
    descriptionKey: 'projects.project6.description',
    stack: ['[completar]'],
    demo: '#',
  },
]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        description={t('projects.description')}
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.titleKey}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`${t('projects.previewAlt')} ${t(project.titleKey)}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-70" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{t(project.titleKey)}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                {t(project.descriptionKey)}
              </p>
              <div className="mt-5 flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t('projects.viewDemo')}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
