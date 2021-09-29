const express = require("express");
const app = express();
const port = 4000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  local = {
    title: "Home",
  };
  res.render("../pages/index");
  // console.log("req");
});
app.get("/about", (req, res) => {
  local = {
    title: "About pages",
  };
  res.render("../pages/about", local);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
