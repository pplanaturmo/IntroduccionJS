//objetos Destructuring de dos o mas objetos

const product = {
    nameP: "nevera",
    weight: 87,
    hasFreezer: false,
}


const client = {

    nameP : "Juan",
    premium: true,
    
}

const carrito = {
    quantity: 1,
    ...product //los ... (spread operator) colocan el contenido del objeto dentro del otro objeto
}

console.log(carrito);

const newObject = {
    ...product,
    ...client

}
console.log(newObject);

const newObject2 = Object.assign(product,client);
console.log(newObject2);