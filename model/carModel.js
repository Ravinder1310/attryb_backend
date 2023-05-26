const { Schema, model } = require("mongoose");


const carSchema = Schema({
    image:String,
    title:String,
    discription:String,
    price:Number,
    color:String,
    mileage:Number
})

const carModel = model("car",carSchema);

module.exports={
    carModel
}