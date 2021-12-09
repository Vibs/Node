const router = require("express").Router();

const nodemailer = require("nodemailer");


// jeg har brugt følgende kommando for at installere nodemailer:
// npm install nodemailer


router.post("/api/contact", (req, res) => {
   

    // send en email til mig selv

    res.status().send({message: "OK"});

  

});


/*
I stedet for at den 
*/




module.exports = {
    router
};





