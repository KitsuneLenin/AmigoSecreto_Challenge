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

    let nombres = document.getElementById('amigo').value;

    if(nombres != ""){
        NombreAmigos.push(nombres);
    }

    return;
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
