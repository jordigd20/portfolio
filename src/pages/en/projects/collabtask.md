---
layout: ../../../layouts/ProjectLayout.astro
title: 'CollabTask'
date: 'September 2022 - May 2023'
description: 'CollabTask is a mobile app for managing and distributing tasks among a group of people in an equitable and fair way among all participants.'
assets: 
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686189/collabtask/o589sohg2t0fwwgs7nxd.webp'
    type: 'image' 
    alt: 'Introduction interface 1'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686189/collabtask/cxfdumzeaefsaz5vgl8k.webp'
    type: 'image' 
    alt: 'Introduction interface 2'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686189/collabtask/beqbtihymahfvpcm2gnk.webp'
    type: 'image' 
    alt: 'Introduction interface 3'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686189/collabtask/ilpklkijuxk1zcnsdmlc.webp'
    type: 'image' 
    alt: 'Introduction interface 4'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686189/collabtask/s0eyrawjhux520bedvgq.webp'
    type: 'image' 
    alt: 'Home interface'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686189/collabtask/gxguv0yhicgsh1gx4gmb.webp'
    type: 'image' 
    alt: 'Teams and tasks lists interface'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686190/collabtask/ecnn6qoangdkyd6lh89m.webp'
    type: 'image' 
    alt: 'Tasks list interface'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686190/collabtask/rlkivo92r1aitukxe4ce.webp'
    type: 'image' 
    alt: 'Task detail interface'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686190/collabtask/lrxmsg5k6alj4neyz6re.webp'
    type: 'image' 
    alt: 'Edit task interface'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686189/collabtask/p0wk3exw3ukkdswvykxx.webp'
    type: 'image' 
    alt: 'Manual task distribution interface'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686189/collabtask/ujofn5vqrlzvemaar80s.webp'
    type: 'image' 
    alt: 'Automatic task distribution by preferences interface'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686190/collabtask/zeoneqewvh5naiotf0cg.webp'
    type: 'image' 
    alt: 'Interface to make a task exchange'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686190/collabtask/ham2f6eazygkygaqmfgj.webp'
    type: 'image' 
    alt: 'Interface to see received exchanges'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686190/collabtask/hhxrc5nm4qmtiktnm5mz.webp'
    type: 'image' 
    alt: 'Team members interface'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686190/collabtask/nzm5ffg5tiktx6u6kivt.webp'
    type: 'image' 
    alt: 'Interface to rate teammates'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686189/collabtask/ppu2eejidcgpkya6k6ur.webp'
    type: 'image' 
    alt: 'Users profile interface'
  - url: 'https://res.cloudinary.com/demz9lbb3/image/upload/v1705686189/collabtask/jzn6jjhnx0qycxuwqyar.webp'
    type: 'image'
    alt: 'Users profile interface'
stack:       
  - name: 'Ionic'
    url: '/assets/technologies/ionic.svg'
  - name: 'Angular'
    url: '/assets/technologies/angular.svg'
  - name: 'Firestore'
    url: '/assets/technologies/firebase.svg'
  - name: 'Firebase Cloud Functions'
    url: '/assets/technologies/firebase.svg'
headerClass: 'bg-[#0D9488] text-white'
navClass: 'text-white [&_svg]:fill-white'
width: 
  number: 1080
  string: '260px'
height: 
  number: 2400
  string: '580px'
github: 'https://github.com/jordigd20/collabtask'
site: 'https://github.com/jordigd20/collabtask/releases'
---

# CollabTask

This project is mobile application developed for the Final Degree Project of Multimedia Engineering at the University of Alicante. 

You can visit the application from the web or download it on Android devices.

- Web application: https://collabtask-8d01d.firebaseapp.com/
- Download APK: https://github.com/jordigd20/collabtask/releases


## Objective

The main objective of this application is to allow users to create groups among other users to be able to manage and obtain a balanced and fair distribution of tasks, focused on a collaborative and friendly context, in which participation is encouraged and a system that rewards people who complete their tasks is available.

## Main features

- Form a team of people and create task lists along with other participants.
- There are two different types of distribution:
  - **Manual distribution**: Distribution in which users must assign the tasks one by one themselves.
  - **Automatic distribution by preferences**: Users can establish which tasks of the distribution they prefer to perform and an algorithm will distribute the tasks taking into account the preferences of the users and the points they have obtained over time using the application.
- **Task exchange**: Users can exchange tasks among their peers using their points or exchanging their tasks for others.
- Users can rate the work of their peers so that these ratings are reflected in their profile.
- Both ratings and effectiveness with assigned tasks improve the quality mark of CollabTask. A mark that reflects the good work of users.

## Highlight features

- **Real-time interaction between multiple users**: The movement of tasks between users occurs in real time without having to reload the interfaces. This has been achieved using observables for communication between the app and the Cloud Firestore database, making it possible for all participants in the same team to interact at the same time while the distribution is being made.

- **Daily notification system**: Every day a function is executed that sends a notification to all users who have pending tasks so that they do not forget to perform them.

- **Distribution algorithm**: An algorithm has been implemented that distributes tasks among all participants in a team taking into account their preferences and the points they have obtained over time. This algorithm distributes tasks in an equitable and fair way.

- **Quality mark**: The quality mark is a percentage that is calculated taking into account the effectiveness that the user has obtained by completing their tasks and the ratings they have received from their peers. This percentage is public and demonstrates both the work done and the opinion of your peers towards you.