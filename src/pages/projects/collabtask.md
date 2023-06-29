---
layout: ../../layouts/ProjectLayout.astro
title: 'CollabTask'
date: 'Septiembre 2022 - Mayo 2023'
description: ''
assets: 
  - url: '/src/assets/collabtask/ct-intro-1.webp'
    type: 'image' 
    alt: 'Interfaz de introducción 1'
  - url: '/src/assets/collabtask/ct-intro-2.webp'
    type: 'image' 
    alt: 'Interfaz de introducción 2'
  - url: '/src/assets/collabtask/ct-intro-3.webp'
    type: 'image' 
    alt: 'Interfaz de introducción 3'
  - url: '/src/assets/collabtask/ct-intro-4.webp'
    type: 'image' 
    alt: 'Interfaz de introducción 4'
  - url: '/src/assets/collabtask/ct-home.webp'
    type: 'image' 
    alt: 'Interfaz de inicio'
  - url: '/src/assets/collabtask/ct-lists.webp'
    type: 'image' 
    alt: 'Interfaz de listas de equipos y tareas'
  - url: '/src/assets/collabtask/ct-tasklist.webp'
    type: 'image' 
    alt: 'Interfaz de lista de tareas'
  - url: '/src/assets/collabtask/ct-task-detail.webp'
    type: 'image' 
    alt: 'Interfaz del detalle de una tarea'
  - url: '/src/assets/collabtask/ct-task.webp'
    type: 'image' 
    alt: 'Interfaz de editar tarea'
  - url: '/src/assets/collabtask/ct-manual.webp'
    type: 'image' 
    alt: 'Interfaz de reparto de tareas manual'
  - url: '/src/assets/collabtask/ct-preferences.webp'
    type: 'image' 
    alt: 'Interfaz de reparto de tareas automático por preferencias'
  - url: '/src/assets/collabtask/ct-trade-form.webp'
    type: 'image' 
    alt: 'Interfaz para realizar un intercambio de tareas'
  - url: '/src/assets/collabtask/ct-trades-received.webp'
    type: 'image' 
    alt: 'Interfaz para ver los intercambios recibidos'
  - url: '/src/assets/collabtask/ct-user-members.webp'
    type: 'image' 
    alt: 'Interfaz de miembros de un equipo'
  - url: '/src/assets/collabtask/ct-rating.webp'
    type: 'image' 
    alt: 'Interfaz para valorar a los compañeros'
  - url: '/src/assets/collabtask/ct-profile-1.webp'
    type: 'image' 
    alt: 'Interfaz del perfil de los usuarios'
  - url: '/src/assets/collabtask/ct-profile-2.webp'
    type: 'image' 
    alt: 'Interfaz del perfil de los usuarios'
stack:       
  - name: 'Ionic'
    classColor: 'bg-[#3880FF]'
  - name: 'Angular'
    classColor: 'bg-[#DD0031]'
  - name: 'Firestore'
    classColor: 'bg-[#F29E12]'
  - name: 'Firebase Cloud Functions'
    classColor: 'bg-[#F29E12]'
headerClass: 'bg-[#0D9488] text-white'
navClass: 'text-white [&_svg]:fill-white'
github: 'https://github.com/jordigd20/collabtask'
site: ''
---

# CollabTask

Collabtask es una aplicación móvil desarrollada para el TFG (Trabajo Final de Grado) realizado el último año en el grado en Ingeniería Multimedia. Este proyecto fue realizado solo por mí y obtuvo una nota final de 10. 

## Objetivo

El principal objetivo de esta aplicación es permitir a los usuarios crear grupos entre otros usuarios para poder gestionar y obtener un reparto de tareas equilibrado y justo, enfocado en un contexto colaborativo y amigable, en el cuál se fomenta la participación y se cuenta con un sistema que recompensa a las personas que cumplen con sus tareas.


## Funcionalidades a destacar

Collabtask cuenta con varias funcionalidades a destacar, como són:

- **Interacción entre varios usuarios a tiempo real**: El movimiento de las tareas entre usuarios se produce a tiempo real sin tener que recargar las interfaces. Esto se ha conseguido utilizando observables para la comunicación entre la app y la base de datos de Cloud Firestore, haciendo de esta forma que todos los participantes de un mismo equipo puedan interactuar a la vez mientras se hace el reparto.

- **Sistema de notificaciones diarias**: Cada día se ejecuta una función que manda a una notificación a todos los usuarios que tengan tareas pendientes para que no se les olvide realizarlas.

- **Algoritmo de reparto**: Se ha implementado un algoritmo que reparte las tareas entre todos los participantes de un equipo teniendo en cuenta sus preferencias y los puntos que han ido consiguiendo con el tiempo. Este algoritmo reparte las tareas de una forma equitativa y justa.

- **Sello de calidad**: El sello de calidad es un porcentaje que se calcula teniendo en cuenta la eficacia que el usuario ha obtenido completando sus tareas y las valoraciones que ha recibido de sus compañeros. Este porcentaje es público y demuestra tanto el trabajo empleado como la opinión de tus compañeros hacia ti.

