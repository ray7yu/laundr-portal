const router = require('express').Router();
let User = require('../models/order.model')

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
module.exports = router;