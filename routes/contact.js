const express = require("express");
const router = express.Router();

// @route      GET api/contacts
// @desc       Get all users contacts
// @access     Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route      GET api/auth
// @desc       Add new contact
// @access     Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route      GET api/contact/:id
// @desc       Update contact
// @access     Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route      DELETE api/contact/:id
// @desc       Update contact
// @access     Private
router.delete("/:id", (req, res) => {
  res.send("Update contact");
});

module.exports = router;
