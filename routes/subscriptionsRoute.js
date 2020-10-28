const router = require('express').Router();
let User = require('../models/subscription.model')

router.route('/').get((req,res) => 
{
    User.find()
    .then (subscriptionRoute => res.json(subscriptionRoute))
    .catch(err => res.status(400).json("Error: " +err));
});

router.route('/add').post((req, res)=>{
    const customerName = req.body.customerName;
    const subscriptionType= req.body.subscriptionType;
    const startDate = Date.parse(req.body.startDate);
    const renewalDate = Date.parse(req.body.renewalDate);
    const maxLbs= Number(req.body.maxLbs);
    const currentLbs = Number(req.body.currentLbs);
    const isActive = req.body.isActive;
    
    const newSubscription = new Subscription({
    customerName,
    subscriptionType,
    startDate,
    renewalDate,
    maxLbs,
    currentLbs,
    isActive
    });

    newSubscription.save()
    .then(()=>res.json('Subscription added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});
module.exports = router;
