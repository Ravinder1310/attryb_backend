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

carRouter.get("/search", async (req, res) => {
    const { q } = req.query;
    const title = {};
    const color = {};
    const price = {};
    if (q) {
      title.title = new RegExp(q, "i");
      color.color = new RegExp(q, "i");
      price.price = new RegExp(q, "i");
    }
    const query = { $or: [title, color, price] };
    try {
      const data = await DataModel.find(query);
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = {
    carRouter
}