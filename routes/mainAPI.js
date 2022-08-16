const router = require("express").Router();

const {square} = require("./square.js");
const cow = require('./cow');



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

module.exports = router;