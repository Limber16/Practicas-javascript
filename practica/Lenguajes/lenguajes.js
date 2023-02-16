'use strict'

var lenguajes = [];
var lenguaje;
function ingresarLenguajes(array){
    do{
        lenguaje = prompt("Ingrese un lenguaje: ");
        
        if(lenguaje!="e"){
            array.push(lenguaje);
        }else{
            array.push(lenguaje); 
            array.pop();
        }
        
    }while(lenguaje!="e");
}
function mostrarLenguajes(array){
    lenguajes.forEach((array,indice)=>{
        alert("<p>"+array+"</p>");
    });
}
function buscarlenguaje(array){
    var buscar = prompt("Que lenguaje desea buscar");
    var posicion = array.findIndex((lenguaje)=>lenguaje==buscar);
    if(posicion>-1){
        alert("Lenguaje encontrado en la posicion "+posicion);
    }else{
        alert("Lenguaje no encontrado");
   }
}
function ordenarLenguajes(array){
   array.sort();
}
function menu(){
    do{
    var opcion = parseInt(prompt("LENGUAJES DE PROGRAMACION\n\n"
                        +"1) INGRESAR\n"
                        +"2) MOSTRAR\n"
                        +"3) BUSCAR\n"
                        +"4) ORDENAR\n"
                        +"5) SALIR\n\n"
        +"Ingrese una opcion: "));
    switch(opcion){
        case 1:
            ingresarLenguajes(lenguajes);
            break;
        case 2:
            mostrarLenguajes(lenguajes);
            break;
        case 3:
            buscarlenguaje(lenguajes);
            break;
        case 4:
            ordenarLenguajes(lenguajes);
            break; 
        case 5:
            alert("Nos vemos...");
            break;       
        default:
            alert("Ingrese una opcion valida...")    
    }
}while(opcion!=5);
}
menu();    


