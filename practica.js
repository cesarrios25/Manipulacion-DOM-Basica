const h1 = document.querySelector("h1");
const form = document.querySelector("#form")
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#resultado");

// btn.addEventListener("click", btnOnClick);

// con parseInt me da un resultado asi hayan errores de escritura.
// function btnOnClick () {
//     console.log(parseInt(input1.value) + parseInt(input2.value))
// }

// con Number me da un resultado y si hay error de escritura me dara error.
// function btnOnClick () {
//     console.log(Number(input1.value) + Number(input2.value))
// }

// function btnOnClick () {
//     const sumaInputs = input1.value + input2.value;
//     pResultado.innerText = "El resultado es: " + sumaInputs;
// }

// function btnOnClick () {
//     const sumaInputs = (Number(input1.value) + Number(input2.value));
//     pResultado.innerText = "El resultado es: " + sumaInputs;
// }

// //Este siguiente codigo es la imagen de platzi insertada desde javascript.

// const span = document.querySelector("#imagen");

// const img = document.createElement("img");
// img.setAttribute("src", "https://static.platzi.com/static/images/conf/logo_black@2x.png");
// console.log(img)

// imagen.innerHTML = "";
// imagen.appendChild(img);


// este bloque de codigo es cuando tenemosun formulario, ya que por default el boton es tipo submit

// form.addEventListener("submit", sumarInputvalues);

// function sumarInputvalues(event) {
//     event.preventDefault();

//     const sumaInputs = (Number(input1.value) + Number(input2.value));
//     pResultado.innerText = "El resultado es: " + sumaInputs; 
// }


// este bloque de codigo manda un alert cuando movemos el mouse.
// form.addEventListener("mouseover", enviarFormulario)

// function enviarFormulario(e){
//     e.preventDefault();

//     alert("virus")
// }


