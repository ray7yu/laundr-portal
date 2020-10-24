const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderNumber: {type: Number, required: true, unique: true},
    customerID: {type: Number, required: true},
    pickupTime: { type: String, required: true},
    deliveryTime: {type: String, required: true},
    driverName: {type: String, required: true},
    address: { type: String, required: true},
    status: {type: String, required: true},
    weight: {type: Number, required: true}
});
module.exports = mongoose.model('Order', OrderSchema);