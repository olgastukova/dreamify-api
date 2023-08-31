require("dotenv").config();
const express = require ('express');
const app = express();
const cors = require('cors');
const dreams = require("./routes/dreams")


app.use(express.json());
app.use(cors());

app.use("/dreams", dreams)


app.listen (8080, function () {
    console.log("Running 8080")
})