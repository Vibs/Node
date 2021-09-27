// importerer selve biblio som gemmes i var
const express = require("express");
// instantierer
const app = express();



app.get("/getDay", (req, res) => {

    const date = new Date();
    res.send({
        // short i stedet for long == Tue
        // long == Tuesday
        // denne returnerer ugedagen: fx: Tuesday
        //day: new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)
        day: new Date().toLocaleDateString('da-DK', {weekday: 'long'})
    });

});






app.listen(8080);



