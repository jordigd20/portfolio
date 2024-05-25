export interface Experience {
  role: string;
  work?: string;
  date: string;
  description: string;
  icon: string;
  url?: string;
}

export const experience: Experience[] = [
  {
    role: 'Aprendizaje autodidacta',
    work: '',
    date: '2023 - Actualidad',
    description:
      'Tras terminar los estudios universitarios, decidí seguir formándome por mi cuenta, cursando diferentes cursos online y desarrollando proyectos que me permitan enriquecer tanto mi formación como mi portfolio personal.',
    icon: 'school'
  },
  {
    role: 'Desarrollador Full Stack',
    work: 'CollabTask',
    date: 'Septiembre 2022 - Mayo 2023',
    description:
      'CollabTask es una app para la gestión y el reparto de tareas entre un grupo de personas de una manera equitativa y justa entre todos los participantes, usando la gamificación como herramienta para incentivar la participación y la colaboración entre los usuarios. Este proyecto fue realizado para el TFG en la Universidad de Alicante.',

    icon: 'school',
    url: 'projects/collabtask'
  },
  {
    role: 'Desarrollador Full Stack',
    work: 'NutriUs',
    date: 'Septiembre 2021 - Junio 2022',
    description:
      'NutriUs es un proyecto ABP (Aprendizaje Basado en Proyectos) desarrollado en el último curso de la universidad. El objetivo del proyecto se centraba en lograr el desarrollo completo de una aplicación web en un equipo de 5 personas durante 8 meses. Esta aplicación debía tener almenos una sección de administración y una sección para los usuarios que contara con un motor gráfico propio desarrollado con WebGL.',

    icon: 'school',
    url: 'projects/nutrius'
  }
];