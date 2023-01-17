---
title: OMRChecker
author: Rudra Pratap Singh
date: '2023-01-17'
---

## Project GitHub Link
- GitHub: https:https://github.com/Udayraj123/OMRChecker
## About Me
I am [Rudra Pratap S C](https://www.linkedin.com/in/rudra-pratap-singh-chauhan-b86029234/), a 2nd Year BTech CSE student at IET Lucknow, Uttar Pradesh. 

## Idea behind the Project
The idea behind the project is to evaluate OMR sheets accurately and fast.My job was to fullfill a request made by a user to classify the images using QR codes on the sheets.

## Contributions
1. **Create a plugin called MedianBlur**
	Previously the project was using Linear blurring methds like gaussian blur but algorithmic blurring methods shows more promising results when it comes to sharpness , so I used the median blur to rectify the image sharpness.
2. **Updated Schema for JSON** 
	Updated schema.json file , now it will show validation error not code error everytime wrong values are passed in the template.json.
3. **Created plugin ReadBarcode**
	- The plug in reads the QR/Barcodes in an image and return the data.
	- The plugin also shows error when either no or multiple QRs are passed.
4. **Created class TemplateByBarcode**
	- The class first colllect the data from ReadBarcode plugin and update the template accordingly.
	- Then it creates folders where outputs are meant to be saved.
	- Finally it checks if the user wants input sorting or not and if yes then it creates folders for sorted inputs.
## How Fossoverflow helped in my overall development
![foss_overflow](https://fossoverflow.dev/logo.png)
After FOSS Overflow, I have gained newfound confidence in my Image processing skills.
The mentor of my project was genuine guy who helped me walk through any difficulties I faced during this period.
there were many takeaways from Foss Overflow like gaining confidence, writing clean code , understanding github better but the most of all that will stay with me is to understand the code someone else wrote and work on it as of my own.
