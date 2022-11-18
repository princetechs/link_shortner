// const mongoose = require('mongoose');

import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
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

//It check first it that model is already present then no  need to create again (mongoose.models.name_of_the_model)
module.exports = mongoose.models.Member || mongoose.model('Member', memberSchema);