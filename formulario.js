const formulario = document.querySelector(".formulario"); //Se cambia la declaración de la variable por const
//Se está llamando a un elemento con clase formulario, por lo que se cambia # por . y el nombre de la clase (formulario)

formulario.addEventListener("submit", (event) => { //se agrega una funcion que responde a un evento, en este caso, al envío de un formulario

  event.preventDefault();

  //se cambia la declaracion de variables var por const
  const n = formulario.elements[0];
  const e = formulario.elements[1];
  const na = formulario.elements[2];

  const nombre = n.value;
  const edad = e.value;
  const i = na.selectedIndex;
  const nacionalidad = na.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  } else {
    n.classList.remove("error");
  }

  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  } else {
    e.classList.remove("error");
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
});

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  const lista = document.getElementById("lista-de-invitados");
  const elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    const spanNombre = document.createElement("span");
    const inputNombre = document.createElement("input");
    const espacio = document.createElement("br");
    spanNombre.textContent = `${descripcion}: `;
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  const corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}


