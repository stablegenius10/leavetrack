const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://ayush:ayush@cluster0.hkkuuyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

