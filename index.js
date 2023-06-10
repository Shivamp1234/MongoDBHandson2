const express = require('express');
const route = require("./routes/route")

const app = express();

app.use(express.json())

app.use(route)

app.get("/", (req, res) => {
    console.log("Api is running fine!")
})

app.listen(5000, () => {
    console.log("Server started at port 5000")
})

