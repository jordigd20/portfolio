---
layout: ../../layouts/ProjectLayout.astro
title: 'Task Manager'
date: 'Mayo 2024'
description: 'Task Manager es una aplicación web que permite a los usuarios gestionar las tareas de sus proyectos.'
assets: 
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/q8wye6paubxqoejkzfuw.webp'
    alt: 'Inicio de Task Manager con modo claro'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/yzcdmd3dagqgf3dhs8ph.webp'
    alt: 'Añadir tablero en Task Manager con modo claro'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051727/task-manager-portfolio/ga77dymv7amlzcwr1fsk.webp'
    alt: 'Detalle de un tablero en Task Manager con modo claro'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/sbq8yhkfz7wi2hjub9n7.webp'
    alt: 'Moviendo una tarea de estado en Task Manager con el modo claro'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/bc6oidogfm242wzl21lr.webp'
    alt: 'Editar tarea en Task Manager con modo claro'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051727/task-manager-portfolio/mgfp3aiymyrqp8e6turg.webp'
    alt: 'Inicio de Task Manager con modo oscuro'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/jqzm0rk4rar4xmlc4otz.webp'
    alt: 'Añadir tablero en Task Manager con modo oscuro'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/utohysotes6yaecgj5aj.webp'
    alt: 'Detalle de un tablero en Task Manager con modo oscuro'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051727/task-manager-portfolio/pjjlj1b5dvf7aojfript.webp'
    alt: 'Moviendo una tarea de estado en Task Manager con el modo oscuro'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051727/task-manager-portfolio/lcpifnp4qqclwrrosfzh.webp'
    alt: 'Editar tarea en Task Manager con modo oscuro'
stack:       
  - name: 'Angular'
    url: '/assets/technologies/angular.svg'
  - name: 'TailwindCSS'
    url: '/assets/technologies/tailwindcss.svg'
  - name: 'NgRx'
    url: '/assets/technologies/ngrx.svg'
  - name: 'Jest'
    url: '/assets/technologies/jest.svg'
  - name: 'Cypress'
    url: '/assets/technologies/cypress.svg'
width: 
  number: 1617
  string: '1294px'
height: 
  number: 918
  string: '735px'
github: 'https://github.com/jordigd20/task-manager'
site: 'https://task-manager-jgd.vercel.app/'
---


# Task Manager

Task Manager es una aplicación web para gestionar tareas y tableros. Permite a los usuarios crear, editar y eliminar tareas, así como organizarlas en tableros. Además, los usuarios pueden arrastrar y soltar las tareas entre las diferentes columnas del tablero para cambiar su estado.

# Objetivo

El principal objetivo de este proyecto era desarrollar una aplicación web aplicando TDD (Test Driven Development) y utilizando NgRx para la gestión del estado de la aplicación. Para la realización de las pruebas unitarias se ha utilizado Jest y para las pruebas de integración se ha utilizado Cypress.

## Funcionalidades

- **Inicio**: Muestra los diferentes tableros disponibles para el usuario.
- **Gestión de tableros**: Permite al usuario crear, editar y eliminar tableros.
- **Gestión de tareas**: Permite al usuario crear, editar y eliminar tareas.
- **Detalle de un tablero**: Muestra las tareas de un tablero organizadas en columnas según su estado.
- **Drag & Drop de tareas**: Permite al usuario arrastrar y soltar las tareas entre las diferentes columnas del tablero para cambiar su estado.
- **Drag & Drop de columnas**: Permite al usuario arrastrar y soltar las columnas del tablero para cambiar su orden.
- **Gestionar etiquetas**: Permite al usuario añadir y eliminar etiquetas a las tareas para categorizarlas.
- **Subida de archivos**: Permite al usuario subir imagenes para añadirlas a las tareas.
- **Cambio de tema**: Permite al usuario cambiar entre el modo claro y oscuro.
- **Diseño responsive**: Cuenta con un diseño adaptable para móviles, tablets y ordenadores.
