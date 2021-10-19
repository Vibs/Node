const express = require("express"); // henter express
// https://www.npmjs.com/package/node-fetch
// skriv først npm install node-fetch 
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));// henter node-fetch fra dependencies I think????

const app = express(); // instantierer express

app.use(express.static("public")); // siger at vores html og sådan ligger i public-mappen



/*
app.get("/proxy", (req, res) => {
    fetch("https://www.google.com")
    .then(response => response.text()) // .text == den laver det til html
    .then(result => res.send(result));
});
*/

//& jeg skriver det ovenstående om til at skrive det med async await
// tilføjer async foran (req, res)
app.get("/proxy", async (req, res) => {
   const response = await fetch("https://www.google.com");
   const result = await response.text();
   res.send(result);
});

// GENERELT IKKE MIZ PROMISES OG AWAIT






app.listen(8000, (error) => {
    error ? console.log("Error in starting server:", error) : console.log("Starting on port 8000");
});