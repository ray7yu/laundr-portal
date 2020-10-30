const router = require('express').Router();
let Order = require('../backend/models/order.js')

router.route('/').get((req,res) => 
{
    User.find()
    .then (ordersRoute => res.json(ordersRoute))
    .catch(err => res.status(400).json("Error: " +err));
});

router.route('/add').post((req, res)=>{
    const orderNumber = Number(req.body.orderNumber);
    const customerID = Number(req.body.customerID);
    const pickupTime = req.body.pickupTime;
    const deliveryTime = req.body.deliveryTime;
    const driverName = req.body.driverName;
    const address = req.body.address;
    const status = req.body.status;
    const weight = Number(req.body.weight);
    
    const newOrder = new Order({
    orderNumber,
    customerID,
    pickupTime,
    deliveryTime,
    driverName,
    address,
    status,
    weight
    });

    newOrder.save()
    .then(()=>res.json('Order added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req,res)=>{
    Subscription.findById(req.params.id)
    .then(Subscription => res.json(Subscription))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').delete((req,res)=>{
    Subscription.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Order Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/update/:id').post((req,res)=>{
    Subscription.findById(req.params.id)
    .then(Subscription=>{

        Order.orderNumber = Number(req.body.orderNumber);
        Order.customerID = Number(req.body.customerID);
        Order.pickupTime = req.body.pickupTime;
        Order.deliveryTime = req.body.deliveryTime;
        Order.driverName = req.body.driverName;
        Order.address = req.body.address;
        Order.status = req.body.status;
        Order.weight = Number(req.body.weight);
        
        Subscription.save()
        .then(()=>res.json('Order updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: '+ err));

});

module.exports = router;