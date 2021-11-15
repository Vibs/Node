// {} == destructuring

// i det gamle common js, 
// import { devourCake, hej } from "./cakeLib"; 
// vi vil gerne for en sikkerheds skyld skriver .js
import { devourCake, hej } from "./cakeLib.js"; 


// her kalder vi bib-metoden
const nomnomString = devourCake(10);
console.log(nomnomString);