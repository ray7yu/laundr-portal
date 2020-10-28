const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const User = require('./routes/usersRoute');
const Order = require('./routes/ordersRoute');
const Subscription = require('./routes/subscriptionsRoute');
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
//const connection = mongoose.connection;
//connection.once("open", function() {
//    console.log("Connection with MongoDB was successful");
//});

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
