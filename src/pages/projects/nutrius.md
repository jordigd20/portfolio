---
layout: ../../layouts/ProjectLayout.astro
title: 'NutriUs'
date: 'Septiembre 2021 - Junio 2022'
description: ''
assets: 
  - url: '/assets/nutrius/home.webp'
    type: 'image' 
    alt: 'Interfaz de inicio'
  - url: '/assets/nutrius/premium.webp'
    type: 'image' 
    alt: 'Interfaz de planes premium'
  - url: '/assets/nutrius/lista-menus.webp'
    type: 'image' 
    alt: 'Interfaz de lista de menús'
  - url: '/assets/nutrius/detalle-menu.webp'
    type: 'image' 
    alt: 'Interfaz del detalle de un menú'
  - url: '/assets/nutrius/menu-pdf.webp'
    type: 'image' 
    alt: 'PDF generado para el menú'
  - url: '/assets/nutrius/buscador-platos.webp'
    type: 'image' 
    alt: 'Interfaz del buscador de platos'
  - url: '/assets/nutrius/crear-plato.webp'
    type: 'image' 
    alt: 'Interfaz del formulario de creación de platos'
  - url: '/assets/nutrius/seguimiento-comidas.webp'
    type: 'image' 
    alt: 'Interfaz del seguimiento de las comidas'
  - url: '/assets/nutrius/seguimiento-peso-1.webp'
    type: 'image' 
    alt: 'Interfaz de seguimiento del peso y la altura'
  - url: '/assets/nutrius/seguimiento-peso-2.webp'
    type: 'image' 
    alt: 'Interfaz de seguimiento del peso y la altura'
  - url: '/assets/nutrius/pdf-seguimiento.webp'
    type: 'image' 
    alt: 'PDF generado para el seguimiento de las comidas, el peso y la altura'
  - url: '/assets/nutrius/recompensas.webp'
    type: 'image' 
    alt: 'Interfaz de las recompensas'
  - url: '/assets/nutrius/chat-1.webp'
    type: 'image' 
    alt: 'Interfaz del asistente virtual 1'
  - url: '/assets/nutrius/chat-2.webp'
    type: 'image' 
    alt: 'Interfaz del asistente virtual 2'
  - url: '/assets/nutrius/chat-3.webp'
    type: 'image' 
    alt: 'Interfaz del asistente virtual 3'
  - url: '/assets/nutrius/entorno-grafico-1.webp'
    type: 'image' 
    alt: 'Interfaz del entorno gráfico para los niños 1'
  - url: '/assets/nutrius/entorno-grafico-2.webp'
    type: 'image' 
    alt: 'Interfaz del entorno gráfico para los niños 2'
  - url: '/assets/nutrius/entorno-grafico-3.webp'
    type: 'image' 
    alt: 'Interfaz del entorno gráfico para los niños 3'
  - url: '/assets/nutrius/entorno-grafico-4.webp'
    type: 'image' 
    alt: 'Interfaz del entorno gráfico para los niños 4'
  - url: '/assets/nutrius/admin-1.webp'
    type: 'image' 
    alt: 'Interfaz de las estadísticas recopiladas para los administradores'
  - url: '/assets/nutrius/admin-2.webp'
    type: 'image' 
    alt: 'Interfaz de las estadísticas recopiladas para los administradores'
  - url: '/assets/nutrius/admin-usuarios.webp'
    type: 'image' 
    alt: 'Interfaz de la lista de usuarios desde la zona de administración'
  - url: '/assets/nutrius/admin-perfiles.webp'
    type: 'image' 
    alt: 'Interfaz de la información de los niños de un usuario desde la zona de administración'
  - url: '/assets/nutrius/admin-platos.webp'
    type: 'image' 
    alt: 'Interfaz de la lista de platos desde la zona de administración'
  - url: '/assets/nutrius/admin-menus.webp'
    type: 'image' 
    alt: 'Interfaz de la lista de menús desde la zona de administración'
  - url: '/assets/nutrius/admin-menus-2.webp'
    type: 'image' 
    alt: 'Interfaz de edición de un menú desde la zona de administración'
stack:       
  - name: 'Angular'
    url: '/assets/technologies/angular.svg'
  - name: 'NodeJS'
    url: '/assets/technologies/nodejs.svg'
  - name: 'MongoDB'
    url: '/assets/technologies/mongodb.svg'
  - name: 'Dialogflow'
    url: '/assets/technologies/dialogflow.svg'
  - name: 'WebGL'
    url: '/assets/technologies/webgl.svg'
headerClass: 'bg-[#0D9488] text-white'
navClass: 'text-white [&_svg]:fill-white'
github: 'https://github.com/jordigd20/nutrius'
site: ''
---

# NutriUs

En este proyecto se ha desarrollado una aplicación web sobre nutrición infantil que ofrece menús y dietas para niños de acuerdo con los objetivos/intolerancias que los tutores/padres establezcan. Mientras los niños cuentan con un entorno gráfico atractivo para ellos en el que pueden interactuar y conseguir recompensas, los padres/tutores disponen de un apartado en el que poder ver un seguimiento de la evolución de los niños.

Actualmente el proyecto no está disponible al público ya que la web fue hosteada en un VPS subvencionado por la Universidad de Alicante únicamente durante 1 año.

## Universidad

NutriUs es un proyecto que surge de la necesidad de desarrollar una aplicación web para el 4º curso del grado de Ingeniería Multimedia en la Universidad de Alicante. Este tipo de proyecto llamado "proyecto ABP" (Aprendizaje Basado en Proyectos) se centraba en lograr el desarrollo completo de una aplicación web con temática libre en un equipo de 5 personas durante 8 meses. Los únicos requisitos eran tener un apartado para la  administración del sistema, un apartado para los usuarios corrientes y un apartado que contara con un motor gráfico propio desarrollado utilizando WebGL.

## Funcionalidades principales

- **Chat integrado con DialogFlow**: Dentro del apartado de los padres/tutores, se desarrolló un chat que respondía preguntas de carácter general, las dudas más frecuentes sobre la aplicación en sí, y realizaba acciones en la cuenta del usuario como cambiar un plato del menú, crear un nuevo registro del peso y la altura o crear nuevas recompensas.
- **Entorno gráfico**: El entorno gráfico está basado en islas con diferentes temáticas. En cada mes aparecen tantas islas como semanas tenga el mes, y en cada isla aparecen 7 botones que representan los días de la semana. La idea es que cada día los niños puedan entrar a la aplicación y seleccionen el día de hoy para llevar un registro de lo que se han comido. Conforme los niños se van comiendo todo a lo largo de la semana, verán que visualmente la isla va teniendo cada vez más vida ya que se va rellenando con nuevos objetos, además, van ganando puntos que pueden canjear en recompensas que establecen los padres.
- **Sistema de pago premium**: Para poder hacer rentable el proyecto, se estableció un modelo de negocio freemium, en el cuál a los usuarios gratuitos se les generan menús semanales en acorde a los objetivos/intolerancias pero luego no podrán cambiar ningún plato a no ser que paguen una subscripción. La pasarela de pago se implementó mediante el API de PayPal.
- **Generación de PDFs con el seguimiento**: Dado que muchas veces los padres/tutores deben acudir al pediatra o al nutricionista se implementó la generación PDFs para que se pudiera imprimir toda la información que se recopilaba sobre las comidas, el peso y la altura de los niños.
- **Gestión de los menús**: Para los usuarios premium, además de poder ver cada plato del menú, también pueden añadir, cambiar o eliminar los platos. Para ello se implementó un buscador de platos en el cuál los usuarios pueden utilizar los platos de la base de datos de NutriUs, o bien crear sus propios platos.
- **Apartado de administración**: Para los usuarios administradores de la aplicación, se desarrolló un apartado en el cuál se pueden ver estadísticas sobre los usuarios, menús y platos. Además de poder gestionar todos estos desde la propia aplicación.