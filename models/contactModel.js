//Used as a Schema for contact
const mongoose = require("mongoose");

/**** That schema have all the values that we want in our contact resources. ****/
const contactSchema = mongoose.Schema({
    user_id : {
        // This is used in mondoDb Database in contact table as a id in object.
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    name : {
        type : String,
        required : [true,"Please add the contact name"],
    },
    email : {
        type : String,
        required : [true,"Please add the contact email"], 
    },
    phone : {
        type : String,
        required : [true,"Please add the contact phone number"], 
    }
},
{
    timestamps : true
})

module.exports = mongoose.model("Contact",contactSchema);