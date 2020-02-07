const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//const customAuthMiddleware = require('./middleware/custom-auth-middleware');
const express = require("express");

//Directory references 
const db = require('./models');

let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
//app.use(customAuthMiddleware);

app.use(express.static(__dirname + "/public"));

require("./routes/api-routes.js")(app);
//require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function(){ 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
});