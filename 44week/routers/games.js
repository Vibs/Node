import express from "express";
const router = express.Router();


import { connectSqlite } from "../database/connectSqlite.js";




//todo denne skal hente alle spil op
router.get("/games", async (req, res) => {
    const dbConnection = await connectSqlite();


    // den dropper først games-tabellen 
    // vi SKAL have if exists på, fordi første gang vi opretter tabellen, vil den jo ikke findes og så ville vi få en fejl
    const games = dbConnection.all("SELECT * FROM games");

    res.send(games);
});

// denne får game fra body
// todo denne skal lægge et spil ned
router.post("/games", async (req, res) => {
    const dbConnection = await connectSqlite();

    const gameToCreate = req.body;
    console.log(gameToCreate);

    // vi hardcoder lige at den indsætter et spil i db - bare så vi har noget data
    dbConnection.run("INSERT INTO games ('title') VALUES ('test title 2')"); // så indsætter den 3 obj med KUN titel
    

    res.send();
})

export default router;