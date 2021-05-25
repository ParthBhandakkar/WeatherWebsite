const express = require("express")
const app = express()
const path = require("path")
const static_path = path.join(__dirname)

app.set("view engine", "html");
app.use(express.static(static_path))

app.get("/", (req,res) => {
    res.render("index")
})
app.get("/about", (req,res) => {
    res.render("about")
})
app.listen(8000, () => {
    console.log("Listening on port 8000")
})