//Array methods

const technologies = ["Html", "css", "Node.js", "React"];
const nums = [1, 2, 3, 4, 5, 6];

//Filter

const newArray = technologies.filter((tech) => tech !== "Html");

const result = nums.filter((number) => number === 3);

console.log(newArray);

console.log(result)


//includes

const resultado = technologies.includes("css")

console.log(resultado);

//some - devuelve si al menos uno cumple la condicion

const resultSome = nums.some(num => num > 7)

console.log(resultSome)


//Find - devuelve el primer elemento que cumple la condicion

const resultFind = nums.find(num => num >4)
console.log(resultFind);

//Every - devuelve true/false si todos cumplen

const resultEvery = nums.every(num => num <9)
console.log(resultEvery);

//Reduce - devuelve un acumulado del total

const resultReduce = nums.reduce((total,num) => {
console.log(total)

return total + num
},0)


//