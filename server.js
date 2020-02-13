require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const logRouter = require("./routes/logRoutes");

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Database connected");
  });

const app = express();
app.use(express.json());
app.use("/api/log", logRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
});
