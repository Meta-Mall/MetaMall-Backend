//mongoose model?
import { Schema, model } from 'mongoose';

let Customer = new Schema({
    email: { type: String },
    userName: { type: String },
    password: { type: String },
    gender: { type: String},
    country: { type: String },
    city: { type: String }
});

let customerModel = model("Customer", Customer);

export default customerModel;

