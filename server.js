const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const User = require('./models/user');
const Order = require('./models/order');
const Subscription = require('./models/subscription');
const Admin = require('./models/admin');
const withAuth = require('./middleware');
const app = express();
require('dotenv').config()

const secret = process.env.SECRET;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
});
app.get('/ping', (req, res) => {
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

//Login
app.get('/checkToken', withAuth, (req, res) => {
    res.sendStatus(200);
});
app.post('/api/register', (req, res) => {
    const {username, password} = req.body;
    const newAdmin = new Admin({username, password});
    Admin.findOne({username}, (err, admin) => {
        if(err) {
            console.log(err);
            res.status(500)
                .json({
                    error: 'Internal error please try again'
                });
        } else if(!admin){
            newAdmin.save((err) => {
                if (err) {
                    res.status(500)
                        .send("Error registering new admin, please try again.");
                } else {
                    res.status(200).send("Welcome to the club!");
                }
            });
        } else {
            res.status(400)
                .json({
                    error: 'Cannot have same username'
                });
        }
    })
});
app.post('/api/authenticate', (req, res) => {
    const {username, password} = req.body;
    Admin.findOne({username}, (err, admin) => {
        if(err) {
            console.log(err);
            res.status(500)
                .json({
                    error: 'Internal error please try again'
                });
        } else if (!admin) {
            res.status(401)
                .json({
                    error: 'Incorrect username or password'
                });
        } else {
            admin.isCorrectPassword(password, (err, same) => {
                if(err) {
                    res.status(500)
                        .json({
                            error: 'Internal error please try again'
                        });
                } else if (!same) {
                    res.status(401)
                        .json({
                            error: 'Incorrect username or password'
                        });
                } else {
                    //Issue token
                    const payload = {username};
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '0.75h'
                    });
                    res.cookie('token', token, {httpOnly:true})
                        .sendStatus(200);
                }
            })
        }
    })
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});
app.listen(process.env.PORT || 8080);
