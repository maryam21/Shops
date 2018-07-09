const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** Define the schema for our shop model */

const ShopSchema = new Schema({
    _id: Schema.Types.ObjectId
});

const Shop = mongoose.model('Shop', ShopSchema);

module.exports = Shop;
