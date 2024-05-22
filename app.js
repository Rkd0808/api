require("dotenv").config();
const express = require("express");
const app = express();
const products_routes = require("./routes/products");
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 500;

 app.get("/",(req, res)=>{
    res.send("Website is live ");
 });


 //middleware or to set router
 app.use("/api/products",products_routes);

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, ()=>{
          console.log(  `${PORT} Connected `);
        })
    }catch(error){
        console.log(error)
    }
};

 start();