var express = require("express");

var app = express();
var distDir = __dirname + "/dist/"
console.log(distDir);

app.use(express.static(distDir));

var server = app.listen(process.env.PORT ||8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});

// REST API