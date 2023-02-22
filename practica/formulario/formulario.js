'use strict'

window.addEventListener("load",function(){
    var formulario  = document.querySelector("#formulario");
    var Boxdashes = document.querySelector(".dashes"); 
    Boxdashes.style.display="none";

    formulario.addEventListener("submit",function(){
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);
        if(nombre.trim()=="null" || nombre.trim().length== 0){
            alert("Nombre invalido");
            return false;
        }

        if(apellidos.trim()=="null" || apellidos.trim().length== 0){
            alert("Apellido invalido");
            return false;
        }

        if(edad=="null" || edad<= 0 || isNaN(edad)){
            alert("Edad invalida");
            return false;
        }
        Boxdashes.style.display="block";
        var pNombre = document.querySelector("#pNombre span");
        var pApellidos = document.querySelector("#pApellidos span");
        var pEdad = document.querySelector("#pEdad span");

        pNombre.innerHTML=nombre;
        pApellidos.innerHTML=apellidos
        pEdad.innerHTML=edad
    });
});