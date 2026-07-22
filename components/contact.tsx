'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { SiGithub, SiWhatsapp } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import type { ComponentType } from 'react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/lib/i18n'

const socials: {
  Icon: ComponentType<{ className?: string }>
  label: string
  href: string
}[] = [
  { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/santino-larluz-795319249/' },
  { Icon: SiGithub, label: 'GitHub', href: 'https://github.com/Santinolarluz' },
  { Icon: Mail, label: 'Email', href: 'mailto:santinoflash@gmail.com' },
  { Icon: SiWhatsapp, label: 'WhatsApp', href: 'https://wa.me/542235342460' },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const { t } = useLanguage()

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', 'a1c47129-c562-4686-897a-428fcf82eb70')

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      e.currentTarget.reset()
    } catch (error) {
      console.error(error)
    }

    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contacto" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            {t('contact.eyebrow')}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {t('contact.description')}
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-3 h-full">
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex flex-1 flex-col gap-5">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    {t('contact.name')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder={t('contact.namePlaceholder')}
                    className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {t('contact.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t('contact.emailPlaceholder')}
                    className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder={t('contact.messagePlaceholder')}
                    className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="mt-auto bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
                >
                  <Send className="mr-1 h-4 w-4" />
                  {sent ? t('contact.sent') : t('contact.send')}
                </Button>
              </div>
            </form>
          </Reveal>

          <Reveal className="md:col-span-2 h-full" delay={0.15}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold">{t('contact.findMe')}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t('contact.findMeDescription')}
              </p>
              <div className="mt-6 grid gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary/40"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                      <social.Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
