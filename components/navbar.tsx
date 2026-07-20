'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useLanguage, type TranslationKey } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const links: { href: string; labelKey: TranslationKey }[] = [
  { href: '#sobre-mi', labelKey: 'nav.about' },
  { href: '#skills', labelKey: 'nav.skills' },
  { href: '#servicios', labelKey: 'nav.services' },
  { href: '#proyectos', labelKey: 'nav.projects' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-lg'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="group flex items-center gap-2 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            SL
          </span>
          <span className="text-lg tracking-tight">Santino Larluz</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(link.labelKey)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contacto"
            className={cn(
              buttonVariants(),
              'bg-primary px-4 text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90',
            )}
          >
            {t('nav.contact')}
          </a>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={t('nav.openMenu')}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(link.labelKey)}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants(),
                'mt-2 bg-primary px-4 text-primary-foreground hover:bg-primary/90',
              )}
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
