'use strict'

principal();

function principal(){
do{
var opcion = parseInt(prompt("1-Operaciones\n"+
				"2-Salir\n",0));

switch(opcion){
	
	case 1:
		operaciones();
	break;
	case 2:
	alert("Nos vemos");
	break
	default: 
	alert("Escoja una opcion válida");
	break;
}
}while(opcion!=2);
}
function sumar(){
	var numero1 = parseInt(prompt("Ingrese el numero1: ",0));
	var numero2 = parseInt(prompt("Ingrese el numero2: ",0));
	var suma = numero1+numero2;
	alert("La suma es: "+suma); 
}
function restar(){
	var numero1 = parseInt(prompt("Ingrese el numero1: ",0));
	var numero2 = parseInt(prompt("Ingrese el numero2: ",0));
	var resta = numero1-numero2;
	alert("La resta es: "+resta); 
}
function dividir(){
	var numero1 = parseInt(prompt("Ingrese el numero1: ",0));
	var numero2 = parseInt(prompt("Ingrese el numero2: ",0));
	var divi = numero1/numero2;
	alert("La division es: "+divi); 
}
function producto(){
	var numero1 = parseInt(prompt("Ingrese el numero1: ",0));
	var numero2 = parseInt(prompt("Ingrese el numero2: ",0));
	var prod = numero1*numero2;
	alert("El producto es: "+prod); 
}

function operaciones(){

	var dato = parseInt(prompt("1-Sumar\n"+
					"2-Restar\n"+
					"3-multiplicar\n"+
					"4-dividir\n",0));

	switch(dato){
		case 1:
			sumar();
			break;
		case 2:
			restar();
			break;
		case 3:
			producto();
			break;
		case 4:
			dividir();
			break;	
		case 5:
			principal();
			break;
		default:
			alert("Ingrese una opcion valida");
			break;
	}
}
function salir(){
	alert("Nos vemos");
}

