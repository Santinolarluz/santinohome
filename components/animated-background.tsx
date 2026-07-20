export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Aurora blobs that drift slowly */}
      <div
        className="aurora-blob"
        style={{
          top: '-10%',
          left: '-5%',
          width: '45vw',
          height: '45vw',
          background:
            'radial-gradient(circle at center, color-mix(in oklch, var(--primary) 30%, transparent), transparent 70%)',
          opacity: 0.35,
          animation: 'aurora-drift-a 26s ease-in-out infinite',
        }}
      />
      <div
        className="aurora-blob"
        style={{
          top: '20%',
          right: '-10%',
          width: '40vw',
          height: '40vw',
          background:
            'radial-gradient(circle at center, color-mix(in oklch, var(--chart-3) 28%, transparent), transparent 70%)',
          opacity: 0.28,
          animation: 'aurora-drift-b 32s ease-in-out infinite',
        }}
      />
      <div
        className="aurora-blob"
        style={{
          bottom: '-15%',
          left: '25%',
          width: '50vw',
          height: '50vw',
          background:
            'radial-gradient(circle at center, color-mix(in oklch, var(--chart-2) 26%, transparent), transparent 70%)',
          opacity: 0.25,
          animation: 'aurora-drift-c 38s ease-in-out infinite',
        }}
      />

      {/* Sweeping light trail (the "estela") */}
      <div className="aurora-sheen" />

      {/* Subtle grid + vignette to keep it professional and readable */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in oklch, var(--border) 60%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 60%, transparent) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at center, black 40%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 40%, transparent 85%)',
          opacity: 0.35,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, transparent 40%, color-mix(in oklch, var(--background) 70%, transparent) 100%)',
        }}
      />
    </div>
  )
}
