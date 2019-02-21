//require express

let express = require("express");
let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

// Create routes and set up logic within those routes where required.

// "/"  set up home page with header and all burgers that are devoured and not devoured
router.get("/", function(req, res) {
  burger.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

//if submit button is clicked then want to add a new burger to the database
//new burgers have not been devoured, so set devoured to false
//display new burgers

router.post("/api/burgers", function(req, res) {
  req.body.devoured = false;
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

//if devoured button is clicked, the burger is being devoured
//get id of devoured burger and set devoured to true and update burger in database

router.put("/api/burgers/:id", function(req, res) {
  let condition = `id = ${req.params.id}`;
  burger.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
