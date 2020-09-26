const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderNumber: {type: String, required: true, unique: true},
    customerID: {type: String, required: true},
    pickupTime: { type: Date, required: true},
    deliveryTime: {type: Date, required: true},
    driverName: {type: String, required: true},
    address: { type: String, required: true},
    status: {type: String, required: true},
    weight: {type: Number, required: true}
});
module.exports = mongoose.model('Order', OrderSchema);