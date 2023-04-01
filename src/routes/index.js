const express = require("express");
const route = express.Router();
const {
  getAll,

} = require("../controllers/index");

route.get("/getAll", getAll);


module.exports = route;
