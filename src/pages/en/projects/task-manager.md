---
layout: ../../../layouts/ProjectLayout.astro
title: 'Task Manager'
date: 'May 2024'
description: 'Task Manager is a web application that allows users to manage the tasks of their projects.'
assets: 
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/q8wye6paubxqoejkzfuw.webp'
    alt: 'Task Manager home with light mode'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/yzcdmd3dagqgf3dhs8ph.webp'
    alt: 'Add board in Task Manager with light mode'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051727/task-manager-portfolio/ga77dymv7amlzcwr1fsk.webp'
    alt: 'Detail of a board in Task Manager with light mode'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/sbq8yhkfz7wi2hjub9n7.webp'
    alt: 'Moving a task from state in Task Manager with light mode'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/bc6oidogfm242wzl21lr.webp'
    alt: 'Edit task in Task Manager with light mode'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051727/task-manager-portfolio/mgfp3aiymyrqp8e6turg.webp'
    alt: 'Task Manager home with dark mode'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/jqzm0rk4rar4xmlc4otz.webp'
    alt: 'Add board in Task Manager with dark mode'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051726/task-manager-portfolio/utohysotes6yaecgj5aj.webp'
    alt: 'Detail of a board in Task Manager with dark mode'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051727/task-manager-portfolio/pjjlj1b5dvf7aojfript.webp'
    alt: 'Moving a task from state in Task Manager with dark mode'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1716051727/task-manager-portfolio/lcpifnp4qqclwrrosfzh.webp'
    alt: 'Edit task in Task Manager with dark mode'
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

Task Manager is a web application for managing tasks and boards. It allows users to create, edit, and delete tasks, as well as organize them into boards. In addition, users can drag and drop tasks between the different columns of the board to change their status.

# Objective

The main objective of this project was to develop a web application applying TDD (Test Driven Development) and using NgRx for managing the application state. Jest has been used for unit testing and Cypress for integration testing.

## Features

- **Home**: Shows the different boards available to the user.
- **Board management**: Allows the user to create, edit, and delete boards.
- **Task management**: Allows the user to create, edit, and delete tasks.
- **Board detail**: Shows the tasks of a board organized into columns according to their status.
- **Drag & Drop tasks**: Allows the user to drag and drop tasks between the different columns of the board to change their status.
- **Drag & Drop columns**: Allows the user to drag and drop the columns of the board to change their order.
- **Manage tags**: Allows the user to add and remove tags to tasks to categorize them.
- **File upload**: Allows the user to upload images to add them to tasks.
- **Theme change**: Allows the user to switch between light and dark mode.
- **Responsive design**: It has a responsive design for mobiles, tablets, and computers.
