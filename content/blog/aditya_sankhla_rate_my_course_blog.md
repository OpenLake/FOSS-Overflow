---
title: FOSS Overflow 2k24 Blog - Rate My Course
author: Aditya Sankhla
date: '2024-02-29'
---

## What is FOSS Overflow and what it means to me?
FOSS Overflow is a month-long event celebrating open source culture and is organized by OpenLake yada yada yada. But for me, personally, FOSS Overflow was an unique opportunity that created an enviroment that keeps BUILDING as its highest priority. There were no long project discussion meetings, boring technical guidelines to adhere to etc. Instead it was a fast paced program aimed at building, code reviews and iterative development. It also made me realise how big of a role communication plays as I had to coordinate with another Mentee who was developing the frontend of this project simultaenously (really hope I spelled it right).

## What is RateMyCourse?
In the chronicles of academia, stories have spread of students shipwrecked by ill-chosen courses. But fret not, for RateMyCourse arises as the beacon of hope 🌅, relegating such tales to mere urban legends. _Need is the mother of all invention_ or something along those lines and this project satiates an urgent need for an open, anonymous and reliable feedback mechanism for the students to leverage and choose the right (can be substituted with Easy for most students) courses. This project aims to create a platform to aggregate reviews about various courses and instructors in our college, providing valuable insights for students when selecting their courses.

## My Project Responsibility?
My primary role involved developing a comprehensive backend system for RMC, encompassing API development, database management, and integration with external services. Additionally, I was responsible for deploying it on the internet to make the platform accessible to users, particularly the students at IIT Bhilai.

## Tech Stack (for Backend):
- NodeJS
- ExpressJS
- MongoDB

## Operational Overview:
Allow me to guide you through the underlying process.
There are three key entities involved:
1. User
2. Admin (default)
3. Superadmin (with escalated privileges)

The superadmin has the authority to register other admins into the system. Admins, in turn, are empowered to add courses.

Upon registration, users are required to use their official IIT Bhilai email IDs. We employ the Nodemailer mail service to send a One-Time Password (OTP) to the user's email address. Once the correct OTP is submitted, the user is officially registered and logged in. They receive a JSON Web Token (JWT) in response, which is utilized for future authentication via implemented middlewares for both admin and user functionalities.

Users gain access to a comprehensive list of all courses created by the admin. Clicking on any course reveals a list of all iterations (various semesters) during which the course has been offered. Users can select their preferred iteration and provide a rating for the course. The existing rating is then updated using the new rating and is reflected at three levels: for the iteration, for the specific instructor, and lastly, for the course as a whole.

## Future scope:
I am excited about the possibilities that this project entails and am planning on continuing to contribute to this project even after the conclusion of this program. There are numerous opportunities for enhancements, such as implementing automated course creation via a simple CSV/JSON upload and integrating with AIMS. I see the creation of new issues as a way to engage new contributors in OSS development and to continue refining the project myself.

Lastly, I would like to thank the project mentors [@Chaitanya Bisht](https://github.com/chaitanyabisht), [@Satvik Vemuganti](https://github.com/VickyMerzOwn), and [@Roshan Jha](https://www.youtube.com/watch?v=rNeGVdq7ahk) for their constant feedback and brilliant solutions to the roadblocks that I faced. ::bowEmoji::

*Signing off-  
Aditya Sankhla  
A builder at heart.*
