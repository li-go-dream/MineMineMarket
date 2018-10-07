var express = require('express');
var router = express.Router();
var supplier=require('../services/supplier');


router.get('/add',supplier.publish);
router.get('/supplier_manager',supplier.find);
router.get('/dele',supplier.deleted);
router.get('/update',supplier.updated);
router.get('/look',supplier.look);
//router.get('/page',supplier.);

module.exports = router;