import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirName = dirname(fileURLToPath(import.meta.url)); 
const port = 3002;

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, (req, res) => {
    console.log(`App is running on port ${port}`)
})

var name = "";

function NameGenerator(req, res, next){
    console.log(req.body);
    name=req.body["street"] + req.body["pet"];
    next();
}

app.use(NameGenerator);

app.get("/", (req, res) => {
    res.sendFile(__dirName + "/index.html");
})

app.post("/submit", (req, res) => {
    res.send(`The random name is ${name}`)
})