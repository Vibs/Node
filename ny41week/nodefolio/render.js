/*
    hvordan læser man filer i node.js?
        1. readFile()
            - blokerer IKKE - har callback osv.
            - norm
        2. readFileSync()
            - er bare en enkelt linje - den blokerer
            - normal aksla vi ALDRIG vælge det synkrone som blokerer - men her gør det ikke noget, fordi det sker når serveren starter op
*/

// fs tillader at arbejde med filer på min comp - det er IKKE en javascript-ting fordi det er jo browser-client-side
// fs er altså en node-ting

// før havde vi følgende, men nu har vi lavet det om så vi bruger denne funktion i stedet
/*

const fs = require("fs"); 
const navbar = fs.readFileSync("./public/components/navbar/navbar.html", "utf-8");
const footer = fs.readFileSync("./public/components/footer/footer.html", "utf-8");

// restulatet af denne linje er en string!
const frontpage = fs.readFileSync("./public/pages/frontpage/index.html", "utf-8").replace("%%DOCUMENT_TITLE%%", "Nodefolio - Welcome");
const frontpagePage = navbar + frontpage + footer;
*/




const fs = require("fs"); 
const navbar = fs.readFileSync("./public/components/navbar/navbar.html", "utf-8");
const footer = fs.readFileSync("./public/components/footer/footer.html", "utf-8");


// dette er server-side rendering
function createPage(path, options) {

    // erstatter $$DOCUMENT_TITLE$$ som står i <title>-tagget i navbaren, men whatever brugeren har sent med i options
    // options?.title || "Nodefolio" == options ? options.title = "Nodefolio"
    return (navbar + fs.readFileSync(`./public/pages/${path}`, "utf-8") + footer ).replace("$$DOCUMENT_TITLE$$",  options?.title || "Nodefolio");
}


const obj = {};
/*
Dette vil IKKE crashe! Den vil bare give undefined - fordi den ikke har en title-værdi

Det crasher ikke, fordi vi HAR defineret objektet med {} - derfor kan vi altså godt undersøge om det har en værdi på title

Så længe obj er defineret og IKKE er undefined kan man undersøge om den har en værdi på den
*/
console.log(obj.title); 



// alle filer i js er et module
// i module ligger der attributten exports - og det er et objekt
//  derfor, når vi sætter createPage, skal det stå i curly brackets så det er et objekt
module.exports = {
    createPage
};