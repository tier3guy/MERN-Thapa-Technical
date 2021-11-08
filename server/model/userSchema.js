const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    }
});

// hashing users passwords
schema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bycrypt.hash(this.password, 12);
        this.confirmPassword = await bycrypt.hash(this.confirmPassword, 12);
    }
    next();
});

const User = mongoose.model('User', schema);

module.exports = User;