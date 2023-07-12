const Contact = require("../models/contactModel");
//@des Get all Contact
//@route GET /api/contacts
//@access private 
//**** Using middle ware we can get all contacts if the user is logged in ****/
const getContact = async (req,res) =>{
    const contacts = await Contact.find({user_id : req.user.id});
    res.json(contacts);
    // res.json({"message" : "Get All Contact Details"});
}
//@access private 
const createContact = async (req,res) =>{
    console.log("Create LOG" , req.body);
    const { name,email , phone} = req.body;
    if(!name || !email){
        res.status(400);
        throw new Error("All fields are requierd");
    }
    const contact = await Contact.create({
        /*** In req.user that user property is added from the middle ware which is in ValidationTOkenhandler.js file in `req.user = decoded.user;`***/
        name,email,phone,user_id : req.user.id
    })
        res.json(contact);
        // res.json({"message" : "Create Contact"})

}
//@access private 
const getOneContact = async (req,res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }
    res.json(contact);
    // res.json({message : `Get Contact for ${req.params.id}`})
}
//@access private 
const updateContact = async (req,res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }
    /***If we want to update a contact so for that need to match userID with login user id ****/
    if(contact.user_id.toSting() !== req.user.id){
        res.status(400);
        throw new Error("User haven't permission to update other users contact details.");
    }
    const updateContact = await Contact.findByIdAndUpdate(req.params.id , req.body,{
        new : true
    })
    res.json(updateContact)
    // res.json({ message : `Update Contact for ${req.params.id}`})
}
//@access private
const deleteContact = async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not found");
    }
    /***If we want to update a contact so for that need to match userID with login user id ****/
    if(contact.user_id.toSting() !== req.user.id){
        res.status(400);
        throw new Error("User haven't permission to delete other users contact details.");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.json(contact);
    // res.json({ message : `delete Contact for ${req.params.id}`})
}
module.exports = { getContact, createContact, getOneContact, updateContact , deleteContact };