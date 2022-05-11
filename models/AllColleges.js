const mongoose = require('mongoose');


const Schema = mongoose.Schema({
    IN: {
        type: String
    },
    APN: {
        type: String
    },
    CR: {
        type: Number
    }

});

const model = mongoose.model('AllColleges', Schema);

module.exports = model;