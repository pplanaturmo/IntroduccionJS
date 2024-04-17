//evaluacion de cortocircuito el operador decide si es true o false

const auth = true
if(new Date) {
    console.log("truthy");
}else{
    console.log("falsy");
}

const user = {}

auth && console.log("Auth user")