const { arch } = require("os");

const favouriteThings = ["Missiii", "Cleo" ,"Kat kat", true, "\u2606"];

favouriteThings.forEach((thing, index, array) => console.log(thing, index, array));

favouriteThings.forEach(thing => console.log(thing));


// opgave: lav hver ting om til en string og kom på array
// jeg bruger altså den der `` til at lave om til string 
const favThingStrings = [];
favouriteThings.forEach(thing => favThingStrings.push(`Oooh I like ${thing}`)); // ! der findes en funktionel måde:

// det er smart, fordi jeg behøver ikke oprette den nye liste før - OG den har IKKE side effects!
// for-each'en havde den side effect at den rørte ved den eksternt oprettede favRhingStrings
// 
const newFavArry = favouriteThings.map(thing => `Oooh I like ${thing}`);


console.log(favouriteThings.filter(thing => thing == "Cleo"));






