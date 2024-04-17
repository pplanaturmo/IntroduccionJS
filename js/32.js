//Eventos del DOM - Submit

const form = document.querySelector("#formulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  const nombre = document.querySelector("#nombre").value;
  const password = document.querySelector("#password").value;

  //prevenir nuevas alertas
  const alertaPrevia = document.querySelector(".alerta");

  alertaPrevia?.remove();

  const alerta = document.createElement("div");

  alerta.classList.add(
    "alerta",
    "text-white",
    "uppercase",
    "text-sm",
    "text-center",
    "p-d",
    "font-black"
  );

  if (nombre === "" || password === "") {
    alerta.textContent = "Todos los campos son obligatorios";
    alerta.classList.add("bg-red-500");
  } else {
    alerta.textContent = "Todo correcto";
    alerta.classList.add("bg-green-500");
  }

  form.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 2000);
});
