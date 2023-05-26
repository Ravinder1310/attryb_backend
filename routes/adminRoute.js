const express = require("express");
const { carModel } = require("../model/carModel");
const adminRoute = express.Router();


adminRoute.get("/",async(req,res)=>{
    const cars = await carModel.find();
    res.send(cars);
})


adminRoute.post("/addCar",async(req,res)=>{
    const {image,title,discription,price,color,mileage} = req.body;
    try {
        const car = new carModel({image,title,discription,price,color,mileage})
        await car.save();
        res.send("Car is added");
    } catch (error) {
        res.send(error.message)
    }
})

adminRoute.patch("/updateCar/:id",async(req,res)=>{
    const carID = req.params.id;
    const {image,title,discription,price,color,mileage} = req.body;
    try {
        await carModel.findByIdAndUpdate({_id:carID},{image,title,discription,price,color,mileage})
        res.send("Car's details are updated");
    } catch (error) {
        res.send(error.message)
    }
})

adminRoute.delete("/deleteCar/:id",async(req,res)=>{
    const carID = req.params.id;
    try {
       await carModel.findByIdAndDelete({_id:carID})
        res.send(`Car is deleted of id ${carID}`);
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = {
    adminRoute
}