const express = require("express");
const app = express();
app.all("/", (req, res) => {
  console.log("Just got a request!", req);
  res.send("Yo its workingggg !");
});
app.listen(process.env.PORT || 3000);
