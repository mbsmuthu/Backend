import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3004;

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/submit", (req, res) => {
    const firstName = req.body["firstName"];
    const lastName = req.body["lastName"];
    const fullName = firstName + lastName;
    res.render("index.ejs", {
        fullName: fullName
    })
})

