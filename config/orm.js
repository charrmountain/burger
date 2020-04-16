const connection = require("./connection.js");

// Object Relational Mapper (ORM)
const orm = {
  selectAll: (allBurgers) => {
    const queryString = "SELECT * FROM ??";
    const values = [allBurgers];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      console.table(result);
    });
  },
  insertOne: (burgerName, devoured) => {
    const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);";
    const values = [burgerName, devoured];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      console.log("Inserted a Burger!");
    });
  },
  updateOne: (newBurger,oldBurger) => {
    const queryString = "UPDATE burgers SET burger_name = ? WHERE id = ?";
    const values = [newBurger,oldBurger];
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      console.log("Updated a Burger!");
    });
  },
};

module.exports = orm;
