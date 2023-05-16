const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Account = new Schema(
  {
    typeAccount: { type: Number, minlength: 1, required: true },
    username: { type: String, minlength: 1, required: true },
    password: { type: String, minlength: 1, required: true },
    imageUrl: { type: String, minlength: 1, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("account", Account);
