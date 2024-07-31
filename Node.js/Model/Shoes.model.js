const mongoose = require ("mongoose");


const shoeSchema = mongoose.Schema({
    name:String,
    rating:String,
    type:String,
    imageUrl:String,
    price:String,
    
});

const ShoeModel = mongoose.model("shoes" , shoeSchema);
module.exports = ShoeModel;