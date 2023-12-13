---
title: My Experience at FOSS Overflow
author: Ashutosh Kumar Choudhary
date: '2023-01-18'
---
## What is FOSS Overflow?

[**FOSS Overflow**](https://fossoverflow.dev/) is a month-long event celebrating open source culture and is organized by Google Developer Student Clubs and OpenLake at **IIT Bhilai**. The program is designed to prepare students for global open source internships like GSoC, LFX, and Outreachy. Foss Overflow gave me a great opportunity to learn something new while working on a project. It had a plethora of fascinating projects which were unique in their own way. But the project which attracted my attention was the **WatchParty**, as its tech stack was finely aligned to mine and it gave me a opportunity to learn more about the chrome extention development.

I was fortunate enough to get selected as a mentee in FOSS Overflow 2022 for the [**WatchParty**](https://github.com/OpenLake/WatchParty) chrome Extention project under the mentorship of [@chaitanyabisht](https://github.com/chaitanyabisht).

# Watch-Party ![LOGO](https://github.com/Ash-KODES/Project-Data/blob/main/FOSS%20Overflow%202022/Resized%20Logo.jpg?raw=true)

WatchParty is a chrome extension that aims to connect friends and families who live miles apart by watching Movies or TV shows together.  

# 👨‍💻 Working

### Overview of Extention
A Node.js server handles all the web socket requests and manages the users in a room, basically it acts as a medium of communication between two clients. All users in the room are handled on the server side and the chat messages are relayed to all the users in the room, the server does not store any chat messages.

The chrome extension forms a socket connection with the server and that socket connection remains alive even if the extension popup is closed.

The first user to join the room is automatically made the host and Every Room have a host indicator which for the current host in the room.The host is the one whose video timestamps are synchronized to all other users. When other users join the room after opening the video link, the video is automatically synced to the host, and as the host seeks the video the changes are updated for other users in the room.

There is also a chat feature in the extension which allows users in the room to interact with each other.

### Video Syncronization

There are mainly two scripts being talked about here: The content script is responsible for interacting with the DOM elements on the current tab. The background script on the other hand is responsible for maintaining background tasks such as establishing the socket connection and handling chat messages.

The content script is injected as soon as the matching url are hit and it has event listners for button clicks for the play/pause button and the progress bar and as soon as the host seeks video the event listeners notify the background script that a change has been made.

Then the background script calls a function to fetch the video timestamps and the play/pause state, and then this timestamp information is then sent to the server via the socket connection

Then the server sends this information to all the users in the room via socket connections and the extension running for other users changes the timestamp of the video accordingly.

# 🛠️ Compatibilty

It is compatible with Youtube and OTT platform like Disney+Hotstar.

## 📝 My Contributions

- Fixing the UI bugs and enhancing the Popup's UI.
- Making it compatible with OTT platforms like Disney+Hotstar.
- Worked for migrating the manifest version to V3 from V2 which would be deprecated next year.
# Screenshots

### When you join a room
![Join](https://github.com/Ash-KODES/Project-Data/blob/main/FOSS%20Overflow%202022/Popup%20User%20Interface.png?raw=true)
### Chat feature
![Chat](https://github.com/Ash-KODES/Project-Data/blob/main/FOSS%20Overflow%202022/Chating.png?raw=true)


#  ✨ My experience with FOSS Overflow
This was my first hands experience working on a Chrome Extension and Socket.io framework. Throughout the development of the project, I got to learn a lot of new things through trial and error. After hours of searching for solutions on the internet and StackOverflow, and syncing up with my mentors for help, I can confidently say that I have learned a lot and still got a lot to learn.
### My Learnings
- Learned anout web sockets and Socket.io framework.
- Learned about various scripts involved in chrome extention development and their role.
- Got to learn about chrome extention API's and Socket.io API's and How actually they fetches data from server to render it on UI. 
- Brushed up my Javascipt and DOM manupulation skills.

Lastly, I would like to thank my mentors [@chaitanyabisht](https://github.com/chaitanyabisht). for guiding me and helping me out in critical situations where I got stuck with a bug I could not fix myself. Working with a such talented and knowledgeable mentor has inspired me to learn even more things and contribute to large, open-source projects and prepare myself for events such as Google Summer of Code and LFX Programs.
