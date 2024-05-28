---
layout: ../../../layouts/ProjectLayout.astro
title: 'Weather App'
date: 'July 2023'
description: "WeatherApp is a web application that shows information about the weather forecast in the user's current location or in any other city."
assets: 
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686645/weather-app/acatm5xjwiro98e7sb7d.webp'
    type: 'image' 
    alt: 'App interface 1'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686646/weather-app/mawivpear3zb0wk0h7bk.webp'
    type: 'image' 
    alt: 'App interface 2'
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

Solution to the proposal of <a href="http://devchallenges.io" target="_blank">devChallenges.io</a> to develop an app that uses an external API to search for a city or use the user's current location to show weather information about it.

The application has been developed testing the new features of the <a href="https://blog.angular.io/angular-v16-is-here-4d7a28ec680d" target="_blank">version 16</a> of Angular.

## Features

The <a href="https://legacy.devchallenges.io/challenges/mM1UIenRhK808W8qmLWv" target="_blank">proposal</a> of devChallenges.io establishes the following requirements:

- Set a default city, preferably the user's current location
- Be able to search by cities
- Be able to see today's weather and the next 5 days
- Be able to see the date and location of the forecast
- Be able to see an image for each type of forecast
- Be able to see the minimum and maximum temperature of each day
- Be able to see the state and direction of the wind
- Be able to see the percentage of humidity
- Be able to see a visibility indicator
- Be able to see the air pressure
- Be able to request the weather in the current location
- Be able to change the temperature between Celsius and Fahrenheit
