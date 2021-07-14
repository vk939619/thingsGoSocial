require('dotenv').config({ path: __dirname + '/.env' })
var express = require('express')
const app = express();
var bodyParser = require('body-parser')
var path = require('path');
var mongoose = require('mongoose')
var session = require('express-session')
var MongoDBStore = require("connect-mongodb-session")(session);


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


app.use(express.static('public'))
    // app.use('/css', express.static(__dirname + 'public/css'))
    // app.use('/images', express.static(__dirname + 'public/images'))
    // app.use('/js', express.static(__dirname + 'public/js'))


//**************************************************
//Database
//**************************************************
let databaseUrl = `mongodb://localhost:27017/${process.env.DB_HOST}`;
var mongoose = require('mongoose');
var configDB = require('./config/mongoDB.js')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(configDB.url)


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

var store = new MongoDBStore({
    uri: databaseUrl,
    collection: "mySessions",
});



let secrete = process.env.SECRETE;

app.use(
    session({
        secret: secrete,
        store: store,
        saveUninitialized: false,
        resave: false,
        unset: "destroy",
    })
);




var controller = require('./config/studentRegister')


app.get('/', (req, res) => {
    res.render('register')
})
app.post('/register', controller.register)



app.listen(8000, () => {
    console.log("running on 8000")
})