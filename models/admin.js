const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const AdminSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

AdminSchema.pre('save', function(next) {
    //check if doc is new or password is set
    if (this.isNew || this.isModified('password')) {
        //save ref to 'this' because of changing scopes
        const document = this;
        bcrypt.hash(this.password, saltRounds,
            function(err, hashedPassword) {
                if(err){
                    next(err);
                } else {
                    document.password = hashedPassword;
                    next();
                }
            }
        );
    } else {
        next();
    }
})
AdminSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same) {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    })
}
module.exports = mongoose.model('Admin', AdminSchema);