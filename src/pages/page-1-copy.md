---
layout: ../layouts/ProjectLayout.astro
title: 'Collabtask'
date: 'Septiembre 2022 - Junio 2023'
description: 'JavaScript es un lenguaje de programación de alto nivel, interpretado y orientado a objetos que se utiliza principalmente en el desarrollo web. Fue creado originalmente para agregar interactividad a las páginas web, pero con el tiempo ha evolucionado y se ha convertido en un lenguaje de programación extremadamente versátil.'
assets: 
  # - url: 'src/assets/test-video-horizontal.mp4'
  #   type: 'video'
  #   alt: 'Video Test'
  # - url: 'src/assets/test-video.mp4'
  #   type: 'video'
  #   alt: 'Video Test'
  # - url: 'src/assets/collabtask.webp'
  #   type: 'image' 
  #   alt: 'Collabtask'
  # - url: 'src/assets/nutrius.webp'
  #   type: 'image'
  #   alt: 'NutriUs'
  - url: 'src/assets/collabtask-home.webp'
    type: 'image' 
    alt: 'Interfaz de inicio'
  - url: 'src/assets/collabtask-lists.webp'
    type: 'image' 
    alt: 'Interfaz de listas de equipos y tareas'
  - url: 'src/assets/collabtask-tasklist.webp'
    type: 'image' 
    alt: 'Interfaz de lista de tareas'
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
github: 'https://github.com/'
site: ''
---

# Collabtask

Collabtask es una aplicación móvil desarrollada para el TFG (Trabajo Final de Grado) realizado el último año en el grado en Ingeniería Multimedia. Este proyecto fue realizado solo por mí y obtuvo una nota final de 10.


## Objetivo

El principal objetivo de esta aplicación es permitir a los usuarios crear grupos entre otros usuarios para poder gestionar y obtener un reparto de tareas equilibrado y justo, enfocado en un contexto colaborativo y amigable, en el cuál se fomenta la participación y se cuenta con un sistema que recompensa a las personas que cumplen con sus tareas.


## Funcionalidades a destacar

Collabtask cuenta con varias funcionalidades a destacar, como són:

- **Interacción entre varios usuarios a tiempo real**: El movimiento de las tareas entre usuarios se produce a tiempo real sin tener que recargar las interfaces. Esto se ha conseguido utilizando observables para la comunicación entre la app y la base de datos de Cloud Firestore, haciendo de esta forma que todos los participantes de un mismo equipo puedan interactuar a la vez mientras se hace el reparto.

- **Sistema de notificaciones diarias**: Cada día se ejecuta una función que manda a una notificación a todos los usuarios que tengan tareas pendientes para que no se les olvide realizarlas.

- **Algoritmo de reparto**: Se ha implementado un algoritmo que reparte las tareas entre todos los participantes de un equipo teniendo en cuenta sus preferencias y los puntos que han ido consiguiendo con el tiempo. Este algoritmo reparte las tareas de una forma equitativa y justa.

- **Sello de calidad**: El sello de calidad es un porcentaje que se calcula teniendo en cuenta la eficacia que el usuario ha obtenido completando sus tareas y las valoraciones que ha recibido de sus compañeros. Este porcentaje es público y demuestra tanto el trabajo empleado como la opinión de tus compañeros hacia ti.





## Características y Uso
JavaScript es un lenguaje de programación flexible y dinámico que se ejecuta en el lado del cliente (navegador) y en el lado del servidor (Node.js). Algunas de las características más destacadas de JavaScript son:

- **Interacción con el DOM**: JavaScript permite manipular y modificar el Document Object Model (DOM) de una página web, lo que permite la interactividad y el cambio de contenido dinámicamente.

- **Programación orientada a objetos**: JavaScript es un lenguaje orientado a objetos basado en prototipos. Permite la creación de objetos y la definición de propiedades y métodos.

- **Funciones de orden superior**: JavaScript soporta funciones de orden superior, lo que significa que las funciones pueden ser asignadas a variables, pasadas como argumentos y devueltas como valores.

- **Asincronía**: JavaScript utiliza el modelo de ejecución asíncrona basado en callbacks y Promesas. Esto permite realizar operaciones no bloqueantes y gestionar eventos de manera eficiente.

JavaScript se utiliza ampliamente en el desarrollo web para crear efectos visuales, realizar validaciones de formularios, implementar lógica de negocios en el cliente, interactuar con servicios web y mucho más. Además, con el advenimiento de Node.js, JavaScript también se ha convertido en una opción popular para el desarrollo del lado del servidor y la creación de aplicaciones de red en general.

## Ejemplo de código
A continuación, se muestra un ejemplo básico de código JavaScript que muestra un mensaje de saludo en un navegador web:


```javascript
// Definición de la función de saludo
function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

// Llamada a la función de saludo
saludar("Juan");
```

En este ejemplo, se define una función llamada "saludar" que toma un parámetro "nombre" y muestra un mensaje de saludo en la consola del navegador. Luego, se llama a