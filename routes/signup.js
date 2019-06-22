var express = require('express');
var router = express.Router();
var { mongoose } = require('./../db-models/mongoose');
var { user } = require('./../db-models/user');


router.get('/', (req, res) => {
    res.render('signup.hbs', { css: ['signup.css'] });
});

router.post('/', (req, res) => {

    // validation of form
    req.check('username', 'Minimum name length should be 4').isLength({ min: 4 });
    req.check('password1', 'Minimum password length should be 8').isLength({ min: 8 });

    //if email is already taken then dont register the new user
    req.check('email')
        .isEmail().withMessage('Please enter a valid email address')
        .trim()
        .normalizeEmail()
        .custom(value => {
            return finduserByEmail(value).then(user => {
                //if user email already exists throw an error
            })
        });


    var errors = req.validationErrors();

    if (errors) res.redirect('/login?password_format=invalid&user_format=invalid');
    //creat new user 
    else {
        var newuser = new user({
            username: req.body.username,
            email: req.body.email,
            password1: req.body.password1

        });

        //saving in database 
        newuser.save()
            .then((doc) => {
                user.findOne({
                        email: req.body.email,
                        password1: req.body.password1
                    })
                    .then((user) => {
                        req.session.email = user.email,
                            req.session.username = user.username,


                            res.redirect('home');
                    });


            }, (e) => {
                console.log('Unable to signup');
                res.redirect('/login?password_format=invalid&user_format=invalid');
            });
    }
});


function finduserByEmail(email) {
    if (email) {
        return new Promise((resolve, reject) => {
            user.findOne({ email: email })
                .exec((err, doc) => {
                    if (err) return reject(err)
                    if (doc) return reject(new Error('This email already exists. Please enter another email.'))
                    else return resolve(email)
                });
        });
    }
}
module.exports = router;