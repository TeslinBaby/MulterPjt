const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mult")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

const nameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  file: { type: String, required: true },
});

module.exports = mongoose.model("Name", nameSchema);