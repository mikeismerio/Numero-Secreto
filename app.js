let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let valorInput = document.getElementById("valorUsuario").value;
  let numeroDeUsuario = parseInt(valorInput);

  if (isNaN(numeroDeUsuario) || numeroDeUsuario < 1 || numeroDeUsuario > 10) {
    asignarTextoElemento(
      "p",
      "❌ Por favor, introduce un número válido entre 1 y 10."
    );
    limpiarCaja();
    return;
  }

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `🎯 ¡Acertaste el número! <br>
           ${intentos} ${intentos === 1 ? "intento" : "intentos"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    let mensaje =
      numeroDeUsuario > numeroSecreto
        ? "🔻 El número secreto es menor"
        : "🔺 El número secreto es mayor";
    asignarTextoElemento("p", mensaje);
  }

  intentos++;
  limpiarCaja();
}

function limpiarCaja() {
  let campoInput = document.querySelector("#valorUsuario");
  campoInput.value = "";
  campoInput.focus(); // Autoenfoque para siguiente intento
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function reiniciarJuego() {
  limpiarCaja();
  asignarTextoElemento("p", "Introduce un número del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

// Escucha tecla Enter en el campo input
document
  .getElementById("valorUsuario")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      verificarIntento();
    }
  });

// Mensajes iniciales
asignarTextoElemento("h1", "🎲 SecretNumber");
asignarTextoElemento("p", "Introduce un número del 1 al 10");

