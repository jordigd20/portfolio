import NutriusImage from '../assets/nutrius.webp';
import CollabtaskImage from '../assets/collabtask.webp';
import WeatherAppImage from '../assets/weather-app.webp';
import BookstoreImage from '../assets/bookstore.webp';
import SpotifyCloneImage from '../assets/spotify-clone.webp';
import TaskManagerImage from '../assets/task-manager.webp';
import type { ImageMetadata } from 'astro';

export interface Project {
  id: number;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  stack: Stack[];
  image: ImageMetadata;
  imageClass: string;
  url: string;
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
    title: {
      es: 'NutriUs - Desarrollo del proyecto de una startup',
      en: 'NutriUs - Development of a startup project'
    },
    description: {
      es: 'Aplicación web sobre nutrición infantil que ofrece menús y dietas para niños de acuerdo con los objetivos/intolerancias que los tutores/padres establezcan.',
      en: 'Web application on child nutrition that offers menus and diets for children according to the objectives/intolerances that the tutors/parents establish.'
    },
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
    url: 'projects/nutrius'
  },
  {
    id: 2,
    title: {
      es: 'CollabTask - App de gestión de tareas colaborativas',
      en: 'CollabTask - Collaborative task management app'
    },
    description: {
      es: 'CollabTask es una app móvil para la gestión y el reparto de tareas entre un grupo de personas de una manera equitativa y justa entre todos los participantes.',
      en: 'CollabTask is a mobile app for managing and distributing tasks among a group of people in an equitable and fair way among all participants.'
    },
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
    url: 'projects/collabtask'
  },
  {
    id: 3,
    title: {
      es: 'Weather App - App de predicción meteorológica',
      en: 'Weather App - Weather forecast app'
    },
    description: {
      es: 'WeatherApp es una aplicación web que muestra información sobre el pronóstico del tiempo en la ubicación actual del usuario o sobre cualquier otra ciudad.',
      en: 'WeatherApp is a web application that shows information about the weather forecast in the user\'s current location or in any other city.'
    },
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
    url: 'projects/weather-app'
  },
  {
    id: 4,
    title: {
      es: 'Bookstore - Tienda online de libros',
      en: 'Bookstore'
    },
    description: {
      es: 'Bookstore es un e-commerce desarrollado desde cero que permite realizar todas las funcionalidades básicas de una tienda online.',
      en: 'Bookstore is an e-commerce developed from scratch that allows you to perform all the basic functionalities of an online store.'
    },
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
    url: 'projects/bookstore'
  },
  {
    id: 5,

    title: {
      es: 'Spotify Clone',
      en: 'Spotify Clone'
    },
    description: {
      es: 'Spotify Clone es una aplicación web que simula la interfaz de usuario de Spotify. Cuenta con un buscador y un reproductor de canciones.',
      en: 'Spotify Clone is a web application that simulates the Spotify user interface. It has a search engine and a music player.'
    },
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
    url: 'projects/spotify-clone'
  },
  {
    id: 6,
    title: {
      es: 'Task Manager',
      en: 'Task Manager'
    },
    description: {
      es: 'Task Manager es una aplicación web que permite a los usuarios gestionar las tareas de sus proyectos.',
      en: 'Task Manager is a web application that allows users to manage the tasks of their projects.'
    },
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
    url: 'projects/task-manager'
  }
];