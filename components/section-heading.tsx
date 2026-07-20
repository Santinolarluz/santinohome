import { Reveal } from '@/components/reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
