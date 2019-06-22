var express = require('express');
var router = express.Router();
var { mongoose } = require('./../db-models/mongoose');
var { user } = require('./../db-models/user');
var { complain } = require('./../db-models/complain');

router.get("/", (req, res) => {
    if (req.session.email) {

        res.render('contact.html')
    } else {
        res.redirect('/login?session=expired');
    }

});
router.post('/', (req, res) => {


    var newcomplain = new complain({
        name: req.body.name,
        email: req.session.email,
        phone: req.body.phone,
        comment: req.body.comment,
        issue: req.body.issue,

    });

    //saving in database 
    newcomplain.save()

    res.redirect('home');

});


module.exports = router;