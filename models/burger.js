// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const Burger = {
  all: function(cb) {
    orm.all("Burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("Burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("Burger", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = Burger;
