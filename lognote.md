`THUNDER CLIENT ===> Run APIS`

/*** COMMAND TO RUN PROJECT IS `npm run dev` ***/
/***INSTALL PACKAGES ***/
* npm init ===> to Create package.json file
* npm install express ===> to install express
* npm install nodemon  ===> to execute & run project automatically
* npm install dotenv  ===> to manage dynamic port number in .env file It is used to fetch data from env file to another file with help of Process module.
* npm i mongoose ====> to establish the connetion with mongoDB using mongoose


`Controller`  ====> it is going to controll all the logics for the req/res. this is connected to the database.
`app.use(express.json())` ====> It is provides a parsers. use as a middleware to pass data. Its receive data from client and pass to the server side.
`app.use(errorHandler)` ====> This is used to accept request & response then in betwwen tranform the JSON. This is custom middle ware. Its contains middleware folder.

While using `async` function, we need to use `try-catch` block. For hamdle errors & throw error in catch.

API IS CALLED AS `server.js`-> `ContactRoutes.js`-> `contactController`;

By using the access token user can access all the private routes.Its shows that user is authenticated or not.
* In API we can add access token with 2 types.
    1. Add access token in header -> Authorization. Follow image path of "HeaderToken.png".
    2. Also we can add token in Auth -> Bearer. Follw image path of "authBearerToken.png".

FOR Authentication need to import user & register users using API.
