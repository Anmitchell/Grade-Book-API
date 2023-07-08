# Grade Book API
> A grade book api designed with admin, teachers and student users.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)


## General Information
Rest API designed for users in a school with one of three designated roles:
- Admin manages other user accounts and school courses.
- Teacher select courses they will teach. As well as, distribute grades for students in the course and their given assignments.
- Students select courses they will enroll in and can view a transcript and grades given to assignments.

Grade management:
- Grades are calculated as percentages and produces a letter grade. 

<!-- Categorize by frameworks, environments, standards, etc -->
## Technologies Used
- git
- node.js - version 19.8.1 
- nodemon - version 
- express.js - version
- mongoose - version
- mongoDB - version
- JWTwebtoken - version
- bcrypt - version
- morgan - version
- jest - version
- supertest - version
- artillery - version
- javascript - version ?
- postman - version ?

<!-- What is considered a feature? -->
## Features
List the ready features here:
- Admin creates, read, updates, and deletes other users and courses.
- Awesome feature 2
- Awesome feature 3


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->
<!--What would be considered useful screenshots?-->
<!-- Include wireframe img here -->


## Setup
<!-- What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located? -->
<!--What should I include for project requirements/ dependencies-->
Open Terminal and run the following commands:
```
git clone `https://example-here`
npm install
touch .env
```
Install nodemon globally to automatically restart your node application when it detects any changes. This means that you do not have to stop and restart your applications in order for your changes to take effect.
```
sudo npm install -g nodemon
```
<!-- include image of files that should have populated with project here, and maybe img of package.json?-->

Once initial setup is complete, open project:
- Add your connection string to .env file
- Add Port
- ADD secret for password encryption
```
MONGO_URI=MongoDB driver connection string here"
PORT=port number here
SECRET_KEY=secret here
```

## Usage
<!-- How does one go about using it?
Provide various use cases and code examples here. -->
<!--Are -->
Run server to test API routes:
```
npm run dev
```
For testing Routes in API run test:
```
npm run test
```
For load testing server:
```
npm run load
```

## Project Status
<!-- Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why. -->
Project is: _in progress

## Room for Improvement

Room for improvement:
- Restructure models
- Provide a more realistic user experience

To do:
- Create a separate model for subjects and assignments
- Create a grade point system that takes percentages and produces letter grades for assignments and course grade
- Teacher can assign students grade for assignments and course
- Create a student transcript
- Provide testing for all routes


## Acknowledgements
Give credit here.
- Many thanks to general assembly staff for input and guidance.