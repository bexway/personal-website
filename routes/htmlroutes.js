var path = require('path');
var express = require("express");
var projects = require("../data/projects.js");

var router = express.Router();

router.get("/", function(req, res) {
  var indexObj = {
    projects: projects
  };
  res.render("index", indexObj);
});

module.exports = router;