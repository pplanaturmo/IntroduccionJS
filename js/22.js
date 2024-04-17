//Optional chaining, (?)

const alumno = {
    nombre: "Juan",
    clase:"prog",
    aprobado: true,
    
}

console.log(alumno.examenes?.examen1)





// Nullish coalescing operator (??) devuelve el valor a la dcha cuando el de la izqda es nulo
//cuando pagina es null, devuelve el "2", si no 

let page = 4
const pagina = page ?? "2"

console.log(pagina);