const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    customerName: {type: String, required: true, unique: true},
    subscriptionType: {type: String, required: true},
    startDate: { type: String, required: true},
    renewalDate: {type: String, required: true},
    maxLbs: {type: Number, required: true},
    currentLbs: { type: Number, required: true},
    isActive: {type: String, required: true}
});
module.exports = mongoose.model('Subscription', SubscriptionSchema);