var express = require('express');
var router = express.Router();
const emailService = require('pnp-email-service');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(process.env.TRANSPORT);
  return emailService.createRouter();
});

module.exports = router;
