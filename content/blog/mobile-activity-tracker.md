---
title : Activity Tracker - Mobile App
author : Satvik Vemuganti
date : '2022-01-22'
---

## Introduction

The purpose of this application is to collect information about the app being used at any point in time for the user to be able to keep track of their digital lifestyle. 
The information collected can have various applications ranging from making recommendations to the user for which apps to use or even what activities to perform with
respective applications based on the usage history and time-modeled predictions.

## Features brought to life

* This flutter app runs in the background and logs the application being used in every 1-second interval.
* The location of the phone is collected with the help of generic GPS and pushed to the server, with the help of the geolocator plugin.
* Created an endpoint in the NodeJS server API to push the collected data to.

## My Experience

Overall, I can say, the program was an enriching experience. I can definitely say that I am better prepared to participate in GSoC than I was a month ago. 
Interactions with my mentor were the most important thing, according to me. He was very patient in explaining how things work, which helped us pinpoint the 
problem and solve them. My biggest takeaway is that I was exposed to the process in which my mentor works, while on a project. An instance of this was when
I was getting stuck in reaching my server from the emulator's instance of the app. It turns out that the IP address of my laptop on the WiFi network was 
changing every time I reconnected to the WiFi due to DHCP and hence the address to post to had to be changed in the app as well. My mentor took the time to 
explain how the system works, which helped me realize on my own where the mistake in my app was.


## Technicals I Learnt

#### The app_usage plugin

In this project, the app_usage flutter plugin is used to obtain app usage data. However, this plugin works only on Android devices. For iOS, this data has to be extracted some other way and using channels (flutter bridging), the data can be bridged to the flutter app.
To enable this, we had to build our plugin centered around the app_usage plugin, to be able to develop for iOS in the future.
This part was possible only with my mentor, Kumar Shivendu, and I got to learn how to build my own plugin for my apps.

#### The Timer class

In my project, I used the timer class to implement the functionality of collecting the required data at specified intervals of time and posting it to the server.
However, the possibilities are beyond this and limitless. It can work as a stopwatch for games or be used in building visualizations that are pleasing to 
the eyes. It also runs in the background, so it can also be used to call a certain API at regular intervals, just to give an example, to update a parent 
about their child's safety. 

#### The Geolocator Pugin

This is a Flutter plugin that provides easy access to platform-specific location services. It can be used to get the last known location, get the current 
location of the device get continuous location updates, check if location services are enabled on the device, calculate the distance (in meters) between two 
geocoordinates and calculate the bearing between two geocoordinates. 

## Vision

This is the first Open Source Software I have contributed to and proudly used. I am looking for the following features to be implemented :
* Build a frontend for mobile that calls the API to retrieve the usage stats and present them in a meaningful and visually pleasing manner.
* Attempt to make recommendations on tasks to be performed based on the data collected
* Implement a feature where parents can monitor their child's activity from their dashboard.

All that being said, I would like to thank the organizing team at OpenLake for conducting such an important program.
