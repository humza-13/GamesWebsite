var express = require('express');
var router = express.Router();
var { mongoose } = require('./../db-models/mongoose');
var { user } = require('./../db-models/user');


router.get("/", (req, res) => {
    if (req.session.email) {
        res.render('games.html')
    } else {
        res.redirect('/login?session=expired');
    }
});
module.exports = router;