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
      role: 'Desarrollador Frontend',
      work: 'InfoJobs',
      date: 'Octubre 2024 - Noviembre 2024',
      description:
        'Tras un proceso de selección de más de 7000 personas, fui uno de los seleccionados para realizar un proyecto freelance para InfoJobs en conjunto con el creador de contenido Midudev. El proyecto consistió en la creación de una landing page con un estilo más juvenil y moderno para atraer a un público más joven.',
      icon: 'work',
      url: 'https://www.linkedin.com/posts/infojobs-net_tenemos-a-nuestros-seleccionados-felicitamos-activity-7252319960713052161-yFHS?utm_source=share&utm_medium=member_desktop'
    },
    en: {
      role: 'Frontend Developer',
      work: 'InfoJobs',
      date: 'October 2024 - November 2024',
      description:
        'After a selection process of more than 7000 people, I was one of the selected to carry out a freelance project for InfoJobs with the content creator Midudev. The project consisted of creating a landing page with a more youthful and modern style to attract a younger audience.',
      icon: 'work',
      url: 'https://www.linkedin.com/posts/infojobs-net_tenemos-a-nuestros-seleccionados-felicitamos-activity-7252319960713052161-yFHS?utm_source=share&utm_medium=member_desktop'
    },
  },
  {
    es: {
      role: 'Desarrollador Full Stack',
      work: 'UA - CollabTask',
      date: 'Septiembre 2022 - Mayo 2023',
      description:
        'CollabTask es una app para la gestión y el reparto de tareas entre un grupo de personas de una manera equitativa y justa entre todos los participantes. Este proyecto fue realizado para el TFG en la Universidad de Alicante.',

      icon: 'school',
      url: '/projects/collabtask'
    },
    en: {
      role: 'Full Stack Developer',
      work: 'UA - CollabTask',
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
      work: 'UA - NutriUs',
      date: 'Septiembre 2021 - Junio 2022',
      description:
        'NutriUs es un proyecto sobre nutrición infantil que se hizo en el último año de la universidad. El objetivo del proyecto era conseguir el desarrollo completo de una aplicación web en un equipo de 5 personas durante los 8 meses del 4º curso.',

      icon: 'school',
      url: '/projects/nutrius'
    },
    en: {
      role: 'Full Stack Developer',
      work: 'UA - NutriUs',
      date: 'September 2021 - June 2022',
      description:
        'NutriUs is a PBL (Project Based Learning) project developed in the last year of university. The objective of the project was to achieve the complete development of a web application in a team of 5 people for 8 months. This application should have at least an administration section and a section for users that has its own graphic engine developed with WebGL.',
      icon: 'school',
      url: '/en/projects/nutrius'
    }
  }
];