// vi importerer den func som vi har lavet i connectSqlite.filen
import { connectSqlite } from "./connecSqlite";

// vi skal altså køre DENNE fil med nodemon, for at connecte til db:
// nodemon.cmd createSqliteSchema.js

// detter er en SELVekstekverende func - dvs. når denne fil bliver kørt, kører denne --> connecter til db --> executer den statement der
(async () => {
    const dbConnection = await connectSqlite();
  
    // den dropper først games-tabellen 
    // vi SKAL have if exists på, fordi første gang vi opretter tabellen, vil den jo ikke findes og så ville vi få en fejl
    await dbConnection.exec("DROP TABLE IF EXISTS games");

    const gameSchemaSqlStatement = 
        `CREATE TABLE contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            genre TEXT,
            price DOUBLE)`;

    await dbConnection.exec(gameSchemaSqlStatement);
})

// vi kan bruge forskellige statements
/*
.run() == gør at vi kan køre ting
.exec() == gør at vi kan gøre ting

*/