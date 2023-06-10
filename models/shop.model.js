import mongoose, { Schema } from "mongoose";

const shopSchema = mongoose.Schema({
    shopNumber: Number,
    products_list: [
        new Schema({
            name: String,
            price: Number,
            description: String,
            position : {
                x:Number,
                y:Number,
                z:Number,
            },
            order_link: String,
            model_id: String
    })]
});

const shopModel = mongoose.model("Shop", shopSchema);

export default shopModel;