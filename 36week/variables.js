// "use strict"; == kører filen i strict mode == der er flere regler for hvad man må og ikke må gør i filen
// det er bedre vi lærer at følge reglerne så vi bare IKKE gør de ting som strict mode ellers ville fange
// + 
// første obl. opg. == at lave en hjemmeside der dokumenterer alt det vi gennemgår

/* 
der er typeinference 
¤ const, let - IKKE brug var
const == man kan ikke ændre på variablens værdi senere i koden
det er assignment-delen som const guarder imod - det er referencedelen
*/
const message = "Hello World";
// dette kan man IKKE gøre
// message = "Hej";

//¤ let
// holder sig til sit scope

//¤var er globalt

// det
//+ når det er et const object
//, så er det REFERENCEN der er konstant og ikke key-value-ting der´bliver const
const person = {
    name: "Vibe"
};

// + man kan altså GODT
person.name = "Tobi";
person.height = 30;

// + man kan IKKE:
// person = {name = "Ninni"};

// her gøres så objektets values ikke kan ændres!!!
//const immutablePerson = Object.freeze(person);
person.name = "And"; // dette virker IKKE

// dette er en "totalt-global" variabel - den kan man se OVERDETHELE 
// vi bliver nødt til at sige const eller let (eller var, but not nice)
// ! ikke gør dette
//insaneVariable = "Nope nope fyfy"


//¤ scope
// dette er et nyt scope - det er bare en funktion uden
{
    const someValue = "noget";
    {
        // dette scope ved ikke noget om det andet - selvom det er indeni det andet
        const someValue = "noget andet"
        console.log(someValue); // udskriver noget andet
    }
    console.log(someValue); // udskriver noget

}  

// det gør 


// hvorfor ikke brug var: fordi det er globalt - 


// for-loop
// vi kommer ikke til at lave forloops i dette semester
for(let i = 1; i <=5; i++){
    console.log(i);
    
}


// et sekund tager længere tid end det tager at køre forloopet 6 gange
// den vil køre 1 sekund og så printe 666666
// så fordi at javascript udfører ting asynkront
//  så venter den altså ikke 1 sekund før den udfører næste iteration af loopet - den udfører næste iteration med det samme
// derfor bliver det printet
for(var i = 0; i <=5; i++){
    setTimeout(function runsAfterLoop(){
        console.log(i);
    }, 1000) // 1 sekund 
}




