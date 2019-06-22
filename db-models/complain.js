let mongoose = require('mongoose');
let complain = mongoose.model('complain', {

    name: {

        type: String,
        required: true

    },

    email: {
        type: String,

    },

    phone: {
        type: String,
        required: true
    },

    comment: {
        type: String
    },

    issue: {
        type: String
    },

});

module.exports = { complain };