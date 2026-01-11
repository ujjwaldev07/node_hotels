const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    work:  {
        type: String,
        enum: ['manager','chef','master-chef','waiter','owner'],
        required: true,
    },
    salary: {
        type: Number
    }
})

const Person = mongoose.model('Person', personSchema);
module.exports = Person;
