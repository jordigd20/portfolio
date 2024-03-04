---
layout: ../../layouts/ProjectLayout.astro
title: 'Weather App'
date: 'Julio 2023'
description: 'WeatherApp es una aplicación web que muestra información sobre el pronóstico del tiempo en la ubicación actual del usuario o sobre cualquier otra ciudad.'
assets: 
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686645/weather-app/acatm5xjwiro98e7sb7d.webp'
    type: 'image' 
    alt: 'Interfaz de la aplicación 1'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686646/weather-app/mawivpear3zb0wk0h7bk.webp'
    type: 'image' 
    alt: 'Interfaz de la aplicación 2'
stack:       
  - name: 'Angular'
    url: '/assets/technologies/angular.svg'
  - name: 'TailwindCSS'
    url: '/assets/technologies/tailwindcss.svg'
headerClass: 'bg-[#0D9488] text-white'
navClass: 'text-white [&_svg]:fill-white'
width: 
  number: 1920
  string: '1536px'
height:
  number: 936
  string: '748px'

github: 'https://github.com/jordigd20/weather-app'
site: 'https://weather-app-jordigd.vercel.app/'
---

# Weather App

Solución a la propuesta de <a href="http://devchallenges.io" target="_blank">devChallenges.io</a> para desarrollar un app que utilice un API externa para buscar una ciudad o utilizar la localización actual para mostrar información meteorológica sobre ésta.

La aplicación ha sido desarrollada probando las nuevas funcionalidades de la <a href="https://blog.angular.io/angular-v16-is-here-4d7a28ec680d" target="_blank">versión 16</a> de Angular.

## Funcionalidades

La <a href="https://legacy.devchallenges.io/challenges/mM1UIenRhK808W8qmLWv" target="_blank">propuesta</a> de devChallenges.io establece los siguientes requisitos: 

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
