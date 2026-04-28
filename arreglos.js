let edadesIzquierdo =[]; // asi se crea un arreglo
let edadesDerecho =[];
 
function agregarEdad(){
 
    let edad = parseInt(document.getElementById("edad").value);
    if(!isNaN(edad)){
        edadesIzquierdo.push(edad);
 
    }else{
        alert("Por favor ingrese un numero valido ");
    }
    pintarArregloIzquierdo();
 
}
 
function eliminarIzquierdo(indice){
    edadesIzquierdo.splice(indice , 1);
    pintarArregloIzquierdo();
}
 
function pintarArregloIzquierdo(){
    let tbody=document.getElementById("tablaIzquierda");
    let contenidoTabla="";
    let edadRecuperada;
    for(let i=0; i<edadesIzquierdo.length; i++){
        edadRecuperada=edadesIzquierdo[i];
        contenidoTabla+="<tr>";
        contenidoTabla+="<td>"+edadRecuperada +"</td>";
        contenidoTabla+= "<td><button class='btn-eliminar'onclick= eliminarIzquierdo( "+ i +") >Eliminar</button> </td><td><button class='btn-mover'>➜</button></td>";
        contenidoTabla+="</tr>";
    }
    tbody.innerHTML=contenidoTabla;
 
}

function eliminarDerecha(indice) {
    edadesDerecho.splice(indice , 1);
    pintarArregloDerecho();
}

function pintarArregloDerecho() {
    let tbody=document.getElementById("tablaDerecha");
    let contenidoTabla="";
    let edadRecuperada;
    for(let i=0; i<edadesDerecho.length; i++){
        edadRecuperada=edadesDerecho[i];
        contenidoTabla+="<tr>";
        contenidoTabla+="<td>"+edadRecuperada +"</td>";
        contenidoTabla+= "<td><button class='btn-eliminar'onclick= eliminarDerecha( "+ i +") >Eliminar</button> </td><td><button class='btn-mover'>⬅</button></td>";
        contenidoTabla+="</tr>";
    }
    tbody.innerHTML=contenidoTabla;
}

function moverHaciaDerecha(indice) {
    let edad=edadesIzquierdo[indice];
    edadesDerecho.push(edad);
    edadesIzquierdo.splice(indice, 1);
    pintarArregloDerecho();
    pintarArregloIzquierdo();
}

function moverHaciaIzquierda(indice) {
    let edad=edadesDerecho[indice];
    edadesIzquierdo.push(edad);
    edadesDerecho.splice(indice, 1);
    pintarArregloDerecho();
    pintarArregloIzquierdo();
}