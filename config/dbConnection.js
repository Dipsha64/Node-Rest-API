const mongoose = require("mongoose");

const connectDb = async() => {
    try{
        /**** Used to establish the connetion with mongoDB using mongoose ****/
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DATA BASE : ",connect.connection.host,connect.connection.name);
    }
    catch(err){
        console.log(err);
        /// This is used to exist file execution if error acures.
        process.exit(1);
    }
}

module.exports = connectDb;