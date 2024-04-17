//eventos del DOM Inputs

const inputNombre = document.querySelector("#nombre");
const inputPassword = document.querySelector("#password")

inputNombre.addEventListener("input", (event) => {

    console.log(event.target.value.length)
})

inputPassword.addEventListener("input",fPassword)


function fPassword(){

    inputPassword.type = "text";

    setTimeout(()=> {
        inputPassword.type = "password"
    },200)
}