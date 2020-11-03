const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderNumber: {type: Number, required: true, unique: true},
    customerID: {type: Number, required: true},
    pickupTime: { type: Date, required: true},
    deliveryTime: {type: Date, required: true},
    driverName: {type: String, required: true},
    address: { type: String, required: true},
    status: {type: String, required: true},
    weight: {type: Number, required: true}
});
module.exports = mongoose.model('Order', OrderSchema);