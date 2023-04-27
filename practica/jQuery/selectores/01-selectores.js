$(document).ready(function(){
    //Selector de id
    $("#rojo").css("background","red") 
              .css("color","white") 
    
    $("#amarillo").css("background","yellow") 
                  .css("color","green")

    $("#verde").css("background","green")
               .css("color","white")

    //Selector de clase
    $(".zebra").css("padding","5px")

    var sin_borde = $(".sin_borde")
        sin_borde.click(function(){
    });

    //Selector de etiqueta
    var parrafo = $("p");
    parrafo.click(function(){
        if($(this).hasClass("zebra")){
            $(this).removeClass("zebra")
        }else{
            $(this).addClass("zebra");
        }     
    });
    //Selector de atributo
    $("[title=google]").css("background","green")
    $("[title=facebook]").css("background","blue")
    //otros
    $("p,a").addClass("margen_superior");

    //busquedad dentro del DOM con find
    var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="google"]');
    console.log(busqueda)
});