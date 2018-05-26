# sweepr

# Instructions

## Pre-requisites
- sudo npm install -g webpack
- sudo npm install -g webpack-cli
- sudo npm install -g nodemon

## Making Project
- cd /project
- npm install

## Environment
- cd /project
- touch .env

Environment (.env file) should contain: 

- **dbURL='mongodb://{user}:{password}@ds131800.mlab.com:31800/{project_name}'**
- **secret='my-secret'**
- **NODE_ENV = 'dev'**

You can use NODE_ENV production when looking to move the application to production.

## Running Project
- cd /project
- mkdir data
- mongod --dbpath ./data
- nodemon
- webpack -w

