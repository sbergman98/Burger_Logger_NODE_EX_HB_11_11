const connection = require("../config/connection.js");

//  Methods that will be needed
// * `selectAll()`
// * `insertOne()`
// * `updateOne()

function addHamburger(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
    
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    const arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations 
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
  // Object for all our SQL statement functions.
  const orm = {
    all: function(tableInput, cb) {
      const queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
      let queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += addHamburger(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    
    update: function(table, objColVals, condition, cb) {
      let queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },

    
    delete: function(table, objColVals, condition, cb) {
      let queryString = "DELETE From " + table;
  
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
    


  };


//  var $studentDiv = $('div.divstudent').eq(0); 
// //Add the two new <div> elements 
// $studentDiv.after('<div>2</div><div>3</div>');
// //Remove the class="divstudent"
// $studentDiv.removeAttr('class');







// Export the orm object for the model (burger.js)

module.exports = orm;