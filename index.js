require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./db/connection");

const userRouter = require("./routes/Users");
const RecipesRouter = require("./routes/Recipes");


const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());


app.use("/auth", userRouter);
app.use("/recipes", RecipesRouter);


db();

app.get('/', (req, res) => {
  res.send("Welcome To Recipe App!!!")
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
