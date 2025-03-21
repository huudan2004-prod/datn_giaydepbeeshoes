const mongoose = require('mongoose');

const WishListModel = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // User owns this wishlist
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] // List of products in wishlist
}, { timestamps: true });

module.exports = mongoose.model('WishList', WishListModel);