---
title: Building @ FOSS Overflow
author: Navya Agarwal
date: '2023-01-18'
---

## 👋 Hola!

I am Navya Agarwal, a 2nd year CS student at IGDTUW. I started contributing to projects at FOSS Overflow as soon as I learnt about their upcoming cohort and got selected as a mentee in December!

## 💻 My Work

Throughout the past month, I juggled two projects "not-a-mess" and "insti-pay". The tech stack that I worked on for both was totally different (and ones that I had never worked on prior), but with the help of some super amazing mentors and fellow mentees, I did all the work!

### 🍛	not-a-mess

It is an app where students can rate mess food and raise any complaints/suggestions. The mess management has a curated dashboard on their end that helps them understand what the students like and dislike, and thus accordingly plan their meals.

In the initial phase, I worked on the entire UI of the project designed using Figma, and in the process I also outlined the core functionality and architecture of the project.

![image](https://user-images.githubusercontent.com/82928853/213011998-93ff40ee-66a5-4e03-ae2c-2424ab30c832.png)

Later on, I worked mainly on the backend, creating RESTful APIs using NodeJS, ExpressJS and MongoDB.

I created the schema and routes (get all, get by id, put, patch, delete, get by specific date ranges) for the following:

1. Users (name, email, if management)
2. Ratings (date, user_id, food_id, stars, tags)
3. Food items (name, ingredients)
4. Mess Menu (day, meal_time, list_food_items)

I also learnt to test all these routes using Postman.

![image](https://user-images.githubusercontent.com/82928853/213014136-5f2cf9cb-e42a-4ba5-8412-c68d31c82b71.png)


### 💸 insti-pay

This app envisions a simple system of points for every day transactions within a college campus. Every user shall be able to load some amount of money to their account which is linked to their ID card.

Prior to this program I had absolutely no idea about Flutter or Supabase used to build this app, I had never even run Android Studio & emulator on my computer.

However, during the past one month I equipped myself with a working knowledge of both and built these features for the app: 
1. reset password functionality
2. user profile + image avatar functionality

![image](https://user-images.githubusercontent.com/82928853/213016539-2a29feb8-eac9-4e1d-84a1-f912aea1aca9.png)

![image](https://user-images.githubusercontent.com/82928853/213014887-56e0f54f-b613-4721-9117-c9f626f38d56.png)

Some very interesting things I used in this project are Magic Links from Supabase to send the reset password link to user and image_picker package for Flutter to upload profile image from camera or gallery.

## 📈 my ~ GROWTH ~ over the past month

It is really hard to believe that I have come this far in just _one_ month. But to put some of these accomplishments in a tangible list -

Technical skills:
- Learnt about node.js, express.js, mongodb from zero to the point where I can write RESTful APIs using them
- Worked on the backend programming for a project for the first time
- Learnt how to build screens in Flutter
- Learnt how to create forms in flutter, used packages like image_picker
- Used supabase for creating backend for Flutter app
- Learnt about MVC architecture and good code writing practices

Apart from all the technical skills, I also learnt a lot about resolving small but very annoying and persistent technical issues using ✨Stack Overflow✨.

Another small but very meaningful accomplishment to me is that now I use Github and git so much more comfortably, you can wake me up in the middle of the night and I can go through the entire process of forking, cloning, pulling, adding, commiting, pushing without a hiccup!

## 🎀 It's a wrap

There is so much more I wanted to do in these projects apart from all that I did in the given duration. Even though the program is officially over, I think I would continue contributing to these projects and maybe come back to FOSS Overflow next year as well!

Overall, it's been a huge learning experience and a chance to connect and collaborate with some amazing people [Apoorv Garg](https://github.com/Apoorvgarg-creator), [Riya Dhiman](https://github.com/riya107), [Hriday Agrawal](https://github.com/HridayAg0102), [Achintya Pandey](https://github.com/badger751) and [Ananya Hooda](https://github.com/Ananyaiitbhilai).

Cheers!
