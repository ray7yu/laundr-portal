const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    customerName: {type: String, required: true, unique: true},
    subscriptionType: {type: String, required: true},
    startDate: { type: Date, required: true},
    renewalDate: {type: Date, required: true},
    maxLbs: {type: Number, required: true},
    currentLbs: { type: Number, required: true},
    isActive: {type: String, required: true}
});
module.exports = mongoose.model('Subscription', SubscriptionSchema);