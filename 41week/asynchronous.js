
// hvis jeg kalder resolve == alt gik godt
// hvis jeg kalder reject == noget gik galt

new Promise((resolve, reject) => {
    resolve("Everything went well");
});

// hvordan får man fat i resolve-beskeden??? == man chainer .then på

new Promise((resolve, reject) => {
    resolve("Everything went well");
}).then(message => console.log("The message is", message));

// ting sker jo med delay over nettet, så nu vil jeg simulere det delay for eksemplets skyld
//  hvordan simulerer jeg et delay,? == setTimeout()

// den hopper ind i setTimeout --> venter 4 sek --> resolver --> så log i then
// reject = fulfiller promiset - men er i et rejected state - som så bliver pr
new Promise((resolve, reject) => {
    setTimeout(() => { 
        try {
            // hvis vi sætter denne ind, så udskriver den Error was OH NO?
            // reject("OH NO?");

            throw new Error("shit");
            resolve("Everything went well");
        } catch {
            reject("OH NOOO");
        }
    }, 4000);
})
.then(message => console.log("The message is", message))
// så denne catch reagerer på hvis der enten sker en error ELLER hvis promiset er i et rejected state - så kommer
.catch(errorMessage => console.log("Error was", errorMessage)); // catch == et promise-catch IKKE try-catch


// resolve og reject tager imod ét argument
//      - argumentet kan være en hvilken som helst type, og det er dette argument som bliver til det arugment som står i .then og i .catch
//      - dvs. 
//              i resolve("Everything went well") 
//                  her bliver "everything went well" til message i
//              .then(message => console.log("The message is", message))

//& task: Create a promise that resolves with "Noice" and rejects with "Damn". add try catch 
new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve("Noice");
        } catch {
            reject("Damn");
        }
    }, 3000);
})
.then(message => console.log("resolved", message))
.catch(error => console.log("rejected", error));


// jeg vil gerne lave en funktion som generelt returnerer en promise
// funktionen er wrapped i et promise - syntaktiskt returnerer jeg bare et promise, men jeg 

function nodeIsAMood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Yay");
            } catch {
                reject("Nope");
            }
        }, 3000);
    });
}

//& handle the promise:
nodeIsAMood().then(message => console.log("resolved:", message)).catch(error => console.log("rejected:", error));

// ELLER
// her bliver funktionen console.log ikke kaldt - det er en funktionsreference - og så kan den selv finde ud af at kalde funktionen med det ene argument som
nodeIsAMood()
.then(console.log)
.catch(console.log);

// promises er IKKE bedre end callbacks - fordi det promise ER et callback - det er KUN syntaktisk sugar == altså en nemmere/mere overskuelig måde at skrive det på


// async await

async function asynchronousFunction() {
    // pga. await så vil den 
    const message = await nodeIsAMood(); // await == lad være med at gå ned til næste linje før det promise som nodeIsAMood returnerer er fulfilled
    console.log("async func", message);
}

asynchronousFunction();


//! man kan også kalde den at top-level!! dvs. så funktionen deklareres som en unit og så kalder man den med det samme:
// IIFE kaldes det == Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
// det er godt 
(async function asynchronousFunction1() {
    // pga. await så vil den 
    const message = await nodeIsAMood(); // await == lad være med at gå ned til næste linje før det promise som nodeIsAMood returnerer er fulfilled
    console.log("async func", message);
})();

//! vi mangler dog at håndtere hvis den rejecter promiset!!!
// dette tager vi os så lige af ved at tilføje en try catch
(async function asynchronousFunction2() {
    // pga. await så vil den 
    try{
        const message = await nodeIsAMood(); // await == lad være med at gå ned til næste linje før det promise som nodeIsAMood returnerer er fulfilled
        console.log("async func", message);
    } catch(errorMessage) {
        console.log(errorMessage);
    }
})();


// der hvor der står listen port noget
// hvordan kører man et start-script?
// npm run start/def

// den sidste vil blive kørt først - fordi js læser alt det først  - det er fordi det der med error er noget callback som bliver kaldt senere


// proxy = tager imod en request og sender det videre 