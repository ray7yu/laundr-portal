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
//require('dotenv').config()

const secret = process.env.SECRET;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

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
//GET ALL routes
app.get('/user', async (req, res) => {
    await User.find({}, (err, data) => {
        if (err)
          return res.status(400).send({
            message: err.message || "An unknown error occurred",
          });
        res.json(data);
    });
});
app.get('/order', async (req, res) => {
    await Order.find({}, (err, data) => {
        if (err)
          return res.status(400).send({
            message: err.message || "An unknown error occurred",
          });
        res.json(data);
    });
});
app.get('/subscription', async (req, res) => {
    await Subscription.find({}, (err, data) => {
        if (err)
          return res.status(400).send({
            message: err.message || "An unknown error occurred",
          });
        res.json(data);
    });
});
//POST routes
app.post('/user', async (req, res) => {
    const user = req.body;
    if (!user) {
        return res.status(400).send({
        error: "User not found",
        });
    }
    await new User(user).save()
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(400).send(err);
        });
});
app.post('/order', async (req, res) => {
    const order = req.body;
    if (!order) {
        return res.status(400).send({
        error: "Order not found",
        });
    }
    await new Order(order).save()
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(400).send(err);
        });
});
app.post('/subscription', async (req, res) => {
    const subscription = req.body;
    if (!subscription) {
        return res.status(400).send({
        error: "Subscription not found",
        });
    }
    await new Subscription(subscription).save()
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(400).send(err);
        });
});
//DELETE routes
app.delete('/user', async (req, res) => {
    const username = req.body.username;
    await User.deleteOne({ username: username }, (err) => {
        if (err) {
          return res.status(400).send({
            error: err.message || "An unknown error occurred",
          });
        }
        res.send({
          message: username + " has been deleted successfully",
        });
    });
});
app.delete('/order', async (req, res) => {
    const orderNumber = req.body.orderNumber;
    await Order.deleteOne({ orderNumber: orderNumber }, (err) => {
        if (err) {
          return res.status(400).send({
            error: err.message || "An unknown error occurred",
          });
        }
        res.send({
          message: orderNumber + " has been deleted successfully",
        });
    });
});
app.delete('/subscription', async (req, res) => {
    const customerName = req.body.customerName;
    await Subscription.deleteOne({ customerName: customerName }, (err) => {
        if (err) {
          return res.status(400).send({
            error: err.message || "An unknown error occurred",
          });
        }
        res.send({
          message: customerName + " has been deleted successfully",
        });
    });
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
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
app.listen(process.env.PORT || 8080);
