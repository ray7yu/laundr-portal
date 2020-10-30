//rays code
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const User = require('./routes/usersRoute.js');
const Order = require('./routes/ordersRoute.js');
const Subscription = require('./routes/subscriptionsRoute.js');
const app = express();
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use('/user', User);
app.use('/order', Order);
app.use('/subscription', Subscription);

const connection = mongoose.connection;
connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
});

app.get('/ping', function(req, res) {
    console.log("pong");
    return res.send('pong');
});
//POST routes
app.post('/user', (req, res) => {
    console.log("TBD");
});
app.post('/order', (req, res) => {
    console.log("TBD");
});
app.post('/subscription', (req, res) => {
    console.log("TBD");
});
//GET routes
app.get('/user', (req, res) => {
    console.log("TBD");
});
app.get('/order', (req, res) => {
    console.log("TBD");
});
app.get('/subscription', (req, res) => {
    console.log("TBD");
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});
app.listen(process.env.PORT || 8080);
/*
 const express = require('express');
 const cors = require('cors');
 const mongoose = require('mongoose');

 require('dotenv').config({path: 'ENV_FILENAME'});

 const app = express();
 const port = process.env.PORT || 3000;

 app.use(cors());
 app.use(express.json());

 const uri = process.env.ATLAS_URI;
 mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

 const connection = mongoose.connection;
 connection.once("open", () => {
    console.log("MongoDB database connection established successfully:");
 })

 app.listen(port, () => {
     console.log(`server is running on port:' ${port}`);
 });
 */