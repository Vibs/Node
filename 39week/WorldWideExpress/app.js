//+ henter express library
const express = require('express');
//+ instantierer exxpress
const app = express();

// app.use(express.json());

const pathStart = "";
console.log(__dirname + "/index.html"); // ! giver mig path til hvor jeg kører programmet fra (== den mappe hvor package.json ligger)

// ! returner HTML
// vi får express til at fungere som server hvor vi serverer noget html tilbage til clienten
app.get("/", (req, res) => {
    // MANUEL måde:
    //res.send("<h1>Review</h1>");

    // sendFile == tager imod absolute path == HELE the path
    res.sendFile(__dirname + "/public/html/index.html");
    // ELLER
    // res.sendFile("index.html", {root: __dirname});
    // ELLER (nok den mest optimale) 
    // 
});

app.get("/cleo", (req, res) => {
    console.log("Miav");
    // create a Cleo page
    res.sendFile(__dirname + "/public/html/cleo.html");
});

















//+ får express til at lytte på port 8080
app.listen(8080, (error) => {
    error ? console.log(error) : console.log("Server is running on port", 8080);
});