// fordi vi har sagt: "type": "module" i package.json skal vi nu sige:

import express from "express";
// i stedet for: const express = require("express");

const app = express();

// vi siger den skal lede efter filerne i publicmappen
app.use(express.static("public"));

app.use(express.json()); // siger at vi kan parse den data vi får som json
app.use(express.urlencoded({ extended: true})); //  siger at vi kan parse den data vi får som json som from-url-encoded




app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

// hvordan struktuerer man imports i js?
// - i js kan vi have import-statements over det hele
// - man kan have det: i toppen, i afdelinger hvor det logisk passer ind, i sådan en funktion
// det er faktisk godt IKKE at importere ALTING det hele på én gang 
//    - derfor kan man komme nogle import-statements ind i en funktion og så kalde den:
/* 
function valid() {
    import sauceRouter from "./routers/sauce.js";
}
*/
//


// vi importerer /sauce-routeren
// vi kan kalde varibalen vi importerer hvad som helst fordi vi i sauce.js har lavet en DEFAULT export! - så d
import sauceRouter from "./routers/sauce.js";

// vi bruger routeren vi har importeret - så nu kan man tilgå det endpoint som vi har defineret i sauce.js
app.use(sauceRouter);




import gamesRouter from "./routers/games.js";

app.use(gamesRouter);




app.listen('8080', error => {
    error ? console.log("error", error) : console.log("Starting server on port", 8080);
})