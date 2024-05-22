const mongoose = require ("mongoose");
const { options } = require("../routes/products");
//replaced @ with %40 


const connectDB =(uri) =>{
    console.log("Connected to db")
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    });
};

module.exports = connectDB;