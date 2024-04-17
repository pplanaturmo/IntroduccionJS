const technologies = ["Html", "css", "Node.js", "React"];

console.table(technologies);

technologies[3] = "next,js";
console.table(technologies);

// technologies[10] = "React";
// technologies.push("React") NO SE RECOMIENDA, ALTERA EL ARRAY

const newTechnologiesArray =[...technologies,'React']
console.table(newTechnologiesArray);

// technologies.shift()  tambien muta el array, no recomendado
const newTechnologiesArray2 = technologies.filter(function(tech){
    if (tech !== "Html"){
        return tech
    }
})

console.log(newTechnologiesArray2)

//
const newTechnologiesArray3 = technologies.map(function(tech){
   if (tech === "Node.js"){
    return "Nest.js"
   }else{
    return tech
   }
})
console.log(newTechnologiesArray3)
