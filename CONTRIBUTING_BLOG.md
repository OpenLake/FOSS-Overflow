# Contributing Blog Posts to FOSS Overflow

This guide explains how to contribute blog posts about your FOSS Overflow experience and project work to the OpenLake website.

## Blog Structure and Location

All blog posts are stored as Markdown (`.md`) files in the `content/blog/` directory. Your blog post should follow the guidelines below to maintain consistency across all contributions.

## File Naming Convention

Based on our existing contributions, please name your blog file using the following format:
- `ProjectName_YourName.md` (e.g., `SpeechAnalyser_AdityaK.md`)

## Blog Content Requirements

Your blog post should include:

### 1. Front Matter

At the top of your Markdown file, include YAML front matter with metadata:

```yaml
---
title: "Your Project Title"
author: "Your Full Name"
date: 'YYYY-MM-DD'
---
```

Example:
```yaml
---
title: Smart Insti App
author: Arin Nigam
date: '2024-03-04'
---
```

### 2. Content Structure

Your blog should cover your project and experience. Feel free to use the following sections as a guide, but you can be creative with your structure:

#### Project Overview/Idea
- Explain what your project is about and its purpose
- Use emojis to make headings more engaging (e.g., `# Project Idea 💡`)

#### Your Contributions
- Detail the specific features or components you worked on
- Technical implementations and challenges you faced

#### What You Gained/Learned
- Skills you developed
- Technologies you learned
- Personal growth

#### Experience/Reflections
- Your overall experience with FOSS Overflow
- Working with mentors and team members
- Challenges and how you overcame them

### 3. Media and Links

You are encouraged to include:
- Images demonstrating your project
- Video links (YouTube embeds are supported)
- GIFs to make your blog more engaging

Example of embedding a YouTube video:
```markdown
[![Video Title](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)
```

Example of including a GIF:
```markdown
![Description](https://media.giphy.com/media/gif_id/giphy.gif)
```

### 4. Formatting

- Use Markdown headings (`#`, `##`, `###`) to organize your content
- Use **bold** and *italic* text for emphasis
- Include emojis to make your blog more engaging
- Use line breaks (`<br>`) for spacing when needed

## Example Blog Structure

Here's a simplified example of how your blog post might look:

```markdown
---
title: Your Project Name
author: Your Name
date: '2024-03-15'
---

# Project Idea 💡

[Brief description of what your project is about and its purpose]

# My Contributions 💻

- [Feature 1 you implemented]
- [Feature 2 you implemented]
- [Technical challenges you overcame]

[Optional: Screenshot or video of your project]

# What I gained 📈

- [Technical skills you developed]
- [Soft skills you improved]
- [New technologies you learned]

# Experience ✌️

[Your overall experience with FOSS Overflow, mentors, and teammates]
```

## How to Submit Your Blog Post

1. Fork the OpenLake FOSS Overflow repository
2. Create your blog file in the `content/blog/` directory
3. If needed, add images to a new folder in `public/blog/your-project-name/`
4. Submit a Pull Request with your changes
5. In the PR description, briefly explain what your blog post is about

## Review Process

After submitting your PR:
1. Mentors will review your blog post
2. You may receive feedback or suggestions for changes
3. Once approved, your blog will be merged and published on the FOSS Overflow website

## Need Help?

If you have questions about contributing a blog post, please reach out to your project mentor or the FOSS Overflow organizers through the official communication channels.
