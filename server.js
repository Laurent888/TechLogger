require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const logRouter = require("./routes/logRoutes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use("/api/log", logRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => {
      console.log("Database connected");
    });
};

connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
});
