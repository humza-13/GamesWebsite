var express = require('express');
var router = express.Router();
var { mongoose } = require('./../db-models/mongoose');
var { user } = require('./../db-models/user');

router.get('/', (req, res) => {
    res.render('login.hbs', { css: ['signup.css'] });

});

router.post('/', (req, res) => {


    console.log(req.body.email),
        console.log(req.body.password1)
        //validation
    req.check('password', 'Minimum length of user should be 8').isLength({ min: 8 });

    // gettting any errors
    var errors = req.validationErrors();

    if (errors) res.redirect('/login?password_format=invalid&user_format=invalid');

    else {
        user.findOne({
                email: req.body.email,
                password1: req.body.password1
            })
            .then((user) => {
                if (!user) res.redirect('login?login_failed_username_or_password_incorrect');

                else {
                    req.session.email = user.email;

                    req.session.username = user.username;


                    res.redirect('home');
                }
            });
    }



});
module.exports = router;