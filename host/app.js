var express = require("express");

// Root Express App
// ----------------

var app = express();

// Sub-Apps
// --------
var api = require("../api/app");
var web = require("../web/app");
var errors = require("../errors/app");

app.use("/api", api);
app.use("/", web);
app.use(errors);

// Exports
// -------

module.exports = app;
