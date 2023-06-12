import shopModel from "../models/shop.model.js"

let controller = {}
controller.getAllShops = async (_req, res) => {
    try {
        const shops = await shopModel.find({});
        res.send(shops);
    } catch (error) {
        console.log("error in getallshops: ", error); 
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

controller.addShop = async (req, res) => {
    try {
        const shopNo = req.body.shopNo;
        console.log(req.body)
        const shop = new shopModel({ shopNumber: shopNo, products_list: []});
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