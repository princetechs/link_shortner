// const mongoose = require('mongoose');

import mongoose from 'mongoose';

const member = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        // unique: true,
    },

    phone: {
        type: String,
    },

    status: {
        type: String,
        default: 'active',
        enum: ['active', 'deactive']
    },

}, {
    versionKey: false //here
});

const members = mongoose.model('sandipl', member);
module.exports = members;


