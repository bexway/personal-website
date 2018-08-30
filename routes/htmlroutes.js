var path = require('path');
var express = require("express");
var projects = require("../data/projects.js");
var skills = require("../data/skills.js");
var fs = require('fs');

var router = express.Router();

router.get("/projects", function(req, res) {
  var projectsObj = {
    projects: projects,
  };
  res.render("projects", projectsObj);
});

router.get("/skills", function(req, res) {
  var skillsObj = {
    skills: skills
  };
  res.render("skills", skillsObj);
});

router.use(function(req, res) {
  var indexObj = {
    projects: projects,
    skills: skills
  };
  res.render("index", indexObj);
});

module.exports = router;