const express = require("express");
const cors = require("cors");
require("./db/config");
const userModel = require("./db/userModel");
const carDetailFormModal = require("./db/carDetailFormModel");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/userdata", async (req, res) => {
  let userData = new userModel(req.body);
  let result = await userData.save();
  res.send(result);
});

app.post("/cardetaildata", async (req, res) => {
  let carData = new carDetailFormModal(req.body);
  let result = await carData.save();
  res.send(result);
});

app.listen(8080);
