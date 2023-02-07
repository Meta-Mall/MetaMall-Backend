import Express from "express";
import customerController from "../controller/customer.controller.js";

const customerRouter = Express.Router();

customerRouter.get("/:id", (req, res) => {

})

customerRouter.post("/add", (req, res) =>{
    customerController.addNewCustomer(req, res);
})

export default customerRouter;

