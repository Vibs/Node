/*
en funktion == en datatstruktur ()


+ anonym funktion == funktion der ikke har et navn
   - når en funktion bliver implementeret in-line - direkte

   fx: 
    const newGreetings = funtion(){
        console.log("Heeej");
    };

+ funktionreference
    - Man kan bruge funktionsreferencer (at en variabel referer til en funk) til fx callback-funktioner
    det er det som gør det smart
    - pass by reference == når man sender en funktion som param via dens reference



+ null vs undefined
    null == der er ikke noget
    undefined == er noget der ikke er defineret - noget som vi ikke har givet en værdi endnu
        fx: 
        let horse;
        console.log(horse); // == undefined

ingen overloading i js (man får ikke fejl og sådan noget)
    - man kan godt kalde funtkionen uden man giver den parametre
    - ELLER man kan kalde en funktion og give dem for mange parametre
    fx: 
    function interact(param1, param2){
        console.log(param1, param2);
    }
    interact(5, 6, 3, 6);


*/


//+ hoisting == funktioner bliver løftet op i toppen når det bliver runned
// det virker når vi kalder funktionen før vi definerer den, fordi det bliver hoisted
// MEN det giver mest mening at kalde funktionen bagefter - som er er pænere
greetings();

function greetings(){
    console.log("Hello World");
}

//+ callback funktion == en funktion der kalder en anden funktion

//+ en variabel kan referere til en funktion
// newGreetings == en funktion-reference
const newGreetings = greetings;

// vi kalder funktionen via variablen
newGreetings();

const anonymousFunctionGreeting = function(){
    console.log("Hello World");
}

// == i konsollen giver dette:
//      hello world
//      undefined 
// - fordi funktionen som den er sat til kaldes (derfor printer den helloworld), 
//      men returnerer ikke noget (derfor printer den void/undefined)
console.log("console.log(newGreetings())", newGreetings()); 

// printer: [Function: greetings]
console.log("console.log(newGreetings)", newGreetings);


// == callback funktion == den kalder en funktion

function interact(randFunc){

    randFunc();
}

// printer [Function: greetings]
interact(anonymousFunctionGreeting);

function poke(){
    console.log("You have been poked!!!");
}

interact(poke);

//TODO define a function inline in interact that does a new interaction


// can you remove more than I did in ll. 89-91 - JA, nednunder
// lambdaydtruk - 
interact(() => console.log("Kick"));


// ¤ week 37

// denne funktion tager imod en funktion og et andet parameter
//  
function interactWithSomeone(anyFunctionReference, name){
    anyFunctionReference(name);
}

function callBackLater(name){
    console.log(`Hi, ${name}. I'm ready to help you.`);
}

/// task: ændr callBackLater-funktionen til en one-liner
const callBackLaterOneLiner = name => {console.log(`Hi, ${name}. I'm ready to help you.`)};

// nu kan jeg altså enten kalde interactWithSomeone-funktionen med callBackLater-funk eller callBackLaterOneLiner-variabel
interactWithSomeone(callBackLater, "Vibe");
interactWithSomeone(callBackLaterOneLiner, "Bob");

///task: laver en homework-func som hjælper nogen senere
const helpWithHomework = name => {console.log(`Hi, ${name}. I don't know the answer either.`)};

// fordi vi ikke har givet name-var med, skriver den:
// Hi, undefined. I don't know the answer either
interactWithSomeone(helpWithHomework); 



// todo forstå lige denne her:
// her sender vi to funktioner med
interactWithSomeone(
    (innerFunction) => innerFunction(),
    () => console.log("inner function")
);







