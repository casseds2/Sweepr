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
- **API_TOKEN = '{API_TOKEN}'**

You can use NODE_ENV production when looking to move the application to production.

## World Cup API
Honourable mention my hero Daniel Freitag over at [api.football-data](https://api.football-data.org) for the kick ass API!

## API Usage
### World Cup
- Competition: curl http://api.football-data.org/v1/competitions/467 
- Fixtures: curl http://api.football-data.org/v1/competitions/467/fixtures
- Teams: curl http://api.football-data.org/v1/competitions/467/teams
- Team: curl http://api.football-data.org/v1/teams/{team_id}
- Team Fixtures: http://api.football-data.org/v1/teams/{team_id}/fixtures
- Team Players: http://api.football-data.org/v1/teams/{team_id}/players

## Running Project
- cd /project
- mkdir data
- mongod --dbpath ./data
- nodemon
- webpack -w

# Contributors
- Stephen Cassedy (https://github.com/casseds2)
- Aaron Daly (https://github.com/aaron-daly)

