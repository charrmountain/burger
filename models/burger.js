const orm = require("../config/orm.js");

//orm to set up connection to burger.js
orm.selectAll("burgers");
orm.insertOne("Bacon Ranch Burger", false);
orm.updateOne("Triple Decker Burger",1);

// module.exports = burger;
