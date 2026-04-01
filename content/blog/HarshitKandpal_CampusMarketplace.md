---
title: Campus Marketplace
author: Harshit Kandpal
date: '2026-03-24'
---

# Project Idea 💡

Every campus has the same problem. Someone's selling last semester's textbooks from their hostel room. Someone else is desperately searching for them. And somehow, the two never meet — or when they do, there's no fair way to agree on a price.

**Campus Marketplace** is the fix for that. A platform built specifically for college students to buy, sell, and trade — textbooks, lab equipment, dorm essentials, whatever. Not another generic e-commerce clone, but something designed around how students actually negotiate and transact with each other.

When I joined the project for FOSS Overflow 2026, it had a working foundation. My job was to take it from "working" to "something you'd actually want to use."

---

# My Contributions 💻

## A Proper Foundation: Auth & Database

The first thing I worked on was the backbone of the entire app — **who you are and how the system remembers you**.

I migrated the database from MongoDB to **PostgreSQL**, redesigning the schema ground-up with proper relational tables, UUID primary keys, and structured user roles (student, vendor, faculty, admin). This wasn't just a tech swap — it made the data model significantly more reliable and set up everything that came after.

On top of that, I integrated **Google Sign-In** with a two-step registration flow. Clicking "Sign in with Google" gives us your profile, but it doesn't tell us your role on campus. So the flow continues — you pick your role, fill in the details that matter (hostel, student ID, shop name for vendors), and only then does your account get created. Short-lived tokens handle the handoff securely between the two steps.

Refresh tokens live in **HTTP-only cookies** — not localStorage, not anywhere JavaScript can touch them. Access tokens rotate silently in the background so sessions stay alive without you ever noticing.

## Role-Based Profiles

Once users had roles, the app could actually respond to them differently.

A **vendor** logs in and sees their shop stats — total listings, active ones, how many have sold, ratings. A **student** sees their hostel info, student ID, and purchase history. Same profile route, completely different experience depending on who's asking.

This made the app feel intentional rather than generic. You're not just "a user." The platform knows what you're here for.

## The Buy & Sell Flow: Negotiation Over Fixed Prices 🤝

This is the part I'm most proud of, and the one that changed what the platform actually *is*.

The original flow was: see item → buy item. Clean, but wrong for a campus context. A textbook isn't worth the same to everyone. Someone might offer ₹150, someone else ₹400. A fixed "Buy Now" button throws all of that away.

So I built an **interest-based system** instead:

- A buyer browses listings and submits an **offer** — their price, a short message, whatever they want the seller to know
- The seller gets a dashboard of all incoming interests, side by side, and can compare them
- They **accept one** — and the system automatically rejects the rest and creates the order

It's a real negotiation loop, not a checkout button. Sellers have actual agency. Buyers aren't just racing to click first — they're making a case.

The listing itself got richer too: condition (new, like-new, good, fair, poor), base price, interest count, highest offer. Sellers can watch momentum build on their listing in real time from their dashboard.

## Cleaning Up for the Real World 🚀

The last stretch was about making everything production-ready.

I connected the database to **Supabase** for cloud hosting and reworked the app's startup logic to work as a **Vercel serverless function** — which means handling cold starts gracefully, caching database connections at the module level, and making sure the first request doesn't arrive before the databases are ready.

Over a hundred debug `console.log` calls got removed. Environment variables got standardized. The dependency lock file got cleaned up after all the merges.

Boring work, but the kind that makes the difference between "it works on my machine" and "it works."

---

# What I Gained 📈

- Designing relational schemas and thinking in joins, not documents
- OAuth 2.0 flows — actually understanding them, not just wiring up a library
- Building state machines for real user workflows (the interest lifecycle was a great exercise in this)
- Serverless deployment quirks — cold starts, connection pooling, and why exporting your app correctly matters more than you'd think
- Reading and respecting an existing codebase before changing it

---

# Experience ✌️

FOSS Overflow gave me something tutorials can't: **stakes**. When something breaks, it's a real repo that real people are trying to run. That changes how carefully you work.

The mentors were consistently available and gave detailed, constructive feedback. **CodeRabbit's** automated reviews were surprisingly sharp too; it caught a role escalation vulnerability in my auth code that I'd completely missed. A client-supplied role field was reaching the database unchecked. The kind of bug you'd only catch in review — or in production.

The Discord channel stayed active throughout, and having other contributors around made the hard stretches a lot more bearable.

If you're thinking about applying next year — do it. Pick something slightly out of your depth, and figure it out. That's genuinely the whole point.

*— Harshit Kandpal*

---

> 📸 *Screenshots below — the interest dashboard, role-based profiles, and the live deployment.*
> <img width="1920" height="1066" alt="image" src="https://github.com/user-attachments/assets/698104d5-6e53-49b1-9b27-4e874944ea85" />
> <img width="1853" height="1045" alt="image" src="https://github.com/user-attachments/assets/1032a171-38a5-4ab0-93d2-308cbc80d5ca" />
> <img width="1850" height="1008" alt="image" src="https://github.com/user-attachments/assets/02ca1a51-5eaf-4266-8f81-6e06a9a92539" />
