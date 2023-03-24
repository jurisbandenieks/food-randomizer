const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

dotenv.config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());
app.set("trust proxy", true);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", async (req, res) => {
  res.send("Server is running");
});

app.post("/api/recipies", async (req, res) => {
  const { prompt } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 2048
  });

  res.json({ status: 200, data: response.data });
});

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
