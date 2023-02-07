import customerModel from "../models/customer.model.js";

const controller = {}

controller.get = async (req, res) => {

}

controller.addNewCustomer = async (req, res) => {
    try {
        console.log(req.body);
        await customerModel(req.body).save();
        console.log("Customer added");
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}
export default controller;
