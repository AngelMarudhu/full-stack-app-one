// processs oneeeee   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./Routes/Posts.js";

const app = express();

// Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);

// Mongoose connection url
const CONNECTION_URL =
  "mongodb+srv://marudhu:marudhu123@cluster0.ouuof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

// Mongooose Connect
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true, // these two are not necessory without these some console error nothing else.......
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set("debug", false);
