import express from "express";

const app = express();
const port = 3003;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs", {
        title: "Brightside",
        second: new Date().getSeconds(),
        items: ["asdfgf", ";lkjhj", "qwerty", "oiupj"],
        htmlContent: "<em>This is a HTML</em>"
    })
})