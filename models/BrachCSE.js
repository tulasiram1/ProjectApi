const mongoose = require('mongoose');


const Schema = mongoose.Schema({
    IN: {
        type: String
    },
    CR: {
        type: Number
    }

});

const model = mongoose.model('BranchCSE', Schema);

module.exports = model;