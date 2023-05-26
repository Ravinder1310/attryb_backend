const express = require("express");
const { carModel } = require("../model/carModel");
const carRouter = express.Router();

carRouter.get("/",async(req,res)=>{
    const cars = await carModel.find();
    res.send(cars);
})

carRouter.get("/:id",async(req,res)=>{
    const carID = req.params.id;
    try {
        const car = await carModel.find({_id:carID});
        // console.log(car);
         res.send(car)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = {
    carRouter
}