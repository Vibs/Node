// vi har allerede installeret sqlite3 via: npm install sqlite3 sqlite
// 
import sqlite3 from "sqlite3";
// vi kalder open for at åbne en forbindelse til db
import { open } from "sqlite";


/*
// denne bliver kørt, når man kører denne fil
// denne danner en ny fil som hedder games.db
(async () => {
    const db = await open({
        filename: "./games.db", // det behøver ikke hedde .db men det kalder man det - man kan kalde det hvad som helt s- man behøver ikke ne extension - men 
        driver: sqlite3.Database
    });
    console.log(db);
})()
*/
// vi laver den om så den ikke er selveksekvrende - i stedet laver vi det itl en func som vi exporter


// her har vi lavet en asynkron func som returner et promise når vi forsøger at åbne en forbindelse til db
// await returnerer et promise - tror jeg
export async function connectSqlite() {
    return await open({
        filename: "./games.db",
        driver: sqlite3.Database
    });
}
