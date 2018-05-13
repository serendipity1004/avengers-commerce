const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    price:{type:Number, required:true},
    name:{type:String, required:true, unique:true},
    image:{type:String, require:true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;