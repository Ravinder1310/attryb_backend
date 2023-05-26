const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/userRoutes");
const { carRouter } = require("./routes/carRoutes");
const { adminRoute } = require("./routes/adminRoute");
const { authentication } = require("./middleware/auth.middleware");
const { admin } = require("./middleware/admin.middleware");
const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.use("/admin",adminRoute)
app.use("/users",userRouter);
app.use(authentication);
app.use("/cars",carRouter);
// app.use(admin)


app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Connected to DB");
    } catch (error) {
        console.log(error.message);
    }
  console.log(`Server is running on port ${process.env.PORT}`);
})
