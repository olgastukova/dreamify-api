require("dotenv").config();
const express = require ('express');
const app = express();
const cors = require('cors');
const dreams = require("./routes/dreams")
const OpenAI = require ('openai');

app.use(express.json());
app.use(cors());

app.use("/dreams", dreams)

// app.get("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=rome", function(req, res){
//     then(res => res.json())
//     .then(data => {
//         document.body.style.backgroundImage = `url(${data.urls.full})`
// })
// }) 

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});

app.post("/ask", async (req, res) => {
  const prompt = req.body.prompt;

  try {
    if (prompt == null) {
      throw new Error("No prompt was provided");
    }

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": prompt}],
      });
    //   console.log(chatCompletion.choices[0].message);
      return res.status(200).json(chatCompletion.choices[0].message)}
     
   catch (error) {
    console.log(error.message);
  }
});

app.listen (8080, function () {
    console.log("Running 8080")
})