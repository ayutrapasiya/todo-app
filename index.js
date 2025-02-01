const express = require("express");
const port = 8001;
const path = require("path");
const app = express();
const Students = require("./models/student");
// const db = require('./config/db');

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ayushitrapasiya:h4ZTJelyZSrrm8KH@cluster0.29goa.mongodb.net/task-1"
  )
  .then(console.log("db is connect..."))
  .catch((err) => {
    console.log("db is not connect..");
  });

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "assets")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  let stuData = await Students.find();
  res.render("home", {
    stuData,
  });
});

//InsertData

app.post("/insertData", async (req, res) => {
  await Students.create(req.body);
  res.redirect("/");
});

// DeleteData

app.get("/deleteData", async (req, res) => {
  console.log(req.query.stuId);
  await Students.findByIdAndDelete(req.query.stuId);
  return res.redirect("back");
});

//Update data

app.get("/updateData/:id", async (req, res) => {
  console.log(req.params.id);
  let singleData = await Students.findById(req.params.id);
  console.log(singleData);
  return res.render("edit_stu", {
    singleData,
  });
});

// edit data pages

app.post("/editData", async (req, res) => {
  // console.log(req.body)
  // console.log(req.body,stId)
  await Students.findByIdAndUpdate(req.body.stId, req.body);
  return res.redirect("/");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Something is wrong....");
  }
  console.log("Server is running on port", port);
});
