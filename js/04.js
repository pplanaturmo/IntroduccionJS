//objetos

const product = {
    nameP: "nevera",
    weight: 87,
    hasFreezer: false,
}

// console.log(product);
// console.table(product);
// console.log(product.nameP);


//destructuring
const {nameP, weight,hasFreezer} = product

console.log(nameP);
console.log(weight);
console.log(hasFreezer);


//Objaect Literal Enhancement  cuando key : value tienen el mismo nombre en el newObject
const auth = true;
const user = "juan";
const newObject =  {
    auth,
    user,
}

console.log(newObject);