const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/loans", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((error) =>
    console.log("Something went wrong connecting to the DB", error)
  );
