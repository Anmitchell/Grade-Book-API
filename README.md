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
#### Version Control:
- git - v2.40.0
#### Runtime Environment: 
- node.js - v19.8.1 
#### Automatic Node app restart:
- nodemon - v2.0.22
#### Testing
- supertest - v6.3.3
- jest - v29.5.0
- mongodb-memory-server - v8.13.0
- postman - v10.15.4
#### Package Mangager:
- npm - v9.5.1
#### Web Frameworks:
- express.js - v4.18.2
#### Object Database Modeling
- mongoose - v7.3.1
#### Database:
- mongoDB - Database
#### User Authentication
- Jsonwebtoken - v9.0.0
#### Password Encryption
- bcrypt - v5.1.0
#### Information Security:
- dotenv - v16.3.1
#### Middleware:
- morgan - 1.10.0
#### Load Testing Platform
- artillery - v1.7.9

<!-- What is considered a feature? -->
## Features
List the ready features here:
- Admin creates, read, updates, and deletes other users and courses.
- Teachers can select and view courses and drop student from course
- Students can enroll, view, and drop course


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

Once initial setup is complete, open project:
- Add your connection string to .env file
- Add Port
- ADD secret for password encryption
```
MONGO_URI=MongoDB_driver_connection_string_here
PORT=port_number_here
SECRET_KEY=secret_here
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

### How to make an api request making postman
- what port
- what url
- How to run the app without dev mode?

## Project Status
<!-- Project is: _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why. -->
#### Project is: _in progress
Trello Board link (https://trello.com/invite/b/GZ7lThKP/ATTI766c49cf2d11fa16636bc80dd03d10019DC0117F/grade-book-api)

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
- Make api more efficient


## Acknowledgements
Give credit here.
- Many thanks to general assembly staff for input and guidance.