// ============External Imports===========
const express = require("express");
const router = express.Router();

//=========== internal imports=====

const { getinbox } = require("../controllers/inbox/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// ==========Routes=========

router.get("/", decorateHtmlResponse('Inbox'), getinbox);

module.exports = router;
