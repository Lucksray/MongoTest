const express = require("express");
const mongoose = require('mongoose');

const app = express();
const {square} = require("./square.js");
const cow = require('./cow');

mongoose.connect('mongodb://localhost:8080/', { useNewUrlParser: true });

mongoose.connect(uri, opts).then(() => { console.log("connected to port 8080") }, (err) => { throw new Error("Cannot connect!")});

app.use(express.json());

app.use((req,res,next) =>{
    const logEntry = `host: ${req.host}
    ip: ${req.ip},
    method: ${req.method},
    path: ${req.path},
    time: ${new Date()}`;
    console.log(logEntry);
    next();
})

app.use((err, req, res, next) =>{
    console.log("Error path");
    next(err);
})



const server = app.listen(8080 ,() => {
    console.log(`Server started listening on port ${server.address().port}`);
});



app.get("/", (req, res) => {
    res.send();
})

app.get('/cow', (req, res) => {
    console.log(cow.speak("maow"));
    res.send(cow.speak("maow"));
})

app.get('/error',(req,res) => {
    res.status(500).send("Mistakes were made");
    throw new Error("test2t");
})

app.post("/square/:number", (req, res) => {
    const no = req.params.number;
    console.log(no);
    res.send(""+square(no));
})

app.post("/body", (req, res) => {
    console.log(req.body)
    res.send("body recieved")
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});