// henter klassen og gemmer i variabel
const Dankmeme = require("../models/dankmeme.model.js"); 


// Retrieve all Dankmemes
exports.findAll = (req, res) => {
    Dankmeme.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving d."
          });
        else res.send(data);
      });
};

// Find a single Dankmeme with a dankmemeId
exports.findOne = (req, res) => {
    // kalder metode  lavet i klassen
    // 
    Dankmeme.findById(req.params.dankmemeId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Dankeme with id ${req.params.dankmemeId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Dankmeme with id " + req.params.dankmemeId
            });
          }
        } else res.send(data);
      });
  
};



/*
// Create and Save a new Customer
exports.create = (req, res) => {
};


// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};
*/