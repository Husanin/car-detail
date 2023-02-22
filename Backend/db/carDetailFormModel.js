const mongoose = require("mongoose");

const carDetailFormModel = new mongoose.Schema({
  car: {
    type: String,
    required: [true, "Car is require"],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, "Price is require"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Phone is require"],
    unique: true,
  },
  picturenomber: {
    type: Number,
    required: [true, "Picture Nomber is require"],
  },
  pictures: {
    type: Array,
    required: [true, "Pictures is require"],
  },
});

const carDetailFormModal = mongoose.model("cardetail", carDetailFormModel);

module.exports = carDetailFormModal;
