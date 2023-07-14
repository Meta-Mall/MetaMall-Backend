import shopModel from "../models/shop.model.js"
import { Web3Storage, File } from 'web3.storage';

let controller = {}
const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN })

controller.getProductModel = async (model_id) => {
    try {
        const model = client.get(model_id);
        return model;
    } catch (error) {
        console.log("error in get prodcut model: ", error);
        
    }
}

controller.getShopProducts = async (req, res) => {
    try {
        const shopProducts = await shopModel.findOne({shopNumber: req.body.shopNumber}).select("products_list");
        res.send(shopProducts);
    } catch (error) {
        console.log('error getShopProducts: ', error);
    }
}

controller.addShop = async (shopNo) => {
    try {
        //initial all shops using this function
        const shop = new shopModel({ shopNumber: shopNo, products_list : []});
        await shop.save();
        res.sendStatus(200);
    } catch (error) {
        console.log('error addShop: ', error);
        
    }
}

controller.addProduct = async (req, res) => {
    try {
        const modelFile = req.files.model_file
        let modelData = fs.readFileSync(modelFile.path, 'utf-8');

        const model = new File([modelData], modelFile.name);
        const cid = await client.put([model]);

        const Product = {
            name: req.fields.name,
            price: req.fields.price,
            description: req.fields.description,
            order_link: req.fields.order_link,
            model_id: cid
        }

        const shop = await shopModel.findOne({shopNumber:req.fields.store});
        shop.products_list.push(Product);
        const res = await shop.save();
        res.sendStatus(res);

    } catch (error) {
        console.log('error addProduct: ', error);
        
    }
}

controller.changePosition = async (req, res) => {
    try {
        const shop = shopModel.findById(req.body.shopId);
        let product = shop.find({"products_list._id":req.body.productId});
        product.position = req.body.position;
        await shop.save();
        res.sendStatus(200);

    } catch (error) {
        console.log("error: changePosition", error);
    }
}

export default controller;