const router = require('express').Router();
let Subscription = require('../backend/models/subscription.js')

router.route('/').get((req,res) => 
{
    Subscription.find()
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

router.route('/:id').get((req,res)=>{
    Subscription.findById(req.params.id)
    .then(Subscription => res.json(Subscription))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').delete((req,res)=>{
    Subscription.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Subscription Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/update/:id').post((req,res)=>{
    Subscription.findById(req.params.id)
    .then(Subscription=>{

        Subscription.customerName = req.body.customerName;
        Subscription.subscriptionType = req.body.subscriptionType;
        Subscription.startDate = Date.parse(req.body.startDate);
        Subscription.renewalDate = Date.parse(req.body.renewalDate);
        Subscription.maxLbs = Number(req.body.maxLbs);
        Subscription.currentLbs = Number(req.body.currentLbs);
        Subscription.isActive = req.body.isActive;
        
        Subscription.save()
        .then(()=>res.json('Subscription updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: '+ err));

});

module.exports = router;
