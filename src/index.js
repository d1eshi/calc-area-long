// Variables
// let radio = 0

// Buttons
const btnArea = document.querySelector("button#area");

const btnLongitud = document.querySelector("button#longitud");

// Inputs
// Obtenemos el valor del input = radio
let inputRadio = document.querySelector("#radio-circuferencia");

// Containers
const containerCalc = document.querySelector(".container__calc");

eventListeners();
function eventListeners() {
  // Mostrar el input para el valor
  btnArea.addEventListener("click", displayCalc);
  btnLongitud.addEventListener("click", displayCalc);

}

// Funciones

// Muestra el calculo resuelto
function displayCalc(e) {

  limpiarHTML()


  if (e.target.classList.contains('btn-area')) {
    calcularArea()
  }
  if (e.target.classList.contains('btn-longitud')) {
    calcularLong()
  }
}

// Realiza el cálculo interno
function calcularArea() {
  let radio = 0
  radio = inputRadio.value
  // El cálculo para obtener el área
  let area = Math.PI * Math.pow(radio, 2);

  // Creamos el contenedor en dónde se mostrara el resultado
  let divArea = document.createElement('div')
  divArea.classList.add('calculo-area', 'calculos')
  divArea.innerHTML = `
    <p>El aréa de su circuferencia es <span id="span-resultado">${area}</span></p>
  `
  console.log(area);

  // Agregamos el contenedor del resultado al HTML base
  containerCalc.appendChild(divArea)
}

function calcularLong() {
  let radio = 0
  radio = inputRadio.value
  // El cálculo para obtener el área
  let longitud = 2 * Math.PI * radio;

  // Creamos el contenedor en dónde se mostrara el resultado
  let divLongitud = document.createElement('div')
  divLongitud.classList.add('.calculo-area')
  divLongitud.innerHTML = `
    <p>La longitud de su circuferencia es <span id="span-resultado">${longitud}</span></p>
  `
  console.log((longitud));

  // Agregamos el contenedor del resultado al HTML base
  containerCalc.appendChild(divLongitud)
}

// Se utiliza para no cargar dos resultados al mismo tiempo
function limpiarHTML() {
  while (containerCalc.firstChild) {
    containerCalc.removeChild(containerCalc.firstChild)
  }
}