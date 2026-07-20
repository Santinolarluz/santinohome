'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Language = 'es' | 'en'

const translations = {
  es: {
    // Navbar
    'nav.about': 'Sobre mí',
    'nav.skills': 'Skills',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contáctame',
    'nav.openMenu': 'Abrir menú',

    // Hero
    'hero.available': 'Disponible para nuevos proyectos',
    'hero.role1': 'Full Stack Developer',
    'hero.role2': 'React & Laravel',
    'hero.role3': 'PHP · WordPress · MySQL',
    'hero.description':
      'Construyo experiencias web modernas, rápidas y escalables. Del frontend al backend, transformo ideas en productos digitales cuidando cada detalle del diseño y del código.',
    'hero.viewProjects': 'Ver Proyectos',
    'hero.downloadCV': 'Descargar CV',

    // About
    'about.eyebrow': 'Sobre mí',
    'about.title': 'Desarrollador web',
    'about.p1':
      'Tengo 22 años y desde muy joven encontré en la programación la forma perfecta de combinar lógica y creatividad. Me especializo en el desarrollo Full Stack, trabajando tanto en interfaces cuidadas con React como en backends sólidos con Laravel y PHP.',
    'about.p2':
      'Disfruto resolver problemas reales, aprender constantemente y entregar productos que se sientan tan bien como se ven. Cada proyecto es una oportunidad para superar el anterior.',
    'about.stat.years': 'Años',
    'about.stat.technologies': 'Tecnologías',
    'about.stat.commitment': 'Compromiso',
    'about.imageAlt': 'Retrato de Santino Larluz, desarrollador Full Stack',

    // Skills
    'skills.eyebrow': 'Tecnologías',
    'skills.title': 'Mi stack de trabajo',
    'skills.description':
      'Las herramientas con las que doy vida a los proyectos, desde la interfaz hasta la base de datos.',

    // Services
    'services.eyebrow': 'Servicios',
    'services.title': 'En qué puedo ayudarte',
    'services.description':
      'Soluciones de principio a fin, pensadas para hacer crecer tu proyecto.',
    'services.web.title': 'Desarrollo Web',
    'services.web.description':
      'Sitios web modernos, rápidos y responsive construidos con HTML, CSS y JavaScript, optimizados para cualquier dispositivo.',
    'services.apps.title': 'Apps con React & Laravel',
    'services.apps.description':
      'Aplicaciones completas con interfaces dinámicas en React y backends robustos y seguros en Laravel.',
    'services.wordpress.title': 'Sitios en WordPress',
    'services.wordpress.description':
      'Desarrollo y personalización de sitios en WordPress, desde temas a medida hasta plugins específicos.',
    'services.database.title': 'Bases de Datos MySQL',
    'services.database.description':
      'Diseño, optimización y mantenimiento de bases de datos MySQL para garantizar rendimiento e integridad.',

    // Projects
    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Proyectos destacados',
    'projects.description':
      'Una selección de trabajos que reflejan mi forma de combinar diseño y código.',
    'projects.viewDemo': 'Ver demo',
    'projects.previewAlt': 'Vista previa del proyecto',
    'projects.ecommerce.title': 'BookedKit',
    'projects.ecommerce.description':
      'Plataforma de reservas online para tours y actividades.',
    'projects.dashboard.title': 'Romeo Sosa',
    'projects.dashboard.description':
      'Portfolio moderno para mostrar trabajos y servicios creativos.',
    'projects.blog.title': 'Enfasis Salud',
    'projects.blog.description':
      'Sitio web de salud con información médica y turnos.',
    'projects.landing.title': 'Colonia Boat Charter',
    'projects.landing.description':
      'Sitio web para alquiler y reservas de embarcaciones de lujo.',

    // Contact
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Hablemos de tu proyecto',
    'contact.description':
      '¿Tienes una idea en mente? Escríbeme y construyamos algo increíble juntos.',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.send': 'Enviar mensaje',
    'contact.sent': '¡Mensaje enviado!',
    'contact.findMe': 'Encuéntrame en',
    'contact.findMeDescription':
      'Suelo responder en menos de 24 horas. También puedes escribirme por cualquiera de estos canales.',

    // Footer
    'footer.contact': 'Contacto',
  },
  en: {
    // Navbar
    'nav.about': 'About me',
    'nav.skills': 'Skills',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact me',
    'nav.openMenu': 'Open menu',

    // Hero
    'hero.available': 'Available for new projects',
    'hero.role1': 'Full Stack Developer',
    'hero.role2': 'React & Laravel',
    'hero.role3': 'PHP · WordPress · MySQL',
    'hero.description':
      'I build modern, fast, and scalable web experiences. From frontend to backend, I turn ideas into digital products with care for every detail of design and code.',
    'hero.viewProjects': 'View Projects',
    'hero.downloadCV': 'Download CV',

    // About
    'about.eyebrow': 'About me',
    'about.title': 'Web developer',
    'about.p1':
      "I'm 22 years old and from a very young age I found in programming the perfect way to combine logic and creativity. I specialize in Full Stack development, working on polished interfaces with React as well as solid backends with Laravel and PHP.",
    'about.p2':
      'I enjoy solving real problems, constantly learning, and delivering products that feel as good as they look. Every project is an opportunity to outdo the last one.',
    'about.stat.years': 'Years old',
    'about.stat.technologies': 'Technologies',
    'about.stat.commitment': 'Commitment',
    'about.imageAlt': 'Portrait of Santino Larluz, Full Stack developer',

    // Skills
    'skills.eyebrow': 'Technologies',
    'skills.title': 'My work stack',
    'skills.description':
      'The tools I use to bring projects to life, from the interface to the database.',

    // Services
    'services.eyebrow': 'Services',
    'services.title': 'How I can help you',
    'services.description':
      'End-to-end solutions designed to grow your project.',
    'services.web.title': 'Web Development',
    'services.web.description':
      'Modern, fast, and responsive websites built with HTML, CSS, and JavaScript, optimized for any device.',
    'services.apps.title': 'Apps with React & Laravel',
    'services.apps.description':
      'Complete applications with dynamic React interfaces and robust, secure Laravel backends.',
    'services.wordpress.title': 'WordPress Sites',
    'services.wordpress.description':
      'Development and customization of WordPress sites, from custom themes to specific plugins.',
    'services.database.title': 'MySQL Databases',
    'services.database.description':
      'Design, optimization, and maintenance of MySQL databases to ensure performance and integrity.',

    // Projects
    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Featured projects',
    'projects.description':
      'A selection of work that reflects how I combine design and code.',
    'projects.viewDemo': 'View demo',
    'projects.previewAlt': 'Preview of the project',
    'projects.ecommerce.title': 'BookedKit',
    'projects.ecommerce.description':
      'Online booking platform for tours and activities.',
    'projects.dashboard.title': 'Romeo Sosa',
    'projects.dashboard.description':
      'Modern shop showcasing creative work and services.',
    'projects.blog.title': 'Enfasis Salud',
    'projects.blog.description':
      'Healthcare website for medical services and appointments.',
    'projects.landing.title': 'Colonia Boat Charter',
    'projects.landing.description':
      'Luxury boat charter and reservation website.',

    // Contact
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's talk about your project",
    'contact.description':
      "Have an idea in mind? Write to me and let's build something amazing together.",
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'you@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell me about your project...',
    'contact.send': 'Send message',
    'contact.sent': 'Message sent!',
    'contact.findMe': 'Find me on',
    'contact.findMeDescription':
      'I usually reply within 24 hours. You can also reach me through any of these channels.',

    // Footer
    'footer.contact': 'Contact',
  },
} as const

export type TranslationKey = keyof (typeof translations)['es']

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')

  useEffect(() => {
    const stored = window.localStorage.getItem('language')
    if (stored === 'es' || stored === 'en') {
      setLanguageState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    window.localStorage.setItem('language', lang)
  }, [])

  const t = useCallback(
    (key: TranslationKey) => translations[language][key],
    [language],
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
