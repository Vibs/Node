// her får jeg adgang til de variabler som jeg har oprettet i .env
import dotenv from "dotenv";
dotenv.config();

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




import connection from "./database/connectMysql.js";


app.get("/schools", async (req, res) => {
    const schools = await connection.execute("SELECT * FROM schools");
    /*array af to arrays, og det andet array indeholder nogle columns
    Hvis der findes noget med key'et schools, så ville denne linje destructure: const { schools } = ....
    Der findes en ANDEN destructuring syntax: som siger: det på 0 plads af schools : const [rows, columns] = .....*/
    
    res.send(schools);
});

app.post("schools", async (req, res) => {
    /**
    man behøver ikke skrive navnene på alle kolonnerne, hvis at man overfører en værdi til ALLE kolonner:
    hvis forholdet mellem kolonner i db og de data man overfører er det samme kan man bare skrive () og ikke (name, id, osv)
    denne linje er ikke sikker mod sql injection - vi tager bare råt imod whatever data vi får fra clienten:
        const school = await connection.execute(`INSERT INTO schools VALUES ('${req.body.schoolName}')`);
    Vi forventer at vi får et obj som sår sådan ud: {schoolName: "CBS"}
    Løsningen er at vi skal escape det! Via PreparedStatement!!! - vi indsætter de potentielt usikre data via spørgsmålstegn og så tjekker den selv for injection
    
     */


    const school = await connection.execute(`INSERT INTO schools VALUES ('${req.body.schoolName}')`);


})

/*
callback == en funktion som bliver giver som paramter til en anden funktion
= det at man giver en funktion ivdere til en anden funktion - og den bliver så MULIGVIS kaldt med det samme eller senere

*/




app.listen('8080', error => {
    error ? console.log("error", error) : console.log("Starting server on port", 8080);
})