const mongoose = require('mongoose');

const ListProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true},
        img: { type: String },
        price: {type: Number, required: true},
        gender: { type: Boolean, default: false },
        size: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model('ListProduct', ListProductSchema);