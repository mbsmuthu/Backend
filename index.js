import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirName = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3001;

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(morgan("combined"));

function logger(req, res, next){
    console.log("Request method", req.method)
    console.log("Request URL", req.url)
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.sendFile(__dirName + "/index.html");
    // res.send("Hellow")
})

app.listen(port, () => {
    console.log(`App is running in port ${port}`);
})
