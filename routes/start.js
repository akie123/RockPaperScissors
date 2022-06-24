const express = require('express');
const router = express.Router();
const results=require('../controllers/result');

router.get('/start',results);

module.exports=router;