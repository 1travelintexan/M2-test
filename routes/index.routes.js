const express = require("express");
const router = express.Router();
const UserModel = require("../models/User.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/signup", (req, res) => {
  res.render("auth/signup");
});
router.post("/signup", async (req, res) => {
  const newUser = await UserModel.create(req.body);
  console.log("here is your new User", newUser);
  res.redirect("/profile");
});
router.get("/profile", (req, res) => {
  res.render("profile");
});
module.exports = router;
