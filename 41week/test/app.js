const express = require("express");

const app = express();

app.use(express.static("public")); // siger at vores html og sådan ligger i public-mappen


app.get()








app.listen(8080, (error) => {
    error ? console.log("error", error) : console.log("Starting server on 8080");
});