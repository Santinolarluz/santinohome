'use client'

import { useLanguage, type TranslationKey } from '@/lib/i18n'

const links: { href: string; labelKey: TranslationKey }[] = [
  { href: '#sobre-mi', labelKey: 'nav.about' },
  { href: '#skills', labelKey: 'nav.skills' },
  { href: '#servicios', labelKey: 'nav.services' },
  { href: '#proyectos', labelKey: 'nav.projects' },
  { href: '#contacto', labelKey: 'footer.contact' },
]

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row">
        <a href="#inicio" className="flex items-center gap-2 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            SL
          </span>
          <span>Santino Larluz</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Santino Larluz
        </p>
      </div>
    </footer>
  )
}
