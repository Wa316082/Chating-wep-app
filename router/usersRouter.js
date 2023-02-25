// ============External Imports===========
const express = require("express");
const router = express.Router();

//=========== internal imports=====

const { getusers } = require("../controllers/users/usersControllers");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// ==========Routes=========

router.get("/", decorateHtmlResponse("Users"), getusers);

module.exports = router;
