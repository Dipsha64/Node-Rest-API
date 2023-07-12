const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dbConnection.js");
const dotenv = require("dotenv").config();
const app = express();

connectDb();

// It is provides a parsers. use as a middleware to pass data. Its receive data from client and pass to the server side.
app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoute.js"));
app.use("/api/users",require("./routes/userRoute.js"));

app.use(errorHandler);

const port = process.env.PORT || 5001;
app.listen(port,()=>{
    console.log("server is running...",port);
})