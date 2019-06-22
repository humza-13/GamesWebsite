var express = require('express');
var router = express.Router();
var { mongoose } = require('./../db-models/mongoose');
var { user } = require('./../db-models/user');


router.get("/", (req, res) => {


    res.render('Games.hbs', { css: ['styles.css'] }, {
        myUsername: req.session.username,
        myEmail: req.session.email,

        getUsername: function() {
            return req.myUsername;
        }
    });





});
module.exports = router;