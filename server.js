var express = require("express");
var path = require("path");
var handlebars = require("express-handlebars");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname, '/dist')));

var hbsObj = handlebars.create({
    layoutsDir: path.join(__dirname, "dist/views/layouts"),
    partialsDir: path.join(__dirname, "dist/views/partials"),
    defaultLayout: 'main',
    extname: 'handlebars'
});

app.engine('handlebars', hbsObj.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "/dist/views"));
  
var routes = require("./routes/htmlroutes.js");

app.use("/", routes);



app.listen(port);