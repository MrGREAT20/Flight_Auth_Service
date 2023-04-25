const express = require('express');
const router = express.Router();
const v1apiroutes = require('./v1/index')


router.use('/v1', v1apiroutes);

module.exports = router;