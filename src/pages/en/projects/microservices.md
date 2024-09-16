---
layout: ../../../layouts/ProjectLayout.astro
title: 'Products microservices'
date: 'September 2024'
description: 'Microservices architecture for managing products of an online store.'
assets: 
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1725293236/products-microservices/pevwowr0fl9pzrhgqd0w.webp'
    alt: 'Microservices architecture'
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

## Microservices

This is the first time I work with microservices and I decided to build a basic architecture to manage the products of an online store. Part of the code of this project is based on the [NestJS + Microservices](https://www.udemy.com/course/nestjs-microservicios/?kw=nestjs+microservicios&src=sac) course.

## Key Components

- [API Gateway](https://github.com/Nest-Microservices-jordigd20/client-gateway/tree/master) - Acts as the entry point of the application, it routes the requests to the corresponding microservice and it is responsible for the validation of the requests.
- [Auth Microservice](https://github.com/Nest-Microservices-jordigd20/auth-ms/tree/main) - Manages the authentication and authorization of the users making use of JWT tokens. It also manages the users using MongoDB as the database.
- [Products Microservice](https://github.com/Nest-Microservices-jordigd20/products-ms/tree/master) - Manages the products of the application, allowing the users to create, update, delete and list the products. It uses SQLite as the database.
- [Orders Microservice](https://github.com/Nest-Microservices-jordigd20/orders-ms/tree/master) - This service is responsible for creating the orders and manage their status. It uses PostgreSQL as the database.
- [Payments Microservice](https://github.com/Nest-Microservices-jordigd20/payments-ms/tree/master) - Manages the payments of the application, using Stripe as the payment gateway. This service is hybrid, it has one REST endpoint that is used.

## Technologies

- **NestJS**: Node.js framework used for building for building efficient, reliable and scalable server-side applications.
- **Nats**: Message broker used for the communication between the microservices.
- **Docker**: For containerizing the services, facilitating deployment in any environment in a consistent and reproducible way.
- **PostgreSQL**: Relational database selected for its reliability and ability to handle large volumes of data.
- **MongoDB**: NoSQL database used for the users in the auth microservice.
- **Stripe**: Payment gateway used for the payments microservice.
- **Prisma**: ORM used in OrdersMS, AuthMS and ProductsMS.

## Architecture

The architecture of the application is based on the microservices architecture pattern. Each microservice is a separate entity that is responsible for a specific part of the application. The communication between the microservices and the API Gateway is done using the NATS message broker.

All the services are containerized using Docker, which allows them to be encapsulated in a private network allowing only the necessary services to be exposed to the outside. The only services exposed to the outside are the API Gateway and the webhook endpoint of the Payments Microservice.