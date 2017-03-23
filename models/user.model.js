var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    user: {
        email: {
            type: String,
            required: true
        },
        name: String,
        password: String
    }
});

var User = mongoose.model('User', userSchema);
module.exports = User;