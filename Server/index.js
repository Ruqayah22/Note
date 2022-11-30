import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import noteRouter from "./router/noteRouter.js";

// http://localhost:5000

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());

// app.use("/", (req, res) => {
//   res.send("hi");
// });
app.use("/notes", noteRouter);

// connections
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.CONNECTION_URL, {
    useMongoClient: true,
  })
  .then(console.log("Connection Successfully..."))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Listening to localhost Port 5000"));
