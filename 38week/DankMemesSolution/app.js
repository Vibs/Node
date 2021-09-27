// pakken express --> den leder i node_modules
const express = require("express"); 

const app = express();


// det skal være const FORDI det som er const er var-navnet og datatypen 
const dankMemes = [{
    title: "Whaaat",
    meme: "Jeg er dank"
}];

app.get("/dankmemes", (req, res) => {
    res.send({
        memes: dankMemes
    });
});

// SKAL stå nederst
// hvis der er en error i serverens startup, vil error-var være undefined og ellers vil fejlen komme ind i error-var'en
const port = 8080;
app.listen(port, (error) => {
    // ! hvis error er undefined går den ikke ind i kroppen - fordi undefined er falsy
    if(error) console.log("error is: ", error);

    console.log(`The server is running on port ${port}`);
});


