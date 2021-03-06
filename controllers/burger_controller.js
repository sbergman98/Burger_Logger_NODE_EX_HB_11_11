const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

router.post("/api/devour", function(req, res) {
  const condition = "burger_name = '"+ req.body.burger_name + "'";

  console.log("condition", req.body.burger_name);

  burger.delete(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      
      res.status(200).end();
      

    }
  );
});



// Export routes for server.js to use.
module.exports = router;
