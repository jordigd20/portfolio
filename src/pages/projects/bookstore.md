---
layout: ../../layouts/ProjectLayout.astro
title: 'Bookstore'
date: 'Diciembre 2023'
description: 'Bookstore es una tienda online de libros. En ella podrás encontrar todas las funcionalidades básicas de un e-commerce. Este proyecto ha sido desarrollado para seguir aprendiendo y practicando mis conocimientos en el desarrollo frontend y backend.'
assets: 
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671744/bookstore/kilhck9wr9szi7gzzsol.webp'
    type: 'image' 
    alt: 'Inicio de Bookstore'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671744/bookstore/vsnbi32taxd8fmoy8v1q.webp'
    type: 'image' 
    alt: 'Inicio de Bookstore en modo oscuro'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671744/bookstore/zdjfzhmhqp4xk0csklib.webp'
    type: 'image' 
    alt: 'Inicio de Bookstore mostrando los libros más vendidos'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671745/bookstore/sywdyndy3btbfjezcbhy.webp'
    type: 'image' 
    alt: 'Tienda de Bookstore'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671744/bookstore/hvrwkwbzlarn6uazcegl.webp'
    type: 'image' 
    alt: 'Inicio de sesión de Bookstore' 
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671743/bookstore/lpso5ojepwzfequkr3pu.webp'
    type: 'image' 
    alt: 'Cuenta de usuario de Bookstore'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671745/bookstore/brgxyfhhh0a8iprvkrvy.webp'
    type: 'image' 
    alt: 'Lista de deseos de Bookstore'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671745/bookstore/zzqex2va7nx47cxz4rem.webp'
    type: 'image' 
    alt: 'Libros por valorar de Bookstore'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671745/bookstore/x9wtu7icoe0gyxmep840.webp'
    type: 'image' 
    alt: 'Libros valorados de Bookstore'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671745/bookstore/hknzqtrrx3rq2rvyoakw.webp'
    type: 'image' 
    alt: 'Pedidos realizados de Bookstore'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671743/bookstore/a3igepkdqj1gava2rsby.webp'
    type: 'image' 
    alt: 'Carrito de la compra de Bookstore'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671744/bookstore/ngaiagwr9sjox8e3v9ct.webp'
    type: 'image' 
    alt: 'Carrito de la compra de Bookstore en el proceso de pago'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671743/bookstore/fu4zkypysa0hezyjiwhl.webp'
    type: 'image' 
    alt: 'Dirección de envío de Bookstore en el proceso de pago'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671744/bookstore/huwkamtosojxmfhzizsd.webp'
    type: 'image' 
    alt: 'Proceso de pago de Bookstore'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705671744/bookstore/tfed6omkjaffstx5lgg6.webp'
    type: 'image' 
    alt: 'Pedido completado de Bookstore'
stack:       
  - name: 'Angular'
    url: '/assets/technologies/angular.svg'
  - name: 'TailwindCSS'
    url: '/assets/technologies/tailwindcss.svg'
  - name: 'NestJS'
    url: '/assets/technologies/nestjs.svg'
  - name: 'Prisma'
    url: '/assets/technologies/prisma.svg'
  - name: 'PostgreSQL'
    url: '/assets/technologies/postgresql.svg'
  - name: 'Jest'
    url: '/assets/technologies/jest.svg'
  - name: 'Stripe'
    url: '/assets/technologies/stripe.svg'
  - name: 'Swagger'
    url: '/assets/technologies/swagger.svg'
  - name: 'Railway'
    url: '/assets/technologies/railway.svg'
width: 
  number: 1617
  string: '1294px'
height: 
  number: 917
  string: '734px'
github: 'https://github.com/jordigd20/bookstore'
site: 'https://bookstore-jgd.vercel.app/'
---


# Bookstore

Bookstore es una tienda online de libros. En ella podrás encontrar todas las funcionalidades básicas de un e-commerce. Este proyecto ha sido desarrollado para seguir aprendiendo y practicando tanto en el desarrollo frontend como en el desarrollo backend tratando de realizar un proyecto lo más similar a un proyecto real.


## Enlaces de interés

- **Repositorio frontend**: [https://github.com/jordigd20/bookstore-angular](https://github.com/jordigd20/bookstore-angular)
- **Repositorio backend**: [https://github.com/jordigd20/bookstore](https://github.com/jordigd20/bookstore)
- **Sitio web**: [https://bookstore-jgd.vercel.app/](https://bookstore-jgd.vercel.app/)
- **Documentación de la API**: [https://bookstore-jgd.up.railway.app/api](https://bookstore-jgd.up.railway.app/api)

## Objetivo 

El principal objetivo de este proyecto era desarrollar un e-commerce desde cero, utilizando tecnologías en la parte backend que no había utilizado anteriormente como NestJS, Prisma y PostgreSQL. Además, también se ha utilizado Stripe para la gestión de los pagos de los usuarios.

Respecto a la parte frontend, se ha utilizado Angular v16.0 y TailwindCSS para desarrollar la interfaz de usuario.


## Arquitectura del sistema

<br>

<img src="https://res.cloudinary.com/demz9lbb3/image/upload/v1721067758/bookstore/drmhxigw5fekilp2arl5.webp" alt="Arquitectura del sistema de Bookstore" class="rounded-md" />


## Funcionalidades

- **Autenticación**: Los usuarios pueden registrarse e iniciar sesión en la aplicación.
- **Google OAuth**: Los usuarios pueden utilizar Google para iniciar sesión.
- **Búsqueda de libros**: Los ususarios pueden buscar libros y filtrarlos de acuerdo a diferentes criterios.
- **Carrito de la compra**: Los usuarios pueden añadir libros al carrito de la compra.
- **Compra de libros**: Los usuarios pueden comprar libros a través de Stripe con una tarjeta de pruebas.
- **Lista de deseos**: Los usuarios pueden añadir libros a su lista de deseos para comprarlos más tarde.
- **Valoración de libros**: Los usuarios pueden valorar los libros que hayan comprado.
- **Gestión de pedidos**: Los usuarios pueden ver todos los pedidos que hayan realizado y su estado.
- **Gestión de usuarios**: Los usuarios pueden ver y modificar sus datos personales y direcciones.

