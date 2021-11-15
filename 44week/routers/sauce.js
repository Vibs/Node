
// laver express-var
import express from "express";

// eller hvis man vil kalde variablen noget andet kan man sige:
// import {express as nogetAndet} from "express";

const router = express.Router();

router.get("/sauce", (req, res) => {
    res.send({type: "Bernaise"});
})


// vi vil genre lave én export for hele den her fil
// vi definerer en default export (man kan kun have én defaul export pr. fil)

export default router;

