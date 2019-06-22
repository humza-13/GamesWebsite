let mongoose = require('mongoose');
let user = mongoose.model('user', {

    username: {

        type: String,
        required: true

    },
    password1: {
        type: String,
        required: true,
        min: [8, 'Password too short'],
        max: [20, 'Password too long']


    },
    email: {
        type: String,
        required: true,
        unique: true
    },

});

module.exports = { user };