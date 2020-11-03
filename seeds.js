const mongoose = require("mongoose");
const User = require('./models/user');
const Order = require('./models/order');
const Subscription = require('./models/subscription');

let userSeeds = [
    {
        email: "random123@gmail.com",
        password: "password123",
        dateCreated: "2015-03-25"
    },
    {
        email: "newperson@aol.com",
        password: "123456",
        dateCreated: "2019-07-15"
    },
    {
        email: "oldperson@gmail.com",
        password: "laundr",
        dateCreated: "2015-09-29"
    }
  
]

async function seedDB() {
    await User.deleteMany({})
    console.log("Users removed.")

    for (const seed of userSeeds)
    {
        let user = await User.create(seed)
        console.log("User removed.")

        user.save()
        
    }
}

module.exports = seedDB;