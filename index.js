import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`App is running in port ${port}`);
})

app.get("/", (req, res) => {
    console.log(__dirName + "/index.html");
    res.sendFile(__dirName + "/index.html");
})
