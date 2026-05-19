let edadesIzquierdo = []; 
let edadesDerecho = [];
 
function agregarEdad(){
    let edadInput = document.getElementById("edad");
    let edad = parseInt(edadInput.value);

    if(!isNaN(edad)){
        edadesIzquierdo.push(edad);
        edadInput.value = ""; // Limpia la caja de texto después de agregar
    } else {
        alert("Por favor ingrese un número válido");
    }
    pintarArregloIzquierdo();
}
 
function eliminarIzquierdo(indice){
    edadesIzquierdo.splice(indice, 1);
    pintarArregloIzquierdo();
}
 
function pintarArregloIzquierdo(){
    let tbody = document.getElementById("tablaIzquierda");
    let contenidoTabla = "";
    let edadRecuperada;

    for(let i = 0; i < edadesIzquierdo.length; i++){
        edadRecuperada = edadesIzquierdo[i];
        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + edadRecuperada + "</td>";
        contenidoTabla += "<td><button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ")'>Eliminar</button></td>";
        // CORRECCIÓN: Se agregó el evento onclick para mover hacia la derecha
        contenidoTabla += "<td><button class='btn-mover' onclick='moverHaciaDerecha(" + i + ")'>➜</button></td>";
        contenidoTabla += "</tr>";
    }
    tbody.innerHTML = contenidoTabla;
}

function eliminarDerecha(indice) {
    edadesDerecho.splice(indice, 1);
    pintarArregloDerecho();
}

function pintarArregloDerecho() {
    let tbody = document.getElementById("tablaDerecha");
    let contenidoTabla = "";
    let edadRecuperada;

    for(let i = 0; i < edadesDerecho.length; i++){
        edadRecuperada = edadesDerecho[i];
        
        // CORRECCIÓN: Estructura corregida según el PDF (Mover -> Valor -> Eliminar)
        contenidoTabla += "<tr>";
        // Columna 1: Botón Mover
        contenidoTabla += "<td><button class='btn-mover' onclick='moverHaciaIzquierda(" + i + ")'>⬅</button></td>";
        // Columna 2: Valor
        contenidoTabla += "<td>" + edadRecuperada + "</td>";
        // Columna 3: Botón Eliminar
        contenidoTabla += "<td><button class='btn-eliminar' onclick='eliminarDerecha(" + i + ")'>Eliminar</button></td>";
        contenidoTabla += "</tr>";
    }
    tbody.innerHTML = contenidoTabla;
}

function moverHaciaDerecha(indice) {
    let edad = edadesIzquierdo[indice];
    edadesDerecho.push(edad);
    edadesIzquierdo.splice(indice, 1);
    
    // Volvemos a pintar ambas tablas para reflejar los cambios
    pintarArregloDerecho();
    pintarArregloIzquierdo();
}

function moverHaciaIzquierda(indice) {
    let edad = edadesDerecho[indice];
    edadesIzquierdo.push(edad);
    edadesDerecho.splice(indice, 1);
    
    // Volvemos a pintar ambas tablas para reflejar los cambios
    pintarArregloDerecho();
    pintarArregloIzquierdo();
}