---
title: Sampoorna
author: Manjot Singh Oberoi
date: '2023-01-18'
---

## Introduction ⚔️

I am [Manjot Singh Oberoi](https://github.com/ken1000minus7), a 3rd year computer science student at Punjab Engineering College, Chandigarh. I love coding and gaming with proficiency in android development and contributing in open source has been one of the most exciting things that I have done in my journey 

![](https://cdn.discordapp.com/emojis/981875569258020924.webp?size=256&quality=lossless)

As a contributer in [FOSS Overflow 2022](https://fossoverflow.dev/), I worked on [Sampoorna](https://github.com/OpenLake/Sampoorna), an android application that provides a one stop solution for all needs of a woman by providing features that solve problems related to women health as well as safety. A period tracker and an SOS button was already implemented in the app before I began working on it and as I entered this program, my plan was to go above and beyond 

![](https://cdn.discordapp.com/emojis/982023262710145114.webp?size=256&quality=lossless)

As a part of my contribution to this project, I implemented a discussion cum blog section in the app that’ll provide a platform for women to discuss their issues and seek help, and also allow them to share their own experience or advice. They can choose to write the blogs anonymously as well and filter them using tags, all in all creating an environment where they can easily interact with others, helping them overcome the problems they face everyday as a woman.

![](https://cdn.discordapp.com/emojis/772878665226518540.webp?size=256&quality=lossless)

## My Contributions ⚔️

- I began by [integrating a serverless backend to the application](https://github.com/OpenLake/Sampoorna/pull/77), using Firebase for the purpose authentication and storing user data.
- The authentication was earlier done locally using `Room`, I [replaced this implementation with Firebase authentication](https://github.com/OpenLake/Sampoorna/pull/78).
- With the use of `SharedPreferences`, the user data was cached so that the app can be functional even without internet, however the blog section would still require internet connectivity.
- Beginning with the blog section, I [added functionality for creation/posting](https://github.com/OpenLake/Sampoorna/pull/79) of a blog, either publicly or anonymously, along with tags for easy searching.
- After blog creation, the latest posted blogs were displayed as a home page for the blogs section, with the addition of [searching blogs as well as filtering](https://github.com/OpenLake/Sampoorna/pull/80) them on the basis of tags.
- Following this, a separate screen for [displaying the details of a blog](https://github.com/OpenLake/Sampoorna/pull/81) was added.
- The blog details page was given a [comments section](https://github.com/OpenLake/Sampoorna/pull/82) where one could add comments for a blog, either publibly or anonymously, and reply to comments or replies posted.
- Added feature to [save blogs](https://github.com/OpenLake/Sampoorna/pull/83) for future reference.
- The app previously didn't provide an option to save a [user profile pic](https://github.com/OpenLake/Sampoorna/pull/84), so I used Firebase Storage to add that functionality and displayed the pics everywhere including comments and replies.
- To end things, the period tracker was given a [notification feature](https://github.com/OpenLake/Sampoorna/pull/85) where a notification is sent to the user when their mensuration cycle is going to begin.

All my pull requests made during this program can be found [here](https://github.com/OpenLake/Sampoorna/pulls?q=is%3Apr+author%3Aken1000minus7+-created%3A%3C2022-12-15+-created%3A%3E2023-01-16+).

![](https://cdn.frankerfacez.com/emoticon/601644/4)

## My Experience ⚔️

Working as a contributor in FOSS Overflow was a breath of fresh air for me. Earlier, I had contributed to a few open source projects but my contributions had been limited to resolving single specific issues which limited my understanding of codebases I worked on. In this program, I had the opportunity to make continuous and interconnected contributions to the project I was working on that helped me explore a new aspect of open source contribution and gave me an experience similar to that  of major open source programs like GSoC and Outreachy. 

Above all, I felt great working with my mentor [Ashutosh Aswal](https://github.com/yellowHatpro) who shared a similar passion for android development and had immense experience working on this tech stack. Discussing the vision of Sampoorna with him was always fascinating and he was ready to help me out anytime. He continues to inspire me to keep on moving forward as only those who keep on moving forward can know how far one can go ⚔️

![](https://cdn.discordapp.com/emojis/1014597953345814599.webp?size=256&quality=lossless)
