module.exports = app => {
    const dankmemes = require("../controllers/dankmeme.controller.js");
  
    // Retrieve all Dankmemes
    app.get("/dankmemes", dankmemes.findAll);
  
    // Retrieve a single Dankmeme with dankmemeId
    app.get("/dankmemes/:dankmemeId", dankmemes.findOne);

    app.get("/dankmemes/:dankmemeId", dankmemes.findOne);










    // Create a new Dankmeme
    //app.post("/dankmemes", dankmemes.create);
  
    // Update a Dankmeme with dankmemeId
    //app.put("/dankmemes/:dankmemeId", dankmemes.update);
  
    // Delete a Dankmeme with dankmemeId
    //app.delete("/dankmemes/:dankmemeId", dankmemes.delete);
  
    // Delete all dankmemes
    //app.delete("/dankmemes", dankmemes.deleteAll);
  };