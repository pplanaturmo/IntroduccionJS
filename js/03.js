
/**
 * commentcomment
 * 
*/

/*
comment
*/


//tipos de dato

//undefined

let client

console.log(typeof client);

//string

const text = "texto"

console.log(typeof text);

//number

const num = 12;
console.log(typeof num);

const num2 = 20.20
const num3 = 30
const num4 = "20"

console.log(typeof num4);

console.log(num4 +num2);
console.log(typeof (num4+num2));


//BigInt

const bigNum = BigInt(12123123131231231433413122132121212121122121)
console.log(typeof bigNum);


//Boolean

const flag = true;
console.log(typeof flag);

//null

const discount = null;
console.log(typeof discount);

//symbol

const firstSymbol = Symbol(30);
const secondSymbol = Symbol(30);

console.log(firstSymbol);
console.log(firstSymbol== secondSymbol);