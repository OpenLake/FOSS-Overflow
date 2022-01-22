---
title: My Experience at FOSS Overflow
author: Chaitanya Bisht
date: '2022-01-21'
---
# Watch Party

WatchParty is a chrome extension that aims to connect friends and families who live miles apart by watching Movies or TV shows together. The host shares a link to the intended viewers and when they open the link they all see the same content at the same time. 

# Tech Stack
- A Node.js server hosted on Heroku (https://watchpartyserver.herokuapp.com/)
- A chrome extension on the frontend which connects to the server
- Socket.IO library is used for making all the socket connections between client and the server
- Bootstrap CSS for all the UI elements

# How it works

A Node.js server handles all the web socket requests and manages the users in a room, basically it acts as a medium of communication between two clients. All users in the room are handled on the server side and the chat messages are relayed to all the users in the room, the server does not store any chat messages.

The chrome extension forms a socket connection with the server and that socket connection remains alive even if the extension popup is closed.

The first user to join the room is automatically made the host. The host is the one whose video timestamps are synchronized to all other users. When other users join the room after opening the video link, the video is automatically synced to the host, and as the host seeks the video the changes are updated for other users in the room.

There is also a chat feature in the extension which allows users in the room to interact with each other.

### How the video is synced

There are mainly two scripts being talked about here: The content script is responsible for interacting with the DOM elements on the current tab. The background script on the other hand is responsible for maintaining background tasks such as establishing the socket connection and handling chat messages.

The content script has event listners for button clicks for the play/pause button and the progress bar and as soon as the host seeks video the event listeners notify the background script that a change has been made.

Then the background script calls a function to fetch the video timestamps and the play/pause state, and then this timestamp information is then sent to the server via the socket connection

Then the server sends this information to all the users in the room via socket connections and the extension running for other users changes the timestamp of the video accordingly.

# Screenshots

### When you join a room
![Join](https://i.imgur.com/JhaNQKH.png)
### Chat feature
![Chat](https://i.imgur.com/OmdJWgT.png)
# Demonstration

<iframe width="560" height="315" src="https://www.youtube.com/embed/NTYMR429MjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# My experience on FossOverflow
This is my first comprehensive project on developing a Chrome Extension. Throughout the development of the project I got to learn a lot new things through trial and error. After hours of searching solutions on the internet, asking my mentors for help, I can confidently say that I have learned a lot and still got a lot to learn.

### Some of the notable things I learned
- How web sockets work and how to implement them
- How chrome extension runs in background and what tasks it is supposed to do in background
- How chrome extension injects some content scripts on to the webpages you view in order to perform certain tasks, including modifying the contents you see on the web page.
- How these all these scripts communicate with each other to perform different tasks.

Lastly I would like to thank my mentors [@rishipurwar1](https://github.com/rishipurwar1) and [@KShivendu](https://github.com/KShivendu) for guiding me and helping me out in critical situations where I got stuck with a bug I could not fix myself. Having such talented and knowledgeable mentors have inspired me to learn even more things and contribute to large, open source projects and prepare myself for events such as Google Summer of Code.

