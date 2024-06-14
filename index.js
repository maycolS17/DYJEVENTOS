let menuVisible = true;
//funcio que oculta y muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;   
    }
}

function seleccionar(){
    //funcion donde ocultamos el menu una ves que se seleccione una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
