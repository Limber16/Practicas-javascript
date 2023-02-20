'use strict'

window.addEventListener("load",function(){

    var titulo = document.getElementById("divTitulo");
    var contenido = document.getElementById("divContenido");
    var btnContenido = document.getElementById("btnContenido");
    var btnParar = document.getElementById("btnStop");

    btnContenido.style.padding="10px";
    btnContenido.style.fontSize="15px";
    btnParar.style.padding="10px";
    btnParar.style.fontSize="15px";
    contenido.style.background="#FFFFFF";
    let color ="a";
    var tiempo;
    function fondoContenido(){
        tiempo = setInterval(function(){
            if( color == "a" ) {
                contenido.style.background = "#009966";
                color = "b";
            }
            else if( color == "b" ) {
                contenido.style.background = "#0099FF";
                color = "c";
            }
            else{
                contenido.style.background = "#FFFFFF";
                color = "a";
            }
        },1000);
        }
         
    btnContenido.addEventListener("click",function(){
            fondoContenido();    
    });
    btnParar.addEventListener("click",function(){
        clearInterval(tiempo);    
});
});
