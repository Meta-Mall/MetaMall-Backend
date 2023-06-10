import express from 'express';
import connectAtlasDB from './connectDb.js';
import customerRouter from './routes/customer.router.js';
import cors from "cors";
import cloudRouter from './routes/cloudGateway.router.js';
import dotenv from 'dotenv';
import productRouter from './routes/product.router.js';
import shopRouter from './routes/shop.router.js';
import formidable from 'express-formidable'

dotenv.config();
let app = express();
connectAtlasDB();
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());
app.use(formidable())

app.use("/customer/", customerRouter);
app.use("/cloud", cloudRouter);
app.use("/product", productRouter);
app.use("/shop", shopRouter);

app.listen(5000, function () {
  console.log('Server listening at port 5000');
});




