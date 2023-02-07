//mongoose model?
import { Schema, model } from 'mongoose';

let Vendor = new Schema({
    wallet: String,
    name : String
});

export default model("Vendor", Vendor);

