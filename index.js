
const express = require("express");
const app = express();
const path = require("path");
// const methodOverride = require("method-override");

// app.use(methodOverride("method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));



app.get("/", (req, res) => {
  res.render("home.ejs");
})

app.listen(8080, () => {
    console.log("p is listing on port 8080")
  })
