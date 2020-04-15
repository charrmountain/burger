const connection = require("./config/connection.js");

// Object Relational Mapper (ORM)
const orm = {
  selectAll: () => {
    const queryString = "";
    const values = [];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      console.table(result);
    });
  },
  insertOne: () => {
    const queryString = "";
    const values = [];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      console.table(result);
    });
  },
  updateOne: () => {
    const queryString = "";
    const values = [];
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      console.table(result);
    });
  },
};

module.exports = orm;
