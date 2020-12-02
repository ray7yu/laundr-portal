const mongoose = require("mongoose");
const User = require('./models/user');
const Order = require('./models/order');
const Subscription = require('./models/subscription');
const Admin = require('./models/subscription');
const {userRows, orderRows, subscriptionRows, admins} = require("./src/components/seedata");


let userSeeds = [
    {
        username: "Jay",
        email: "random123@gmail.com",
        dateCreated: "2015-03-25"
    },
    {
        username: "Grace",
        email: "newperson@aol.com",
        dateCreated: "2019-07-15"
    },
    {
        username: "Ray",
        email: "oldperson@gmail.com",
        dateCreated: "2015-09-29"
    }
  
]

// REFACTOR WITH ASYNC/AWAIT LATER
/*async*/ function seedDB() {
    // await User.deleteMany({})
    // console.log("Users removed.")

    // userSeeds.forEach((seed) => {
    //     console.log(seed)
    //     let user = await User.create(seed)
    //     console.log("User created.")

    //     // user.save()
    // });
    

  
    User.deleteMany({}, function(err) {
        if (err) {
            console.log(err);
        }
      });
    console.log('Removed users')

    userRows.forEach(function(seed) {
        User.create(seed, function(err, user) {
            if (err) {
                console.log(err)
            }
            else {
                user.save();
            }
        })
    })
    console.log('Added users')


    Order.deleteMany({}, function(err) {
        if (err) {
            console.log(err);
        }
      });
      console.log('Removed orders')


    orderRows.forEach(function(seed) {
        Order.create(seed, function(err, order) {
            if (err) {
                console.log(err)
            }
            else {
                order.save();
                console.log('Added orders')
            }
        })
    })

    Subscription.deleteMany({}, function(err) {
        if (err) {
            console.log(err);
        }
      });
      console.log('Removed subscriptions')


      subscriptionRows.forEach(function(seed) {
        Subscription.create(seed, function(err, sub) {
            if (err) {
                console.log(err)
            }
            else {
                sub.save();
                console.log('Added subscription')
            }
        })
    })


      admins.forEach(function(seed) {
        Admin.create(seed, function(err, sub) {
            if (err) {
                console.log(err)
            }
            else {
                sub.save();
                console.log('Added admin')
            }
        })
    })

}


module.exports = seedDB;