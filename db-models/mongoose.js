let mongoose = require('mongoose');


mongoose.Promise = global.Promise;

//connecting to database and fulfilling the promis  
mongoose.connect('mongodb://localhost:27017/website', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to Database');
    });