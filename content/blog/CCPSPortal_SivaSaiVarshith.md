---
title: "Placement-Aware Intelligent Job Feed — CCPS Portal"
author: "Siva Sai Varshith"
date: '2026-03-27'
---

# Project Idea 💡

So the CCPS portal is basically the placement portal for IIT Bhilai students. When I first opened the job feed, it was just... a list. Jobs, in some order, with no real context. You didn't know which ones you were actually eligible for, how many people had already applied, or whether anyone from your college had ever worked at that company.

I thought — what if the feed actually *told* you all of that? Like, what if instead of just listing jobs, it helped you decide which ones to actually go for?

That's what I spent this month building.

---

# My Contributions 💻

### PR #201 — Filtering, Pagination & Sorting
[🔗 View PR](https://github.com/OpenLake/Centre-for-Career-Planning-and-Services-Portal/pull/201)

This was my first PR, before the main work even started. While going through the codebase I noticed the job listing API just returned everything — no filters, no pages, nothing. So I raised it and fixed it. Added filtering by job type, company, batch, skill — all through a MongoDB aggregation pipeline. Also added pagination and sorting.

Turns out this became the base that everything else got built on top of.

### PR #205 — The Main Thing
[🔗 View PR](https://github.com/OpenLake/Centre-for-Career-Planning-and-Services-Portal/pull/205)

12 commits, 16 files, +579 / −1203 lines. This was the bulk of the work.

**Intelligent Feed & Ranking** — moved all the job feed logic into a dedicated service (`getIntelligentFeed()`), and built a scoring system that ranks jobs based on:
```
priorityScore = (eligibilityWeight × 5) + (skillMatchScore × 3) + (freshnessWeight × 2)
```
So eligible, relevant, and urgent jobs bubble up. Not just chronological anymore.

**Eligibility Layer** — jobs now check your batch and expiry before showing up. Ineligible ones are still there but clearly marked, which I think is actually more useful than hiding them.

**Alumni Insights** — this one was fun to build. Each job card now shows how many alumni from your college work at that company, with a popup showing their names, batch, and role. Gives you a sense of whether your college has a relationship with that company.

**Competition Awareness** — added live applicant counts on each card. Simple but useful — helps you figure out which roles are worth the effort.

**Skill Profile UI** — students can now add their skills from the profile page, and those skills feed directly into how jobs get ranked for them. Before this, skillMatchScore was always 0 for everyone because... there was no skill data. Oops.

**Saved Jobs Fix** — found that the saved jobs section wasn't showing any of the intelligence signals. It was pulling data through a completely different code path. Fixed it so both views use the same enrichment pipeline.

**Company Normalization (the bug I found myself)** — this one was interesting. Alumni counts were inconsistent — like sometimes a job would show 3 alumni, sometimes 5, with no changes in between. Took a while to trace it but it was because "Amazon" and "amazon" were being treated as different companies due to raw string matching. Built a fix using a proper `Company` collection with ObjectId references, and wrote a migration script to backfill all existing records. One-time run, sorted everything out.

---

# What I Gained 📈

- Actually got comfortable with MongoDB aggregation pipelines — the multi-stage stuff with `$lookup`, `$group` etc. Debugging pipelines that silently return nothing is its own skill honestly
- Understood why data modelling decisions matter — the whole company string vs ObjectId thing was a good lesson
- Got used to the open source workflow — raising issues, writing clear commit messages, responding to review comments, getting things merged
- Learnt that finding a bug nobody reported and fixing it properly feels really good 😄
- Writing code knowing someone will actually review it makes you write better code

---

# Experience ✌️

Came in as an informal mentee not really knowing what to expect. Honestly the experience was solid.

**Utkarsh bhaiyya** was super easy to reach — quick on Discord, clear PR feedback, always explained *why* something needed changing rather than just flagging it. Weekly check-ins were helpful without being stressful.

**Abhishek bhaiyya** kept the bigger picture in mind — more about what the project actually needs rather than just implementation details. Good to have both perspectives.

Week 1 was honestly a bit rough. Getting the local setup running, understanding how the existing code was connected, figuring out where to even start without breaking things — took a bit. But once it clicked, the rest moved much faster.

The mid-eval was more useful than I expected. Forced me to stop and actually think about what I'd built rather than just keep going. That kind of checkpoint is something most self-study doesn't have and I think it made me more intentional about the work.

Overall — good month. Would recommend to anyone thinking about applying next time.

---

*Siva Sai Varshith — Mathematics & Computing, 2nd Year, IIT Goa*
*FossOverflow 2025-26 | CCPS Portal*
