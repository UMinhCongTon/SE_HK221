const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const port = 8000;
const route = require("./routes");
dotenv.config();

//Connect MongoDB

mongoose.set('strictQuery', true);
async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect success!!!");
  } catch (error) {
    console.log("Connect fail!!!");
  }
}
connect();

app.use(express.json());

//Handle CORS
app.use(cors());

//Init Routes
route(app);

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}`);
});