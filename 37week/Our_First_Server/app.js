//! det er common practice at man kalder den app.js
// ! vi stopper programmet på ctrl + c
//  i toppen findes imports
// der er forskellige keywords som bliver brugt across forskellige sprog: import, using, require

const request = require("express");

// +det er en import af express - vi bliver nødt til at gemme det i en variabel, fordi ellers forsvincer det igen
// const express = require("express"); // req  uire-keywordet er en node-måde at importere på!!!!!
//console.log(express);

//+ instantiering: common practice at kalde den ap
// const app = express();
//console.log(app);

// ! import + instantiering i én
const app = require("express")();




// vi har lavet en SERVER!!!!

/// HTTP
/*
En http-request skal altid kun have én linje - resten er optional
     == http raw request == GET localhost:3000/ HTTP/1.0
         - det bliver sendt som bits gennem netværket og det bliver fortolket som plain text i et af lagene

*/

/* nu vil vi implementere endpointet for GET /!!!!
// jeg har tænkt mig at lave en app-route, som er en get-route
// param:
//      første: "/" == endpointet
//      andet: () => {} == callbackfunction
//            den tager imod to parametre

client-sever == client sender request --> server sender response
*/
// ! nu kan vi taste: localhost:3000 ind i browser og får et {} tilbage!!!!
// + endpoint
/* 
    endpoint == /
        er case insensitive - fordi 

 route == implementationen af et endpoint for et api
*/
app.get("/", (request, response) => {
    // api'et taget imod en request
    // api'et sender en response
    
    /* sender responset
    vi kan sende en hvilken som helst datatype - men vi sender lige json
    */
    response.send({});
});

app.get("/vibesRoute", (request, response) => {
    response.send({name: "Vibe Jensen"});
});

// endpoints er case insentive
app.get("/adventureTime", (request, response) => {
  
    response.send({isTimeToParty: true});
});

// + GET
/* 
 hvordan kan jeg sende data gennem en getRequest?
    - query parametre
        - key+value pairs
        - syntax: ?key=value
            https://www.google.com/search?hl=en&q=noget
                hl == key
                en == value
    - pathvariable = request parameter
        - /endpoint/{noget}


*/

// hvordan fungerer query params?
/*
Det er IKKE via endpointet (ligesom i spring) - men via request-variablen


når man så skriver: 
    http://localhost:3000/senddata?key=value
    får vi: 
    {key: 'value'} ud i konsollen

query-string-dataen man får ind er ALTID en string!
    hvis mna vil have det skal være en anden datatype skal man parse den
    fx: 
        http://localhost:3000/senddata?key=10
        her vil 10 blive læst som en string
*/
app.get("/sendData", (req, res) => {
    console.log(req.query);
    res.send({});
});

// task
// url: localhost:3000?key=value&name=Tobias&svar=Godt&nicenesslevel=10
app.get("/sendData", (req, res) => {
    res.send({svar : req.query.svar});
});

// task: gør det med request param/pathvar
// URL: localhost:3000/favouriteNumber/10
// det er et et nice tal hvis det er lige
app.get("/favouriteNumber/:param", (req, res) => {
    const number = req.params.param;

    res.send({favouriteNumber: number, 
    isNiceNumber: number % 2 === 0});
});


app.get("/frontpage", (req, res) => {
    res.send("Velkommen til frontpage, wow");
    // dette vil bive sendt som html
    // men det er 
    // res.send(<h1>Jeg kan godt sende html tilabge<h2>);
});

// ¤ 38seek
// oprettet cake.json
// ./ == HER hvor jeg er
//      - bruger vi når man skriver express er det første sted den kigger i node_modules 
//    - derfor skal man guide stien derfra 
// extensions er optional (dvs. .json) - man kunne altså godt sige: "./cake" - MEN DET ER SMART AT SKRIVE DET - der kunne jo ske fejl og det er også meget rart at 
const cake = require("./cake.json");

const messages = [];


/*
post -> url --> body --> raw --> vælg JSON fra listen --------> og så skriv den json som skal sendes


*/

app.post("/messages", (req, res) => {

    // ! når clienten sender data til os ligger det i http-body'en

     // hvorfor printer dette undefined? - fordi vi ikke har sat express op til at parse body som json
    //      ! DERFOR er det godt at vi ikke importerer og instantierer express i ét statement - vi skal i stedet:
    //          const express = require("express");
    //          const app = express();
    //          SÅ VI KAN SIGE:
    //              app.use(express.json());          
     //     Fordi vi skal bruge en bodyParser - men denne er nu inkluderet i Express - så der kan vi sig:
    //          app.use(express.json()); // == brug express til at parse min body som json
    //      Når vi har sat express til at parse body som json - så vil req.body i stedet returnere {} i stedet for undefined  
    console.log(req.body);

    // 

    res.send({

    });

})




/* vi siger at den skal lytte på port:
 + common practice == at skrive denne helt i bunden
 8080 er default development-porten for http??
 port 3000 er også god
 når vi kører denne fil nu, så vil terminalen hænge
      - er det et godt tegn? - tjek på: localhost:3000
        - den siger: cannot GET /
            == vi kan ikke gette /-endpointet == det er ikke implementeret - men vores server kører    
            - GET == http-metoden

*/
app.listen(3000);
