const router = require("express").Router();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:8080/Test").then(()=>{
    console.log("DB Connected");
}).catch(console.log);

const trainerSchema = mongoose.Schema({

    name:String,
    age:Number
})

const trainerModel = new mongoose.model("trainers", trainerSchema)

router.get("/getAll", (req, res) =>{

    trainerModel.find({}).then((trainers)=>{
        res.send(JSON.stringify(trainers));

    }).catch((err) =>{
        throw err;
    })

    res.send("Yep");
})

router.post("/create", (req, res) =>{
    trainerModel.create(req.body).then((trainer)=>{
        res.send(JSON.stringify(trainer))
    }).catch((err)=>{
        throw err;
    })
})

module.exports = router;