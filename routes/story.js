var express = require('express');
var router = express.Router();
var { mongoose } = require('./../db-models/mongoose');
var { user } = require('./../db-models/user');


router.get("/", (req, res) => {


    res.render('story.html')
});
module.exports = router;