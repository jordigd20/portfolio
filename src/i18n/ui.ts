export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'es';

const boldEffect = 'bg-clip-text bg-gradient-to-r from-[#089DDD] dark:from-[#38bdf8] to-[#22A58D] dark:to-[#45d9bf] text-transparent';

export const ui = {
  es: {
    'nav.projects': 'Proyectos',
    'nav.about-me': 'Sobre mí',
    'nav.contact': 'Contacto',
    'hero.intro': 'Hola, soy',
    'hero.job-position': 'Desarrollador <span class="font-bold bg-clip-text bg-gradient-to-r from-[#089DDD] dark:from-[#38bdf8] to-[#22A58D] dark:to-[#45d9bf] text-transparent relative before:animate-typing before:content-[\'Full_Stack\'] after:border-r-[2px] after:border-r-[#22a58d] dark:after:border-r-[#45d9bf] after:animate-cursor" />',
    'hero.description': `+2 años de experiencia. <strong class="${boldEffect}">Ingeniero Multimedia</strong> y <strong class="${boldEffect}">Desarrollador Web</strong> de Benidorm, España. Especializado en crear aplicaciones web únicas, interactivas y accesibles.`,
    'experience.title': 'Experiencia en proyectos',
    'experience.more': 'Saber más',
    'projects.title': 'Proyectos',
    'alt.projects.images': 'Pantalla de inicio de ',
    'alt.hero.image': 'Una foto de Jordi Gómez Devesa',
    'aria-label.nav.home': 'Ir a la página de inicio',
    'aria-label.nav.mobile-menu': 'Abrir menú de navegación',
    'aria-label.nav.theme': 'Cambiar entre modo oscuro y claro',
    'aria-label.hero.job-position': 'Desarrollador Full Stack',
  },
  en: {
    'nav.projects': 'Projects',
    'nav.about-me': 'About me',
    'nav.contact': 'Contact',
    'hero.intro': 'Hi, I\'m',
    'hero.job-position': `<span class="font-bold ${boldEffect}"> Full Stack </span> Developer`,
    'hero.description': `+2 years of experience. <strong class="${boldEffect}">Multimedia Engineer</strong> and <strong class="${boldEffect}">Web Developer</strong> from Benidorm, Spain. Specialized in creating unique, interactive and accessible web applications.`,
    'experience.title': 'Experience in projects',
    'experience.more': 'Read more',
    'projects.title': 'Projects',
    'alt.projects.images': 'Home screen of ',
    'alt.hero.image': 'A picture of Jordi Gómez Devesa',
    'aria-label.nav.home': 'Go to home page',
    'aria-label.nav.mobile-menu': 'Open navigation menu',
    'aria-label.nav.theme': 'Toggle theme between dark/light mode',
    'aria-label.hero.job-position': 'Full Stack Developer',
  }
}
