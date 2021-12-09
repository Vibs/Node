// vi laver en dummy-router (Anders har selv fundet på det ord)
// Router() == en metode i express
const router = require("express").Router(); 

const projects = [
    {name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "HTML", "CSS"]},
    {name: "3rd semester project", category: "Java", technologies: ["Java", "HTML", "CSS"]},
    {name: "Cinema", category: "Java", technologies: ["Java", "HTML", "CSS", "Spring", "MySQL"]}
];

//hvis key og value er det samme, kan jeg undgå at skrive det hele : så kan jeg kun skrive det ord (som begge dele er).
//    på denne måde bliver denne linje: ...
console.log({ projects: projects });
//    til denne linje:
console.log({ projects });

// den kender til præcis det samme som 
// det er det samme som app (sortset) - det er bare ikke en server, ligesom app er
router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

// vi vil gerne eksportere routeren her, så 

// nu sender vi objektet router, som indeholder en router 
// - derfor skal vi når vi henter den i app.js, når vi får den ligesom 'pake den ud' ved at sige: 
//      - .router på det obj som den har modtager
module.exports = { 
    router 
};