//ternarios


const auth = true

const saldo = 1000
const pagar = 1200
const tarjeta = true

console.log(auth ? "Dentro" : "fuera")
console.log(pagar > saldo ? "pobre" : "puedes pagar")

saldo > pagar ?
console.log("puedes pagar") : 
    tarjeta ?
    console.log("si puedes pagar"):
    console.log("no, no puedes pagar")