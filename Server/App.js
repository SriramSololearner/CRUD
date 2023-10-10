const express= require("express");
const mongoose= require("mongoose");
const cors=require("cors");
const UsrModel = require("./Models/UserMdl");


const App=express();
App.use(express.json());
App.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Crud').then(()=>{
    console.log("DB connected!");
}).catch(er=>console.log(er))

App.get("/",(req,res)=>{
    res.json("Server Running Successfully!");
});

App.get("/Get", async(req,res)=>{
    const data = await UsrModel.find()
        res.json(data)
    });

// Getusr By Id
App.get("/Getusr/:id", async (req, res) => {
    const id=req.params.id;
    const data = await UsrModel.findById({"_id":id});
    res.json(data);
}); 
// UpdateUsr

App.put("/UpdateUsr/:id", async (req, res) => {
    const id = req.params.id;
    const data = await UsrModel.findByIdAndUpdate({ "_id": id },req.body);
    res.json(data);
}); 

// deleteUsr

App.delete("/deleteUsr/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const data = await UsrModel.findByIdAndDelete({ "_id": id });
    res.json(data);
}); 

// AddUsr

App.post("/AddUsr",(req,res)=>{
    // const AddUsr=new UsrModel(req.body);
    UsrModel.create(req.body)
    .then((usr)=>{
        console.log(usr);
        res.json(usr)
    })
    .catch(err=>res.json(err))
})

App.listen(2023, ()=>{
    console.log(`server started on http://localhost:2023`);
})