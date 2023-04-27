$(document).ready(function(){

    //mouseOver y mouseOut
    var caja = $("#caja");
    /*
    caja.mouseover(function(){
        $(this).css("background","red")
    });
    caja.mouseout(function(){
        $(this).css("background","yellow")
    })*/
    function rojo(){
        $(this).css("background","red");
    }
    function amarillo(){
        $(this).css("background","yellow");
    }
    //evento hover
    caja.hover(rojo,amarillo);
    //evento click y doble click
    caja.click(function(){
        $(this).css("background","blue");
    });

    caja.dblclick(function(){
        $(this).css("background","white");
    });
    //evento focus y blur
    var nombre = $("#nombre");
    nombre.focus(function(){
        $(this).css("border","2px solid red").css('outline', '0');
    });

    nombre.blur(function(){
        $(this).css("border","2px solid gray");
    });
   
})