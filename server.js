var express = require("express");
var app = express();
var path = require("path");

app.set('port', 4000);
app.use(express.static(path.join(__dirname, '/')));

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + "/public/html/index.html"))
});

app.listen(app.get('port'),  function () {
  console.log('Hello express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );
});
