const technologies = ["Html", "css", "Node.js", "React"];
console.log("--for--");
for (let i = 0; i < technologies.length; i++) {
  console.log(technologies[i]);
}

console.log("--forEach--");
//forEach
technologies.forEach(function (technology) {
  console.log(technology);
});

console.log("--Map--");

//map diferencia con el forEach, genera un array nuevo
const techMap = technologies.map(function (technology) {
  return technology;
});
console.log(techMap)

//for ... of ejecuta un bloque de codigo por elemento


console.log("--for of--");

for(let tech of technologies){

    console.log(tech)


}
