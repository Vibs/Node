// --------------------------------------
//¤ Variables, strings, numbers, floats
// --------------------------------------
//// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

// bruger IKKE + fordi så modificerer man dataen - det er godt at bruge komma
console.log("My first name is", firstName, "and my last name is", lastName);

//* ELLER en nicere måde med string templates:* shift + lille streg
// + string template = med et dollartegn kan man have et programmeringsudtryk
console.log(`My first name is ${firstName} and my last name is ${lastName}`);

console.log(`Typen på 2 er: ${typeof 2}`);

// --------------------------------------
//// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2

// Number() == GØR DET TIL ET TAL, BASTA - Det ER et tal!!!!
console.log(Number(year) + number);
// *ELLER*
// parseInt() == please, js, parse den til int så godt som du kan
// den stopper når den pludselig møder noget som ikke er et tal
// så: console.log(parseInt("102h2")); == 102 - fordi den møder h og så stopper
console.log(parseInt(year) + number);

// eller: et + parser det til et number
// == det er en prefix operator
console.log(+ year + number);
// her vil 8 blive printet som typen number
console.log(+"8");



// --------------------------------------
