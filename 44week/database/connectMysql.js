
// her får jeg adgang til de variabler som jeg har oprettet i .env
import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql2/promise";
// man kan også sige: import mysql from "mysql2/promise"; - m

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


console.log(connection);

export default connection;


/*
Det er ikke særligt sikkert hvis dette bliver pushet op! 
Hvordan løser vi det?
    - vi lægger det ud i en fil, som vi så ikke pusher med op og så henter vi dem derfra
    - i gitignore blev der automatisk indsæt filer med slutningen: .env og .env.test - derfor kan vi lave en fil i root der hedder credentials.env
        - fordi så bliver den ignoreret
        - .env er noget som bliver kørt når man starter applikationen, og så injecter den variabler rundt omkring hvor der er brug for det 
        - vi skal installere pakken der hedder .env, som sørger for den injection-process
    - vi skal lave denne env så tidligt som muligt at den bare injecter det i 

    - how:
        - opret fil som bare hedder: .env
            - opret variabler derinde (ingen strings, ingen quotes, ingen tal)
        - skriv i app.js:
            dotenv.config(); // 
*/


/*
(async () =>  {
  
})()
*/






