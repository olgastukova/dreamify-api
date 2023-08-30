const express = require ('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());


app.listen (8080, function () {
    console.log("Running 8080")
})