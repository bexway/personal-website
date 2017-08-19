var express = require("express");
var path = require("path");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/dist'));

require('../routes/htmlRoutes.js')(app);

app.listen(port);