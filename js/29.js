//Manipular elementos HTML con JS

const heading = document.querySelector(".heading");
const links = document.querySelectorAll(".navegacion a");

heading.textContent = "Nuevo heading";
heading.id = "NewId";

const inputNombre = document.querySelector("#nombre");
inputNombre.value = "Por defecto";

console.log(inputNombre.classList);

inputNombre.dataset.nombre = "input";

links[0].textContent = "nuevo enlace";

links.forEach( link => link.textContent = "Cambiar text")