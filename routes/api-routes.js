// Dependencies
const db = require("../models");

// Import the views to complete MVC workflow

 const mainLayoutView = require('../views/layouts/main.js');
 const registerLayoutView = require('../views/register.js');
 const signLayoutView = require('../views/signin.js');
 const homeLayoutView = require('../views/home.js')

module.exports = function(app) {
  
  app.get('/', function(req, res) {
    console.log("Home called again");
    db.user.findAll({
      attributes: {
        exclude: ['password']
      }
    }).then(function(data) {
      console.log(data);
      //res.json(data);
      res.send(mainLayoutView.render(signLayoutView.render()))
    });
  });
 
  app.get('/api/registers', function(req, res) {
    console.log("rendering regiser layout");
    

   res.send(mainLayoutView.render(registerLayoutView.render()));
    db.user.findAll({}).then(function(data) {
      res.json(data);
    })

  } );

app.get("/api/home", function(req, res) {
  const username = req.query.username;
    const password = req.query.password;

    console.log(username);
    console.log(password);

       db.user.findAll()
        .then(function(data) {
          for(let i=0; i < data.length; i++) {
            console.log(data[i].dataValues.username);
            console.log(data[i].dataValues.password);
          
          if(data[i].dataValues.username === username && data[i].dataValues.password === password) {
           console.log("In here");
            res.send(mainLayoutView.render(homeLayoutView.render()));
            break;
          }
          console.log("out of if loop");
        }
        console.log("out of for loop");
        
        })
})

  app.post("/api/registersubmit", function(req, res) {
    console.log("Entering saving the data", req.body);
      db.user.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,
      })
      .then(function(data){
        console.log(data);
        res.json(data);
      })
  });
}