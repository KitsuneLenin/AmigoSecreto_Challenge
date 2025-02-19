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

let NombreAmigos = [];

// Agregar nombres

function agregarAmigo(){

    let inputAmigo = document.getElementById('amigo'); //Obtiene el input de forma correcta
    let nombres = inputAmigo.value.trim(); // Obtiene el valor ademas de eliminar los espacios en blanco por el .trim

    if(nombres != ""){
        NombreAmigos.push(nombres);

        //Limpia la entrada
        inputAmigo.value = "";

        //Actualiza la lista de los amigos añadidos
        mostrarListaAmigos();
    }

    return;
}

function mostrarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    //li sera el elemento de lista respetando la arraylist
    NombreAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


// Validar entrada

function validarIngresoNombres(){

}


function verificarIntento(){ //tambien llamamos IntentoDeUsuario del boton INTENTAR
    
}



// Visualizar la lista

function listaDeNombres(){

}

// Sorteo aleatorio

function sorteoAleatorioDeNombres(){

}
