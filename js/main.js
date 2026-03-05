document.addEventListener("DOMContentLoaded", function () {
let texto="Bienvenido";
let i=0;
const titulo=document.getElementById("titulo-bienvenida");
function escribirTexto() {
if (i < texto.length) {
titulo.innerHTML += texto.charAt(i);
i++;
setTimeout(escribirTexto, 100);
}
}
if (titulo) {
titulo.innerHTML = "";
escribirTexto();
}
const formulario = document.getElementById("form-contacto");
if (formulario) {
formulario.addEventListener("submit", function (e) {
e.preventDefault();
alert("Mensaje enviado correctamente");
});
}
const botonesPlanetas = document.querySelectorAll(".btn-planeta");
botonesPlanetas.forEach(function (boton){
boton.addEventListener("click", function (){
console.log("Planeta seleccionado:",boton.innerText);
});
});
});