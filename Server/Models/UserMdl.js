const mongoose=require("mongoose");

const Usch=new mongoose.Schema({
    "name":String,
    "email":String,
    "age":Number
});

const UsrModel=mongoose.model("users",Usch);
module.exports=UsrModel;