const express = require("express");
const app = express();

// express ved ikke hvor filerne uden vi definerer denne
app.use(express.static("public"));


// ¤ vi tager imod data fra form på /contact
// konvereterer den data som kommer til mig, bliver fortolket som json()
app.use(express.json());
// Her gør vi så den kan parse formdata til json
// urlencoded == det er sådan data fra en form bliver sendt afsted
app.use(express.urlencoded({extended: true})); // DENNE ekstra linje supporter formes // den er nødvendig for at man kan parse form-data

//! import and use reoutes:
/* 
i node er hver fil et modul for sig
  - i hvert modul er der usynligt i topniveau: 
    - function(module, export, __dirname, __file) - ikke helt præcis dette
    - det er derfor vi har adgang til dem!!
*/

/* 
vi skal IKKE gøre sådan her:
    app.use("/v1", projectsRouter.router);
her bliver endpointet: localhost:8080/v1/projects
    og det er ikke særligt tydeligt
*/
const projectsRouter = require("./routers/projects.js");
app.use(projectsRouter.router);


const greetingsRouter = require("./routers/greetings.js");
app.use(greetingsRouter.router);


const balladeRouter = require("./routers/ballade.js");
app.use(balladeRouter.router);


const contactRouter = require("./routers/contact.js");
app.use(contactRouter.router);

// createPage er her hele objektet, som vi eksporeterer nederst i render.js-filen
//const createPage = require('./render.js');


/*

//¤ en anden måde at sende ting tilbage 
// kan man sende det så det bliver til 
*/


const options = {

};

// vi kan bruge destucturing til at få fat i funktionen som er inde i objektet vi får leveret tilbage via require('./render.js)
const { createPage } = require('./render.js');

const frontpagePage = createPage("frontpage/frontpage.html", {title: "Nodefolio | Welcome"});
const projectsPage = createPage("projects/projects.html", {title: "Projekter"});
const contactPage = createPage("contact/contact.html", {title: "Kontakt"});
const cvPage = createPage("cv/cv.html", {title: "CV"});

/*
const data = [1, 2, 3, 4];

// vi skal bruge JSON.stringify(data) fordi at den skal lave arrayet om til en string og det kan den ikke bare af sig selv
const noget = `<script>
const data  = ${JSON.stringify(data)};
console.log(data);
</script>`
*/



app.get("/", (req, res) => {
    res.send(frontpagePage); // denne bliver parset som html
});

app.get("/projects", (req, res) => {
    res.send(projectsPage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
});

app.get("/cv", (req, res) => {
    res.send(cvPage);
})











// pricess.env == sådan tilgår man miljø-variabler
const PORT = process.env.PORT || 8081;

app.listen(PORT, (error) => {
    error ? console.log("Error:", error) : console.log("Server is running on", PORT);
})




