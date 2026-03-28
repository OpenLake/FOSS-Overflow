---
title: CCPS Portal
author: Kumar Utkarsh
date: '2026-03-29'
---

Hello everyone, I am [**Kumar Utkarsh**](https://www.linkedin.com/in/profile-kumar-utkarsh/) - A full stack Web Developer and an undergraduate pursuing B.Tech in CSE at IIT Bhilai

# Project Idea 💡
During FOSS Overflow 2025-26, I contributed to the CCPS Portal (Centre for Career Planning and Services Portal) under OpenLake. The primary goal was to transform the portal into a high-powered resource for students by implementing an Automated Job Discovery System.

The project aimed to bridge the gap between internal university postings and the vast landscape of external opportunities by aggregating high-quality job listings directly into the student dashboard.

# My Contributions 💻
I focused on building a robust data pipeline and enhancing the user experience for both students and administrators.

### Core Features Implemented
* **Automated Job Extraction Pipeline:** Built API integrations with Adzuna and Jooble to scrape high-tier (> 12 LPA) IT and Engineering roles.
* **Background Scheduler:** Implemented a node-cron job that autonomously fetches new roles and purges expired listings older than 30 days.
* **Intelligent Job Feed:** Redesigned the frontend with a JobDetailModal that displays deep insights, including skill match scores and alumni connections.
* **External Application Tracking:** Developed a flow that allows students to track applications made on external platforms within their portal dashboard.
* **Admin QoL Upgrades:** Enhanced the management portal with debounced live search and custom MongoDB aggregation pipelines to sort jobs by application volume.
* **UI Synchronization:** Made the "Saved Applications" page feature-equivalent to the main "Applications" page (supporting application withdrawal, saved job toggles, and unified detail modals).
* **Applications Pagination:** Added "Show More" pagination in the Applications page to improve user navigation.

### Technical Challenges & Bug Fixes
* **Data Normalization:** Handling diverse data structures (like raw HTML descriptions vs. plain text) from different APIs required building robust custom parsers.
* **Performance Optimization:** To prevent legacy API timeouts with large datasets, I restructured MongoDB queries using $lookup and implemented server-side pagination.
* **Dangling Data:** Authored custom middleware cascade delete hooks in MongoDB to ensure that deleting a job posting also clears orphaned "Saved Job" entries.
* **Dark Mode Fixes:** Fixed legacy hardcoded colors in various Modals (Create Job, Edit Job, Apply forms) by implementing strict dark mode Tailwind classes.
* **Code Quality Audit:** Completed a comprehensive code quality audit based on CodeRabbit AI feedback, optimizing the scrapers and improving scheduler reliability.

# What I Gained 📈
This experience was a massive leap in my engineering capabilities, moving from basic development to managing a complex, full-stack data ingestion pipeline.
* **Technical Proficiency:** Deepened my expertise in Full-Stack development, specifically using React, Node.js, and MongoDB.
* **System Design:** Learned to implement automated background services and handle large-scale data synchronization.
* **Collaboration:** Mastered complex Git workflows, including resolving structural merge conflicts while preserving critical features from multiple contributors.

# Experience ✌️
The environment at FOSS Overflow was fantastic for open-source growth. The hands-on mentorship made navigating any hurdle much smoother.

I want to give a huge shout-out to my mentors for providing guidance when necessary while allowing me the freedom to explore my own solutions.

Overall, it has been a phenomenal learning journey that has better prepared me for my future goals.

---

### These are few of the features in action:
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/79c065ea-5df0-4769-90c1-934fc1389e46" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/33136a72-b417-4482-a806-0387429a8857" />
