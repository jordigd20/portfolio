export interface Experience {
  role: string;
  work?: string;
  date: string;
  description: string;
  icon: string;
  url?: string;
}

export const experience: { es: Experience, en: Experience }[] = [
  {
    es: {
      role: 'Aprendizaje autodidacta',
      work: '',
      date: '2023 - Actualidad',
      description:
        'Tras terminar los estudios universitarios, decidí seguir formándome por mi cuenta, cursando diferentes cursos online y desarrollando proyectos que me permitan enriquecer tanto mi formación como mi portfolio personal.',
      icon: 'school'
    },
    en: {
      role: 'Self-taught learning',
      work: '',
      date: '2023 - Present',
      description:
        'After finishing my university studies, I decided to continue training on my own, taking different online courses and developing projects that allow me to enrich both my training and my personal portfolio.',
      icon: 'school'
    }
  },
  {
    es: {
      role: 'Desarrollador Full Stack',
      work: 'CollabTask',
      date: 'Septiembre 2022 - Mayo 2023',
      description:
        'CollabTask es una app para la gestión y el reparto de tareas entre un grupo de personas de una manera equitativa y justa entre todos los participantes, usando la gamificación como herramienta para incentivar la participación y la colaboración entre los usuarios. Este proyecto fue realizado para el TFG en la Universidad de Alicante.',

      icon: 'school',
      url: '/projects/collabtask'
    },
    en: {
      role: 'Full Stack Developer',
      work: 'CollabTask',
      date: 'September 2022 - May 2023',
      description:
        'CollabTask is an app for managing and distributing tasks among a group of people in an equitable and fair way among all participants, using gamification as a tool to encourage participation and collaboration among users. This project was carried out for the Final Degree Project at the University of Alicante.',
      icon: 'school',
      url: '/en/projects/collabtask'
    }
  },
  {
    es: {
      role: 'Desarrollador Full Stack',
      work: 'NutriUs',
      date: 'Septiembre 2021 - Junio 2022',
      description:
        'NutriUs es un proyecto ABP (Aprendizaje Basado en Proyectos) desarrollado en el último curso de la universidad. El objetivo del proyecto se centraba en lograr el desarrollo completo de una aplicación web en un equipo de 5 personas durante 8 meses. Esta aplicación debía tener almenos una sección de administración y una sección para los usuarios que contara con un motor gráfico propio desarrollado con WebGL.',

      icon: 'school',
      url: '/projects/nutrius'
    },
    en: {
      role: 'Full Stack Developer',
      work: 'NutriUs',
      date: 'September 2021 - June 2022',
      description:
        'NutriUs is a PBL (Project Based Learning) project developed in the last year of university. The objective of the project was to achieve the complete development of a web application in a team of 5 people for 8 months. This application should have at least an administration section and a section for users that has its own graphic engine developed with WebGL.',
      icon: 'school',
      url: '/en/projects/nutrius'
    }
  }
];