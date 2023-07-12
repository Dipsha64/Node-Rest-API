const express = require("express");
const router = express.Router();
const { getContact, createContact, getOneContact, updateContact,deleteContact } = require("../controllers/contactCotroller");
const validationToken =  require("../middleware/validatedTokenHandler");
//**** IF we want to add midleware in all the routes then add as router.use().*****/
router.use(validationToken);
router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").get(getOneContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;