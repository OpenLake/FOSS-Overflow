---
title: Knowledge Sharing Platform
author: Subin
date: '2023-01-17'
---

## Project Link and GitHub
- Webapp: https://knowledge-sharing-platform.vercel.app/
- GitHub: https://github.com/OpenLake/Knowledge-Sharing-Platform
## About Me
I am [Subin S K](https://www.linkedin.com/in/subinsk/), a 3rd Year BTech CSE student at CTAE Udaipur, Rajasthan. I have 2 years of experience developing Full Stack Applications using Reactjs, Nodejs, Nextjs, Expressjs, Flask and MongoDB & MySQL as databases.

I also hold a variety of experience working with Redux, GraphQL, and CSS framework - Tailwind CSS.

I am also the [Google Developer Students Club (GDSC) Lead](https://gdsc.community.dev/college-of-technology-and-engineering-ctae-udaipur/) at my campus. I have organized many sessions, workshops and [tech podcasts](https://www.youtube.com/@matrixio6496/streams).

## Idea behind the Project
A college student always has difficulties finding the best and appropriate course for a certain domain or finding notes for the curriculum. To solve that problem, the Knowledge Sharing Platform will help, it is a college-level application to share study notes and reviews for professors and courses.

Reviews help a lot in finding appropriate and relevant courses, so in this web app, it is made possible for the users to give reviews about a course without being inspected closely. Moreover, students can also get relevant course resources from the students who already opted for the course. This platform might also act as a general guidance portal.

## Project Workflow 
![ksp_flowdiagram](https://ik.imagekit.io/subinsk/KSP_Flowdiagram.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1673762128811)

## Contributions
1. **Revamping the project to NextJS, TailwindCSS, Firebase, Prisma, React Table and Supabase**
	Previously the project was in Django and React and deploying it, will be difficult as free tier options to deploy are no longer supported for server-based apps and in accordance with that Javascript applications are becoming more popular in building modern applications.  
So, for these reasons, the tech stack is revamped.
2. **User Authentication** 
	- Created user data model using Prisma ORM.
	- Firebase login with Google integrated	.
	- Token validator added at the backend.
3. **Tabular display of data and upvoting system integrated**
	- The data is displayed in a tabular form using React Table.
	- Upvote buttons are added to each Note and PYQ.
4. **CRUD Operations on Course**
	- User ID will be attached to every course the user adds, this will identify which user added that course.
	- The modification options for a course will only be shown to the user if it is added by that particular authorized user.
	- Created a validation checkpoint function, to validate the authorization of the current user to modify that particular course content.
5. **Review System**
	- Created Review data entities and models.
	- Modal add add rating and comments.
	- Upvoting system for each review.
	- The reviews are sorted on the basis of the upvotes.
## How Fossoverflow helped in my overall development
![foss_overflow](https://fossoverflow.dev/logo.png)
After FOSS Overflow, I have gained newfound confidence in my web 
development skills.
The mentors helped me a lot throughout the development of app, resolved the issues and suggested changes.
Finally, I'd want to express my gratitude to the FOSS overflow team for offering me with this opportunity, which has allowed me to improve both personally and professionally.