import productModel from "../models/product.model.js"
import { Web3Storage, File, Blob } from 'web3.storage';
import { Blob as NodeBlob } from "buffer";
import fs from "fs";

const controller = {}

controller.addProduct = async (req, res) => {
    try {
        const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN })
 
        const modelFile = req.files.model_file

        let modelData = fs.readFileSync(modelFile.path, 'utf-8');

        // modelData = new Blob(buff, )
        // console.log("modelData.size: ", modelData.size);
        // const nodeBlob = new NodeBlob(buff);
        // console.log("nodeBlob.size: ", nodeBlob.size);

        const model = new File([modelData], modelFile.name);
        
        console.log("model: ", model);
        const cid = await client.put([model]);
        console.log("cid: ", cid);
        res.sendStatus(200);
        return;
        const Product = {
            name: req.body.name,
            price: req.body.price,
            store: req.body.store,
            description: req.body.description,
            order_link: req.body.order_link,
            model_id: cid
        }
        await productModel(Product).save();
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}

controller.getStoreProducts = (req, res) => {
    try {
        
        const storeNo = req.body.store;
        const ProductsInStore = productModel.find({store: storeNo});
 
        const productModel = [];
        


    } catch (error) {
        console.log(error)
    }
}

export default controller;