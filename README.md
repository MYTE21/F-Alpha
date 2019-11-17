# F-Alpha
## Introduction
* Basic functionality is to **sign-in**, **sing-up**, **posting**, **rating post** like facebook. So the name is F-Alpha (Facebook Alpha 😛 )
* Tools or Editor
    * **WebStrom**
    * **Postman**
* Technology Used :
    * [**node.js**](https://nodejs.org/en/)
    * [**jwt**](https://jwt.io/)
* **npm start** - To run 
## Installation
* **npm init** 
* **npm install express**
* **npm install --save-dev nodemon**

## Step - 1
1. **npm init** - Enter through all (package.json)
2. **npm install express** - Handle Routes (package-lock.json)
3. **npm install --save-dev nodemon** - Restart server
4. Initial **Port** - 3000 
## Step - 2
1. Create **index.js** file
    * Imports **Routes**
    * Imports **Routes Middle-wares**
2. Create **routes** folder
    * Create **auth.js** file
        * Imports **register** routes
3. Delete everything inside **scripts** of **package.json** and add **"start":"nodemon index.js"**
4. Now **npm start** - Can be used to run server, **Postman** to test
## Step - 3
1. **npm install dotenv**
2. **npm install mongoose**
3. Connected project with **MongoDB** 
4. **.env** file created - DB_CONNECT