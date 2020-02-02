var listaTareas = new Array();
//var tarea = document.querySelectorAll('tareas');
var prioridad = document.querySelector('#prioridadSelect');
var botonGuardar = document.querySelector('#guardar');


listaTareas = [{
        'idTarea': 0,
        'titulo': 'Estudiar Javascript',
        'prioridad': 'urgente'

    },
    {
        'idTarea': 1,
        'titulo': 'Dormir',
        'prioridad': 'diaria'

    },
    {
        'idTarea': 2,
        'titulo': 'Salir a comer',
        'prioridad': 'mensual'

    },
    {
        'idTarea': 3,
        'titulo': 'vamonos',
        'prioridad': 'mensual'

    },
    {
        'idTarea': 4,
        'titulo': 'vamonos',
        'prioridad': 'mensual'

    }, {
        'idTarea': 5,
        'titulo': 'vamonos',
        'prioridad': 'mensual'

    }
];

/*<article id="1" class="diaria">
<h2>Titulo de la tarea 1 - Esta tarea es DUMMY</h2>
<a href="#" title="eliminar">Eliminar</a>
</article>*/



function pintarTareas(listaTarea) {
    for (i = 0; i < listaTarea.length; i++) {
        document.getElementById('tareas').innerHTML += `<article id="${listaTarea[i].idTarea}" class="${listaTarea[i].prioridad}">
        <h2>${listaTarea[i].titulo}</h2>
        <a href="#" onclick="eliminarTarea(${listaTarea[i].idTarea})" title="eliminar">Eliminar</a>
        </article>`;
    }
}




//pId = ${listaTareas[i].idTarea}
function eliminarTarea(pId) {
    for (i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].idTarea == pId) {
            listaTareas.splice(i, 1);
            limpiarPantalla();
            pintarTareas(listaTareas);
        }
    }
}




function limpiarPantalla() {
    document.getElementById('tareas').innerHTML = '';
}




function filtrarTareas() {
    var listaTareasFiltrada = new Array();
    var prioridadSelect = document.getElementById("prioridadSelect").value;
    var contador = 0;

    for (tarea of listaTareas) {
        if (tarea.prioridad == prioridadSelect || prioridadSelect == '') {
            listaTareasFiltrada[contador] = tarea;
            contador++;
        }
    }
    console.log(listaTareasFiltrada);
    limpiarPantalla();
    pintarTareas(listaTareasFiltrada);
}

prioridad.addEventListener('change', filtrarTareas);





function agregarTarea() {
    let idTarea = listaTareas.length;
    let titulo = document.getElementById('tituloTarea').value;
    let prioridad = document.getElementById('prioridad').value;

    var tarea = {
        'idTarea': idTarea,
        'titulo': titulo,
        'prioridad': prioridad

    };
    listaTareas.push(tarea);

    limpiarPantalla();
    pintarTareas(listaTareas);
}

botonGuardar.addEventListener('click', agregarTarea);






var busqueda = document.querySelector('#search');
busqueda.addEventListener('keyup', buscarTarea);

function buscarTarea(e) {
    var buscarPalabra = e.target.value;
    var listaBusqueda = listaTareas.filter(tarea => tarea.titulo.toLowerCase().includes(buscarPalabra.toLowerCase()));

    limpiarPantalla();
    pintarTareas(listaBusqueda);
}






function capturarIntro() {

}



/*
var botones = document.querySelectorAll('#menu li a');

for (boton of botones) {
    boton.addEventListener('click', capturarBoton);
}

function capturarBoton(event) {
    event.preventDefault();

    let seccion = event.target.innerText.toLowerCase();

    var secciones = document.querySelectorAll('.contenedor section');
    //primero pongo todas a none

    secciones.forEach(elemento => elemento.style.display = "none");

    //la que toco a block
    document.getElementById(seccion).style.display = "block";


}

*/