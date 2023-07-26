---
layout: ../../layouts/ProjectLayout.astro
title: 'Weather App'
date: 'Julio 2023'
description: ''
assets: 
  - url: '/assets/weather-app/weather-app-1.webp'
    type: 'image' 
    alt: 'Interfaz de la aplicación 1'
  - url: '/assets/weather-app/weather-app-2.webp'
    type: 'image' 
    alt: 'Interfaz de la aplicación 2'
stack:       
  - name: 'Angular'
    url: '/assets/technologies/angular.svg'
  - name: 'TailwindCSS'
    url: '/assets/technologies/tailwindcss.svg'
headerClass: 'bg-[#0D9488] text-white'
navClass: 'text-white [&_svg]:fill-white'
github: 'https://github.com/jordigd20/weather-app'
site: 'https://weather-app-jordigd.vercel.app/'
---

# Weather App

Solución a la propuesta de <a href="http://devchallenges.io" target="_blank">devChallenges.io</a> para desarrollar un app que utilice un API externa para buscar una ciudad o utilizar la localización actual para mostrar información meteorológica sobre esta.

La aplicación ha sido desarrollada probando las nuevas funcionalidades de la <a href="https://blog.angular.io/angular-v16-is-here-4d7a28ec680d" target="_blank">versión 16</a> de Angular.

## Funcionalidades

La <a href="https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv" target="_blank">propuesta</a> de devChallenges.io establece los siguientes requisitos: 

- Establecer una ciudad por defecto, preferiblemente la localización actual del usuario
- Poder buscar por ciudades
- Poder ver el tiempo del día de hoy y de los siguientes 5 días
- Poder ver la fecha y la localización del pronóstico
- Poder ver una imagen por cada tipo de pronóstico
- Poder ver los grados mínimos y máximos de la temperatura de cada día
- Poder ver el estado y la dirección del viento
- Poder ver el porcentaje de humedad
- Poder ver un indicador de visibilidad
- Poder ver la presión del aire
- Poder solicitar el tiempo en la ubicación actual
- Poder cambiar la temperatura entre Celsius y Fahrenheit