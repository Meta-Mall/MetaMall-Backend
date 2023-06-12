import { Router } from "express";
import controller from "../controller/shop.controller.js";

let shopRouter = Router();

shopRouter.get("/all", (req, res)=>{
    controller.getAllShops(req, res);
})

shopRouter.get("/:shopNumber", (req, res)=>{
    controller.getShopProducts(req, res);
})

shopRouter.post("/add", (req, res)=>{
    console.log("shop router")
    controller.addShop(req, res);
})

shopRouter.post("/add-product", (req, res)=>{
    controller.addProduct(req, res);
})

export default shopRouter;