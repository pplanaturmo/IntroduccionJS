//eventos del DOM clicks

const heading = document.querySelector(".heading");
const link = document.querySelector(".navegacion a");
const links = document.querySelectorAll(".navegacion a");

heading.addEventListener("click", changeText);
heading.addEventListener("dblclick", changeTextDblClick);
link.addEventListener("mouseenter", changeLink);

links.forEach((enlace) => {
  enlace.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("has hecho click");
    console.log(event);
    console.log(event.target);

    event.target.textContent = "clickityclick"

  });
});

function changeText() {
  heading.textContent = " new heading when clicked";
}

function changeTextDblClick() {
  heading.textContent = " new heading when double clicked";
}

function changeLink() {
  link.textContent = "red";
}
