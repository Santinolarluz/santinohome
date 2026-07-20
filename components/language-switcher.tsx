'use client'

import { useLanguage, type Language } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const options: { value: Language; label: string }[] = [
  { value: 'es', label: 'ES' },
  { value: 'en', label: 'EN' },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="flex items-center rounded-full border border-border bg-card p-0.5"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLanguage(option.value)}
          aria-pressed={language === option.value}
          className={cn(
            'rounded-full px-2.5 py-1 text-xs font-semibold transition-colors',
            language === option.value
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
