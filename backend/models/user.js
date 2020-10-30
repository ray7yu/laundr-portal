const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    dateCreated: { type: Date, required: true}
});
module.exports = mongoose.model('User', UserSchema);