// https://www.bezkoder.com/node-js-rest-api-express-mysql/


// import + instantiering i én
const app = require('express')();
const bodyParser = require('body-parser');

//

// parse requests of content-type: application/json
app.use(bodyParser.json()); //app.use(bodyParser.json()); // eller?

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


//+ urls:
/*  
GET ALL
    localhost:4000/dankmemes
GET specific from id
    localhost:4000/dankmemes/9
*/


// localhost:4000/dankmemes 
//      --> get all dankmemes
/*
app.get("/dankMemes", (request, response) => {
    response.send({hej: "goddag"});
});

// localhost:4000/dankmemes?title=[value]
//      --> get specific dankmeme from title
app.get("/dankMemes?title=", (request, response) => {
    response.send({hej: "goddag"});
});

// localhost:4000/dankmemes/[id]
//      --> get dankmeme with specified id
app.get("/dankMemes/:id", (request, response) => {
    response.send({hej: "goddag"});
});
*/



require("./app/routes/dankmeme.routes.js")(app);
app.listen(4000);
