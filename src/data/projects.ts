import NutriusImage from '../assets/nutrius.webp';
import CollabtaskImage from '../assets/collabtask.webp';
import WeatherAppImage from '../assets/weather-app.webp';
import BookstoreImage from '../assets/bookstore.webp';
import SpotifyCloneImage from '../assets/spotify-clone.webp';
import TaskManagerImage from '../assets/task-manager.webp';
import type { ImageMetadata } from 'astro';

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: Stack[];
  image: ImageMetadata;
  imageClass: string;
  href: string;
  type: 'Full Stack' | 'Frontend' | 'Backend';
}

export interface Stack {
  name: string;
  url: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NutriUs - Desarrollo del proyecto de una startup',
    description:
      'Aplicación web sobre nutrición infantil que ofrece menús y dietas para niños de acuerdo con los objetivos/intolerancias que los tutores/padres establezcan.',
    stack: [
      {
        name: 'Angular',
        url: '/assets/technologies/angular.svg',
        color: '#dd3100'
      },
      {
        name: 'Node.js',
        url: '/assets/technologies/nodejs.svg',
        color: '#76ae63'
      },
      {
        name: 'MongoDB',
        url: '/assets/technologies/mongodb.svg',
        color: '#09934e'
      },
      {
        name: 'Dialogflow',
        url: '/assets/technologies/dialogflow.svg',
        color: '#f29e12'
      },
      {
        name: 'WebGL',
        url: '/assets/technologies/webgl.svg',
        color: '#9a0000'
      }
    ],
    type: 'Full Stack',
    image: NutriusImage,
    imageClass: '',
    href: '/projects/nutrius'
  },
  {
    id: 2,
    title: 'CollabTask - App de gestión de tareas colaborativas',
    description:
      'CollabTask es una app móvil para la gestión y el reparto de tareas entre un grupo de personas de una manera equitativa y justa entre todos los participantes.',
    stack: [
      {
        name: 'Ionic',
        url: '/assets/technologies/ionic.svg',
        color: '#3880FF'
      },
      {
        name: 'Angular',
        url: '/assets/technologies/angular.svg',
        color: '#dd3100'
      },
      {
        name: 'Firestore',
        url: '/assets/technologies/firebase.svg',
        color: '#f29e12'
      }
    ],
    image: CollabtaskImage,
    type: 'Full Stack',
    imageClass: 'object-[50%_15%]',
    href: '/projects/collabtask'
  },
  {
    id: 3,
    title: 'Weather App - App de predicción meteorológica',
    description:
      'WeatherApp es una aplicación web que muestra información sobre el pronóstico del tiempo en la ubicación actual del usuario o sobre cualquier otra ciudad.',
    stack: [
      {
        name: 'Angular',
        url: '/assets/technologies/angular.svg',
        color: '#dd3100'
      },
      {
        name: 'TailwindCSS',
        url: '/assets/technologies/tailwindcss.svg',
        color: '#06B6D4'
      }
    ],
    image: WeatherAppImage,
    type: 'Frontend',
    imageClass: '',
    href: '/projects/weather-app'
  },
  {
    id: 4,
    title: 'Bookstore - Tienda online de libros',
    description:
      'Bookstore es un e-commerce desarrollado desde cero que permite realizar todas las funcionalidades básicas de una tienda online.',
    stack: [
      {
        name: 'Angular',
        url: '/assets/technologies/angular.svg',
        color: '#dd3100'
      },
      {
        name: 'TailwindCSS',
        url: '/assets/technologies/tailwindcss.svg',
        color: '#06B6D4'
      },
      {
        name: 'NestJS',
        url: '/assets/technologies/nestjs.svg',
        color: '#e0234e'
      },
      {
        name: 'Prisma',
        url: '/assets/technologies/prisma.svg',
        color: '#ffffff'
      },
      {
        name: 'Jest',
        url: '/assets/technologies/jest.svg',
        color: '#c21325'
      },
      {
        name: 'PostgreSQL',
        url: '/assets/technologies/postgresql.svg',
        color: '#4169e1'
      },
      {
        name: 'Stripe',
        url: '/assets/technologies/stripe.svg',
        color: '#6860ff'
      },
      {
        name: 'Swagger',
        url: '/assets/technologies/swagger.svg',
        color: '#85ea2d'
      },
      {
        name: 'Railway',
        url: '/assets/technologies/railway.svg',
        color: '#ffffff'
      }
    ],
    type: 'Full Stack',
    image: BookstoreImage,
    imageClass: '',
    href: '/projects/bookstore'
  },
  {
    id: 5,
    title: 'Spotify Clone',
    description:
      'Spotify Clone es una aplicación web que simula la interfaz de usuario de Spotify. Cuenta con un buscador y un reproductor de canciones.',
    stack: [
      {
        name: 'Angular',
        url: '/assets/technologies/angular.svg',
        color: '#dd3100'
      },
      {
        name: 'TailwindCSS',
        url: '/assets/technologies/tailwindcss.svg',
        color: '#06B6D4'
      }
    ],
    type: 'Frontend',
    image: SpotifyCloneImage,
    imageClass: '',
    href: '/projects/spotify-clone'
  },
  {
    id: 6,
    title: 'Task Manager',
    description: 'Task Manager es una aplicación web que permite a los usuarios gestionar las tareas de sus proyectos.',
    stack: [
      {
        name: 'Angular',
        url: '/assets/technologies/angular.svg',
        color: '#dd3100'
      },
      {
        name: 'TailwindCSS',
        url: '/assets/technologies/tailwindcss.svg',
        color: '#06b6d4'
      },
      {
        name: 'NgRx',
        url: '/assets/technologies/ngrx.svg',
        color: '#ba2bd2'
      },
      {
        name: 'Jest',
        url: '/assets/technologies/jest.svg',
        color: '#c21325'
      },
      {
        name: 'Cypress',
        url: '/assets/technologies/cypress.svg',
        color: '#69d3a7'
      }
    ],
    type: 'Frontend',
    image: TaskManagerImage,
    imageClass: '',
    href: '/projects/task-manager'
  }
];