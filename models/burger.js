// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.create("burgers", ["burger_name" ,"devoured"], [name, false], cb 
    );
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(objColVals, condition, cb) {
    orm.delete("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }

};





// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
