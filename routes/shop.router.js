import { Router } from "express";
import controller from "../controller/shop.controller.js";

let shopRouter = Router();

shopRouter.get("/:shopNumber", (req, res)=>{
    controller.getShopProducts(req, res);
})

shopRouter.post("/addShop", (req, res)=>{
    controller.addShop(req, res);
})

shopRouter.post("/addProduct", (req, res)=>{
    controller.addProduct(req, res);
})

export default shopRouter;