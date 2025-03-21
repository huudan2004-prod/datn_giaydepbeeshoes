const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser');
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.get("/", (req, res) => {
    res.send("hello world")
})

mongoose.connect(`${process.env.MONGO_DB}`)
.then(() => {
    console.log('Connect Success !')
})
.catch((err) => {
    console.log(err)
})

app.listen(port, () => {
    console.log('server is running in port: ', + port)
})