// ============External Imports===========
const express = require('express');
const router = express.Router();


//=========== internal imports=====

const {getlogin} = require('../controllers/auth/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');


// ==========Routes=========

router.get('/',decorateHtmlResponse("Login"), getlogin);

module.exports = router;