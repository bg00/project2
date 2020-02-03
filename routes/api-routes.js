// Dependencies

const db = require("../models");

// Import the views to complete MVC workflow

const mainLayoutView = require('../views/layouts/main.js');
const registerLayoutView = require('../views/register.js');
const signLayoutView = require('../views/signin.js')

// Routes

module.exports = function(app) {

  app.get('/', function(req, res) {
    db.registers.findAll().then(function(data) {
      console.log(data);
      res.send(mainLayoutView.render(signLayoutView.render()))
    });
  });
 
  app.get('/register', function(req, res) {
    db.registers.findAll().then(function(data) {
      console.log(data);
      res.send(mainLayoutView.render(registerLayoutView.render()))
    });
  });

  // Create a new example
  app.post("/api/registers", function(req, res) {
    db.registers.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/registers/:id", function(req, res) {
    db.registers.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
