---
title: Canonforces
author: Hansika Reddy Gurrala
date: '2026-03-27'
---

# How It Started 👩‍💻

Before FOSS Overflow, my idea of development was very simple: write some code, run it, fix errors, done. Most of my projects were individual projects where I controlled everything — the code, the structure, the bugs, everything.

Life was simple. Bugs were small. Problems were predictable. I was in control.

Then somehow I joined FOSS Overflow and my headaches started…

At first, even understanding the project structure felt like trying to read someone else’s mind. I would open files and have no idea why something was written or how different parts were connected. But slowly, file by file, feature by feature, things started making sense.

This blog is basically the story of the features I worked on, the bugs that attacked me, the debugging nights, and how this entire experience changed the way I look at software development.

![fire](https://substackcdn.com/image/fetch/$s_!lhbf!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5fb05cd7-7390-46ae-baa4-519f783ff664_1200x846.jpeg)

# 🚀 About The Project

CanonForces is a multiplayer Codeforces companion platform designed to make competitive programming collaborative, analytical, and fun. The goal of the platform is to bridge the gap between solitary practice and community engagement by integrating tools like a built-in IDE, real-time 1v1 duels, and performance analytics.

The most interesting part about this project for me was that **all features were interconnected.**

- Submissions affected coins  
- Coins affected leaderboards  
- Leaderboards affected engagement  
- AI hints affected rewards  
- Quizzes added competition  

So whenever I built one feature, I couldn’t just think about that feature alone — I had to think about how it affected the entire platform.

This was the first time I truly understood that **software is not just code — it is a system.**

# Features I Worked On 💻

## 🗂️ Past Contests System

One of the major features I worked on was the **Past Contests section**. This allows users to browse archived contests and attempt them like virtual contests.

This feature was not just a simple page. It connected with:
- Submissions  
- Coins  
- Verification  
- Community solutions  

While working on this feature, I really started understanding how different parts of a system are connected and how changing one thing can affect multiple other features.

---

## ✅ Codeforces Verification System

I implemented a **Verify via Codeforces** feature using the Codeforces API.

When a user submits their handle and problem ID, the system checks whether the user actually solved that problem on Codeforces before accepting the submission. This prevented fake submissions and ensured authenticity.

While building this feature, I learned how to:
- Work with external APIs  
- Handle API failures  
- Write verification logic  
- Handle backend errors properly  

It also taught me a very important lesson:  
**APIs fail exactly when you are demonstrating your feature to someone.**


![Throwing Laptop](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3l2ZnZla2d1d2hiNzlwaHVuaTc1eThpeGRyYW43cDNpajJkY3ZmZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lNubxCPAPvSUw/giphy.gif)


## 🖥️ In-Browser Code Editor

I also implemented an **integrated code editor** where users can write and submit code directly on the platform in multiple languages like C++, Java, and Python.

When a user submits code, the system stores:
- Code  
- Language  
- Problem ID  
- User ID  
- Timestamp  

This feature later became the base for many other features like:
- Submission history  
- Community solutions  
- Activity tracking  

So this turned out to be one of those **small features that later became very important**.

---

## 🪙 Coin Reward System (Anti-Farming Logic)

We had a coin reward system where users earn coins when they solve problems.

But there was a problem. Users could submit multiple times or refresh and potentially **farm coins like a cryptocurrency miner**.

So I implemented **idempotency checks** where each solved problem ID is stored, and coins are only awarded once per problem per user.

While working on this, I learned a lot about backend logic, database checks, and transactions.


## 👥 Community Solutions & Upvotes

I worked on a **community solutions board** where users can view other users’ solutions and upvote helpful ones.

This made the platform more interactive and helped users learn different approaches to the same problem. It also made the platform feel more like a community rather than just a problem-solving website.


## 📊 Recent Submissions Feature (Profile Page)

On the user profile page, I implemented a **Recent Submissions / Activity Panel** which shows:
- Total problems solved  
- Last active date  
- Difficulty-wise solved breakdown  
- Recent activity  

This made the profile page more informative and gave users a quick overview of their progress.

---

## ▶️ Run & Submit System + Execution Pipeline

This feature gave me **multiple emotional breakdowns** (educational breakdowns).

Initially, Run and Submit were not properly connected to the execution pipeline, and while fixing this I ran into multiple issues:

- Firebase Admin SDK causing 500 errors  
- RapidAPI failures  
- CORS errors when fetching Codeforces data  
- No proper UI feedback  

I solved these by:
- Moving submission logic to Firestore transactions  
- Adding Judge0 fallback when RapidAPI failed  
- Creating a server-side proxy for Codeforces API  
- Adding toast notifications for user feedback  

After all this, the editor finally became fully functional and reliable.

![works On my machine](https://i.pinimg.com/736x/71/ff/d4/71ffd47d032be54a1fad877bded70868.jpg)


# The Most Challenging and Fun Feature – 1v1 Real-Time Quiz ⚔️

If software development had **boss fights**, this feature was definitely one of them.

The **1v1 Real-Time Quiz** allows two players to compete against each other in real time:
- Same questions  
- Same timer  
- Live score updates  
- Rematches  
- Private rooms  
- Matchmaking  

When I first thought about this feature, it sounded simple:

**Two players. Quiz. Timer. Score. Done.**

Very innocent idea Noooooooo very dangerous idea.

![sobbing](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9hZWtscXhmdWZ4Y2I0ejA2bmwzcHNpbjY5MGZzb2l0ZGZ2cXZjayZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/MXjfhzctIWoObAuATS/giphy.gif)

## How the Feature Works 🧠

The system supports three modes:
- Matchmaking – Find a random opponent  
- Private Lobby – Invite a friend via link  
- Rematch System – Play again with same settings  

This made the feature feel more like an actual multiplayer game rather than just a quiz.

## Tech Stack Madness ⚙️

This one feature used almost the entire tech stack:
- Next.js – Frontend  
- Socket.io – Real-time communication  
- Redis (Upstash) – Active room state & matchmaking  
- Firestore – Questions and stats  
- Google Gemini API – Dynamic question generation  

So this feature alone connected:
**Frontend + Backend + Database + Cache + Sockets + AI**

Which was exciting and slightly terrifying at the same time.

---

## The Biggest Challenge – Real-Time Synchronization ⏱️

Both players needed to see:
- Same timer  
- Same progress  
- Same score updates  

But in real networks, latency exists.

Sometimes:
- One player sees 10 seconds left  
- The other player sees 12 seconds left  
- One player finishes but the opponent screen doesn’t update  

![Crying](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGp0d3ZnNHluYmUzd2p1OGczNnltZDU5YXlscGY2MjhpOGI1NnFtbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fFa05KbZowXiEIyRse/giphy.gif)

So I implemented synchronization using socket events where progress and scores are constantly synced and the UI adjusts if it falls behind.

---

## The Socket.io + Next.js Problem 🔌

During development, Next.js hot reload would sometimes restart the socket server and create multiple socket instances.

This caused:
- Random connection failures  
- Rooms getting destroyed  
- Everything working perfectly → change one CSS line → sockets stop working  

I solved this using a **singleton socket server pattern** so the socket instance is reused instead of recreated.

This bug alone probably aged me by 3 years.

## State Persistence – Redis to the Rescue 🧰

Initially, if a player refreshed the page, the entire room would break.

So I moved room state into Redis where I stored:
- Players  
- Scores  
- Current question index  
- Timer state  

After this, players could refresh and rejoin without breaking the game.

Redis basically saved my life.

## The Rematch Feature Was Also a Boss Fight 🎮

When both players click rematch, I had to:
- Create a new room  
- Generate new questions  
- Move both players into the new room at the same time  

If one player moved earlier, things broke. So I had to carefully synchronize server events and client routing so both players transitioned smoothly.

This sounds simple in a blog.  
It was not simple at 1:30 AM. 🥲

# Bugs, Errors, and Debugging Nights 🐛

No software project is complete without bugs, and this project had plenty of them.

Some of the most memorable ones:
- Firebase Admin SDK randomly throwing 500 errors
- RapidAPI failures during submissions
- CORS issues while fetching Codeforces data
- Socket connections breaking because of Next.js hot reload
- Redis state not syncing properly
- Rematch system creating duplicate rooms
- Timer synchronization issues between players

Some bugs took 10 minutes to fix.  
Some bugs took 5 hours.  
Some bugs fixed themselves and I still don’t know how.

Debugging this project taught me one important skill:  
**How to stay calm when nothing works.**

## Shoutout 🙌

A big shoutout to my mentor for being incredibly supportive throughout this journey. He patiently clarified all my doubts — even the ones that felt too basic — without ever making it awkward 😅. His PR feedback was extremely valuable and helped me improve both my code and my overall approach to problem-solving. Honestly, those PR reviews were like mini learning sessions every time. I’m really grateful for his guidance and patience throughout the project 🚀.

# What I Learned From This Project 🙂‍↕️

This project taught me that software development is not just about writing code.

It is about:
- Reading other people’s code  
- Debugging things that make no sense  
- Handling edge cases  
- Making multiple technologies work together  
- Not panicking when everything breaks  

Most importantly, I learned the difference between **writing code and building systems**.

---

# Final Thoughts 🚀

This entire project was:
- Exhausting  
- Confusing  
- Frustrating  
- Fun  
- Interesting  
- Rewarding  

Sometimes things worked immediately.  
Sometimes I spent 3 hours debugging and the problem was a missing bracket or a typo in a variable.  
Sometimes everything worked and I didn’t know why.  
Sometimes nothing worked and I also didn’t know why. 😅

But when everything finally came together and the platform worked with all features connected — it was honestly one of the most satisfying feelings.

FOSS Overflow was not just about contributing to a project.  
It was about **learning how real software development actually works.**

And I’m really glad I got to be a part of it.

![glad](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGF0ZDQwaGFmZGVybmJjcnIxbHZ6cjByNXdzbncyNGR3NmZsc2Y1OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TY5ipV2vl9p6lkhCQn/giphy.gif)

**The End… or probably just the beginning of more debugging.** 🙂🙃