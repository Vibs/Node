// pakken express --> den leder i node_modules
const express = require("express"); 

const app = express();

// out of the box har express ikke nogen holdning til hvilken data den tager imod
// så med denne linje siger vi til express at vi den data vi modtager er i json-format
// express.json() == vi tilgår faktisk en body-parser - 
app.use(express.json()); 



// parseInt == please parse this if you can
// number == det her ER et number!!!

//! list til
let AUTO_INCREMENT = 1;

// det skal være const FORDI det som er const er var-navnet og datatypen
// MEN fordi jeg gerne vil overskrive den senere pga. filter, så har jeg lavet den til let alligevel - ligesom Anders også gjorde
let dankMemes = [{
    id: 1,
    title: 'My first dank meme',
    memeText: 'I\'m so dank'
}]



//# GET

app.get("/dankmemes", (req, res) => {
    res.send({
        memes: dankMemes
    });
});

app.get("/dankmemes/:id", (req, res) => {
    // ! det er bedst at bruge === - fordi så har den strict evaluation!!!
    const foundMeme = dankMemes.find(dankMeme => dankMeme.id === Number(req.params.id));
    // ! hvis den har fundet noget, vil den evalueres som truthy og den første valgmulighed sker: res.send(foundMeme)
    foundMeme ? res.send(foundMeme) : res.sendStatus(404);
});

//# post


// Notationer
// let hej = 1;
// præfix-notation: ++hej
// suffix-notation: hej++;


app.post("/dankmemes", (req, res) => {
    const dankMemesToAdd = req.body;

    dankMemesToAdd.forEach(dankMeme => {
        dankMeme.id = ++AUTO_INCREMENT;
        dankMemes.push(dankMeme);
    });

    res.send(dankMemesToAdd);
 
});

//# delete
// Anders synes det giver mening at returnere en statuskode ved delete-req
// 
app.delete("/dankmemes/:id", (req, res) => {
    let foundMemeToDelete = false;
    dankMemes.filter(dankMeme => {
        const doNotDelete = dankMeme.id != Number(req.params.id);
        return doNotDelete; 
    });
    res.send('hej')
});

//# patch

app.patch("/dankmemes/:id", (req, res) => {
    //det giver god mening at bruge map
    // og inde i map skal vi bruge spread-operator == ...req.body
    // return {...dankMeme, ...req.body} // på denne her måde bliver det overskrevet
    // return {...dankMeme, ...req.body, id:dankMeme.id}; == på denne her overskriver den ikke id'et!!!!!!!!! Omg I love it
    // jo længere til højre jo højere præcedens

    dankMemes = dankMemes.map(dankMeme => {
        if (dankMeme.id === Number(req.params.id)) {
            console.log(yassss);
        }
    })

});







// SKAL stå nederst
// hvis der er en error i serverens startup, vil error-var være undefined og ellers vil fejlen komme ind i error-var'en
const port = 8080;
app.listen(port, (error) => {
    // ! hvis error er undefined går den ikke ind i kroppen - fordi undefined er falsy
    if(error) console.log("error is: ", error);

    console.log(`The server is running on port ${port}`);
});


