# TypeScript with MongoDB - Simple REST API

## Requirements

 - NodeJS 14.1.0
 - nvm - Installation guide here: https://github.com/nvm-sh/nvm#installing-and-updating
 - yarn - Installation guide here: https://classic.yarnpkg.com/en/docs/install
 - MongoDB (local or cloud based) - Installation guide here - https://docs.mongodb.com/manual/installation/ 
 - TypeScript installed globally: `npm install -g typescript`

## How to guide

 - In order to get the correct version of node please run: `nvm use`
 - Install dependencies: `yarn install`
 - The project will start on port `9000` using the command `yarn start`
 - Alternative method is to copy: `.env.example` to `.env` and change the `PORT=` to whatever works best for you
 - To access the API go to: `http://localhost:9000` or `http://localhost:[custom-port-from-.env-file]`


## Ussage and known issues

 - The app has no validation at this point - todo
 - DOB is a `string` and is not validating against any correct Date format
 - Use Postman in order to get the propper data, routes are defined below
 - method: `GET` - path: `/users` - will return full list of users
 - method: `GET` - path: `/users/ID` - `ID` is the user ID will return one user
 - method: `POST` - path: `/users` - Body should contain: `name, email, dob` - will  add a new user
 - method: `DELETE` - path: `/users/ID` - `ID` is the user ID will delete one user
 - method: `PUT` - path: `/users/ID` - `ID` is the user ID will update the user info - requires the same fields as `POST`
