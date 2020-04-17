// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: (tableInput, cb) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: (table, newRowData, cb) => {
    const queryString = "INSERT INTO ?? SET ?";
    const values = [table, newRowData];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: (table, updateValues, condition, cb) => {
    const queryString = "UPDATE ?? SET ? WHERE ?";
    const values = [table, updateValues, condition];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // delete: (table, id, cb) => {
  //   const queryString = "DELETE FROM ?? WHERE id = ?";
  //   const values = [table, id];

  //   console.log(queryString);
  //   connection.query(queryString, values, (err, result) => {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   });
  // },
};

// Export the orm object
module.exports = orm;
