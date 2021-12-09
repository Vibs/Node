// vi rbuger modulsystemet
// vi kan nu altså ikke bruge __dirname - derfor skal vi importere path
import express from 'express';
const app = express();

import path from 'path';

import escapeHTML from 'escape-html';

// denne vil bare lave det om til normal tekst!
console.log(escapeHTML("<script>Evil evil script</script>"));
// escapeHTML tager KUN imod strings og IKKE objekter! så hvis man skal gøre det på et obj, skal man gøre det på de enkelte string-værdier 
// vi skal også bruge escapeHTML når vi gemmer data ned i db


import http from 'http';
// vi har bare taget taget app og wrappet den ind i en httpserver instans
// fordi vi vil gerne give io en http-wrappet server - det vil den gerne have
const server = http.createServer(app);


import { Server } from "socket.io";
/*
 io er det globale namespace (tror jeg han sagde) for 
 vi bliver nødt til at gøre det her, fordi 
 route==== socket.io/socket.io.js
  - den udstiller socket.io-biblioteket
   - ellser søg på: socket io client (her vil man bare installere det i react)
 vi kan nu bruge io til at skabe en forbindelse
*/
const io = new Server(server);


/*
to metoder i io: on og emmit:
on == der er et øre der lytter til et event - så on eventet, så sker der noget - derfor er andet argument i on: callback
    - 1. arg: eventet
    - 2. arg: callback

emmit
    - 1. arg: eventet
    - 2. arg: data
*/


// socket = et obj som repræsenterer client-socket - hver socket har sit eget unikke id
// socket = er socket'en efter mit callback
// hver tabb tæller som en client - så for hver tab 
io.on("connection", (socket) => {
    console.log(socket.id);

    
    socket.on("diconnect", () => console.log("Goodbye!!"));

    // color == den data vi har fået sendt fra client
    socket.on("a client chose a colour", (color) => {
        console.log(color);
        // vi sender farven tilbage til clienten igen
        // den emitter kun den DEN SPECIFIKKE SOCKET - socket == en tab
        socket.broadcast.emit("the server is sending the new color", color);
        // io.emit == sender til ALLE sockets
        // socket.broadcast.emit == broadcaster den ud til alle andre sockets - men ikke til den selv
        // socker.emit == sneder kun tilbage til DEN socket

    })

})


/*
default events:
    - connection
    - disconnect

*/

// vi opretter nu ny mappe "public" --> ny fil "colours.html", hvor vi laver et script

// vi kan stadig bruge app - fordi den bliver brugt til at skabe server-wrapper

app.get("/", (req, res) => {
    res.sendFile(path.resolve() + "/public/colours.html");
})





/* I STEDET FOR AT SIGE:
app.listen('8080', (error) => {
    error ? console.log("Error in starting server", error) : console.log("Starting server on PORT 8080");;
})
    ... for at starte serveren op, (som vi gør når vi starter express, skal vi sige:)
*/

server.listen('8080', (error) => {
    error ? console.log("Error in starting server", error) : console.log("Starting server on PORT 8080");;
})