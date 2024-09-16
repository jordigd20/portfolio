---
layout: ../../layouts/ProjectLayout.astro
title: 'Microservicios de productos'
date: 'Septiembre 2024'
description: 'Arquitectura de microservicios básica para la gestión de productos de una tienda online.'
assets: 
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1725293236/products-microservices/pevwowr0fl9pzrhgqd0w.webp'
    alt: 'Arquitectura de microservicios'
stack:       
  - name: 'NestJS'
    url: '/assets/technologies/nestjs.svg'
  - name: 'NATS'
    url: '/assets/technologies/natsdotio.svg'
  - name: 'Docker'
    url: '/assets/technologies/docker.svg'
  - name: 'PostgreSQL'
    url: '/assets/technologies/postgresql.svg'
  - name: 'MongoDB'
    url: '/assets/technologies/mongodb.svg'
  - name: 'Stripe'
    url: '/assets/technologies/stripe.svg'
  - name: 'Prisma'
    url: '/assets/technologies/prisma.svg'
width: 
  number: 1617
  string: '1294px'
height: 
  number: 602
  string: '735px'
github: 'https://github.com/Nest-Microservices-jordigd20/products-launcher'
---


# Microservicios

Esta es la primera vez que trabajo con microservicios y he decidido crear una arquitectura básica para la gestión de productos de una tienda online. Parte del código de este proyecto está basado en el curso de [NestJS + Microservicios](https://www.udemy.com/course/nestjs-microservicios/?kw=nestjs+microservicios&src=sac).


# Componentes Clave

- [Api Gateway](https://github.com/Nest-Microservices-jordigd20/client-gateway) - Actúa como punto de entrada de la aplicación, enruta todas las peticiones a los microservicios correspondientes y es responsable de la validación de los datos.
- [Auth Microservice](https://github.com/Nest-Microservices-jordigd20/auth-ms) - Gestiona la autenticación y autorización de los usuarios utilizando JWT. También se encarga de gestionar los usuarios usando MongoDB como base de datos.
- [Products Microservice](https://github.com/Nest-Microservices-jordigd20/products-ms) - Gestiona los productos de la tienda, permitiendo crear, actualizar, eliminar y listar productos. Utiliza PostgreSQL como base de datos.
- [Orders Microservice](https://github.com/Nest-Microservices-jordigd20/orders-ms) - Este servicio es el responsable de crear y gestionar las órdenes de compra. Utiliza PostgreSQL como base de datos.
- [Payments Microservice](https://github.com/Nest-Microservices-jordigd20/payments-ms) - Se encarga de gestionar los pagos de las órdenes de compra, usando Stripe como pasarela de pago. Este servicio es hibrido, ya que tiene un endpoint REST que usa para comunicarse con Stripe.

## Tecnologías

- **NestJS**: Framework de Node.js para la creación de aplicaciones escalables y eficientes.
- **NATS**: Sistema de mensajería que permite la comunicación entre los microservicios.
- **Docker**: Plataforma de contenedores que facilita la creación y despliegue de aplicaciones.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar los usuarios.
- **Stripe**: Pasarela de pago utilizada para procesar los pagos de las órdenes de compra.
- **Prisma**: ORM utilizado para la gestión de la base de datos PostgreSQL y MongoDB.

## Arquitectura

La arquitectura de la aplicación está basada en el patrón de arquitectura de microservicios. Cada microservicio es una entidad separada que es responsable de una parte específica de la aplicación. La comunicación entre los microservicios y el API Gateway se realiza utilizando el sistema de mensajería NATS.

Todos los servicios están contenerizados utilizando Docker, lo que permite que estén encapsulados en una red privada permitiendo que solo los servicios necesarios estén expuestos al exterior. Los únicos servicios expuestos al exterior son el API Gateway y el endpoint webhook del Payments Microservice.