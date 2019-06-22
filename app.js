//exporting required modules
const express = require('express');
const app = express();

const hbs = require('hbs');
const body_parser = require('body-parser');
const session = require('express-session');
const validator = require('express-validator');
var engines = require('consolidate');
var path = require('path');


var login = require('./routes/login');
var signup = require('./routes/signup');
var home = require('./routes/home');
var contact = require('./routes/contact');
var games = require('./routes/games');
var story = require('./routes/story');
var logout = require('./routes/logout')


//setting
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');

app.engine('html', engines.swig);
app.set('view engine', 'html');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
// middlewares
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});
app.use(body_parser.urlencoded({ extended: false }));
app.use(validator());
app.use(session({ secret: 'max', saveUninitialized: false, resave: false }));


app.use('/login', login);
app.use('/signup', signup);
app.use('/home', home);
app.use('/story', story);
app.use('/contact', contact);
app.use('/games', games);
app.use('/logout', logout);


//port 
//setting the available port if not then set it to 3000
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});