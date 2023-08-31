const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const isLocal = true;
const allLoanRoutes = require("./routes/ltk/loan.routes");
require("./config/mongoose.config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

allLoanRoutes(app);

app.get("/", (req, res) => {
  res.json({
    message: "✨ 👋🌏 ✨",
    stage: process.env.NODE_ENV,
  });
});

app.get("/ping", (req, res) => {
  res.json({
    message: "🏓",
  });
});

if (isLocal) {
  //local host
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
} else {
  //for lambda export
  module.exports = app;
}
