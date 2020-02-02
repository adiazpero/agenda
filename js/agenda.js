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
        'prioridad': 'diaria'

    },
    {
        'idTarea': 3,
        'titulo': 'Ir al teatro',
        'prioridad': 'mensual'

    },
    {
        'idTarea': 4,
        'titulo': 'Cita medica',
        'prioridad': 'mensual'

    }, {
        'idTarea': 5,
        'titulo': 'Clase pilates',
        'prioridad': 'mensual'

    }
];




function pintarTareas(listaTarea) {
    for (i = 0; i < listaTarea.length; i++) {
        document.getElementById('tareas').innerHTML += `<article id="${listaTarea[i].idTarea}" class="${listaTarea[i].prioridad}">
        <h2><i class="fas fa-pencil-alt"></i> ${listaTarea[i].titulo}</h2>
        <a href="#" onclick="eliminarTarea(${listaTarea[i].idTarea})" title="eliminar">Eliminar <i class="far fa-trash-alt"></i></a>
        </article>`;
    }
}



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

    limpiarPantalla();
    pintarTareas(listaTareasFiltrada);
}

prioridad.addEventListener('change', filtrarTareas);





function agregarTarea() {
    let idTarea = listaTareas.length;
    let titulo = document.getElementById('tituloTarea').value;
    let prioridad = document.getElementById('prioridad').value;

    if (prioridad == '') {
        alert('Debes seleccionar una prioridad para crear la tarea')
    } else {
        var tarea = {
            'idTarea': idTarea,
            'titulo': titulo,
            'prioridad': prioridad

        };
        listaTareas.push(tarea);

        limpiarPantalla();
        pintarTareas(listaTareas);

        document.getElementById("prioridadSelect").value = '';

    }
}

botonGuardar.addEventListener('click', agregarTarea);





var busqueda = document.querySelector('#search');
busqueda.addEventListener('keyup', buscarTarea);

function buscarTarea(e) {
    var key = e.keyCode;
    if (key == 13) {
        var buscarPalabra = e.target.value;
        var listaBusqueda = listaTareas.filter(tarea => tarea.titulo.toLowerCase().includes(buscarPalabra.toLowerCase()));

        limpiarPantalla();
        pintarTareas(listaBusqueda);
    }
}