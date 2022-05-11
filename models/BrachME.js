const mongoose = require('mongoose');


const Schema = mongoose.Schema({
    IN: {
        type: String
    },
    CR: {
        type: Number
    }

});

const model = mongoose.model('BranchME', Schema);

module.exports = model;