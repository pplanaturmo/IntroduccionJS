//objetos Manipulacion

const product = {
    nameP: "nevera",
    weight: 87,
    hasFreezer: false,
}


//reescribir
product.hasFreezer = true;
console.log(product.hasFreezer);

//añadir nuevo atributo
product.img = "imagen.jpg";
console.log(product.img);

//Eliminar atributo
delete product.weight
console.log(product);


//bloquear objeto
Object.freeze(product)

//permite modificar atributos, pero no añadir o eliminar
Object.seal(product)