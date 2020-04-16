var express = require("express");
const burger = require("./models/burger.js");
const exphbs = require("express-handlebars");

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
app.get("/", (req, res) => {

  
  // completing the loop means nothing matched
  // send not found error
  return res.sendStatus(404);
  
});

app.get("/burgers", (req, res) => {
  res.render("", {  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
