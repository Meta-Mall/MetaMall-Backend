import productModel from "../models/product.model.js"
import { Web3Storage, File } from 'web3.storage';
import fs from "fs";

const controller = {}
const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN })

controller.addProduct = async (req, res) => {
    try {

        const modelFile = req.files.model_file
        let modelData = fs.readFileSync(modelFile.path, 'utf-8');

        // modelData = new Blob(buff, )
        // console.log("modelData.size: ", modelData.size);
        // const nodeBlob = new NodeBlob(buff);
        // console.log("nodeBlob.size: ", nodeBlob.size);

        const model = new File([modelData], modelFile.name);
        const cid = await client.put([model]);

        const Product = {
            name: req.fields.name,
            price: req.fields.price,
            store: req.fields.store,
            description: req.fields.description,
            order_link: req.fields.order_link,
            model_id: cid
        }
        await productModel(Product).save();
        res.sendStatus(200);
        console.log("Product added successfully");
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}

controller.getStoreProducts = async (req, res) => {
    try {

        const ProductsInStore = productModel.find({ store: req.param.store });
        ProductsInStore.forEach(p => {
            res = client.get(p.cid);
            p.model= res;
            console.log(p.model)
        });
        return;
        res.send( JSON.stringify(ProductsInStore));

    } catch (error) {
        console.log(error)
    }
}

export default controller;