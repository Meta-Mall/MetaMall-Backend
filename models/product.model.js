import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name : String,
    price : Number,
    store : Number,
    description : String,
    order_link : String,
    model_id : String
})

const productModel = mongoose.model("Product", productSchema);

export default productModel;