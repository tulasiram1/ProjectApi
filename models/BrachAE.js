const mongoose = require('mongoose');


const Schema = mongoose.Schema({
    IN: {
        type: String
    },
    CR: {
        type: Number
    }

});

const model = mongoose.model('BranchAE', Schema);

module.exports = model;