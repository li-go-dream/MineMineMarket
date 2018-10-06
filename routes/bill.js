var express = require('express');
var router = express.Router();
var bill=require('../services/bill');


router.get('/add',bill.publish);
router.get('/bill_manager',bill.find);
router.get('/dele',bill.deleted);
router.get('/update',bill.updated);
router.get('/look',bill.look);

module.exports = router;