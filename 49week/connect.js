//! vi skal IKKE blande express-kode med db-kode!!!!! Dvs. denne fil skal være for sig, for den handler forbindelsen til db
//!     så kan vi exportere db connectionen og 


import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";

// http:// == // == protokolidentitfier - 
// mongodb://
// Url som speciferer at protokolen er mongodb og 27017 er porten
//27017 == porten som vores db kører på vi kan se i command prompt når vi kører mongod.exe



const client = new MongoClient(url);

const dbName = "fish";

await client.connect();

// jeg giver den en client som den skal forbinde til
const db = client.db(dbName);


// vi henter den collection som vi har lavet i command prompt
const collection = db.collection("species");

// vi bruger .find() til at finde hvad der er i collectionen (tabellen i mysql)
// toArray() gør at dataen bliver proppet i et array

// jeg awaiter sådan så at når jeg bruger .find() bagefter, så er jeg sikker på at den ER blevet tilføjet til db
await collection.insertOne({type: "trout"});


const species = await collection.find().toArray();
console.log("heyeeeee", species);


//¤ assigment: create a new species (trout)





