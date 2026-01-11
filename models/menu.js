const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    taste: {
        type: String,
        enum: ['sweet','sour','spicy'],
        required: true,
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: [String],
        default: [],
    },
    num_sales: {
        type: Number
    }
    
})

const menu = mongoose.model('menu', menuSchema);
module.exports = menu;