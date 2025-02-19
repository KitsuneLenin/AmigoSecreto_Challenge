// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
<button class="button-add" onclick="agregarAmigo()">Añadir</button>

Clase: button-add
Este boton añadira los nombre de "amigos" a la lista.
---
<button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">

Clase: button-draw
Este boton sorteara en de forma alazar un nombre de los cuales fueron digitados.
*/

let amigos = []; //Lista de nombres

// Agregar nombres

function agregarNombre() {
    let inputAmigo = document.getElementById("amigo"); //Obtiene el input de forma correcta
    let nombre = inputAmigo.value.trim(); // Obtiene el valor ademas de eliminar los espacios en blanco por el .trim

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ya existe ese nombre en la lista.");
        return;
    }

    amigos.push(nombre);    //se añade a la arraylist
    actualizarLista();      //Actualiza la lista de los amigos añadidos
    inputAmigo.value = "";  // Limpiar el input-entrada

}

// Visualizar la lista

function actualizarLista(){
    let listaNombres = document.getElementById('listaNombres'); //obtiene al ul
    listaNombres.innerHTML = ""; // Limpiar lista antes de actualizar

    //li sera el elemento de lista respetando la arraylist
    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    });
}


// Sorteo aleatorio

function sortearAmigo(){

    // si la lista esta vacia muestra la alerta
        if (amigos.length === 0) {
        alert("No ingresaste ningun nombre en la lista. Para iniciar debes ingresar al menos un nombre")
        return;
    }

    // Elegir un índice aleatorio
    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceGanador];

    // Mostrar el resultado
    document.getElementById("resultado").textContent = `${ganador}`;

    // Eliminar el ganador de la lista
    amigos.splice(indiceGanador, 1);

    // Actualizar la lista visual
    actualizarLista();
}

//EXTRA - quise añadir el boton de reiniciar el sorteo.

function reiniciarSorteo() {
    amigos = []; // Vaciar la lista de nombres
    document.getElementById("listaNombres").innerHTML = "";  // Vaciar lista en pantalla
    document.getElementById("resultado").textContent = "";  // Limpiar resultado
    document.getElementById("listaNombres").value = "";       // Limpiar input

    alert("El sorteo ha sido reiniciado.");
}
