//objetos Destructuring de dos o mas objetos

const product = {
    nameP: "nevera",
    weight: 87,
    hasFreezer: false,
}


const client = {

    nameP : "Juan",
    premium: true,
    address : {
        street: "calle",
        house: 1
    }
}

const {nameP} = product
const {nameP: nameClient, address: {street}} = client

console.log(nameP);
console.log(nameClient);
console.log(street);