import productController from "../controller/product.controller.js"
import Express from "express";

let productRouter = Express.Router();

productRouter.post("/add", (req, res) => {
    productController.addProduct(req, res);
})

productRouter.get("/getStoreProducts/:store", (req, res)=>{
    productController.getStoreProducts(req, res);
})

export default productRouter;
