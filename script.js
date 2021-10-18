var ver = true
function background(elemento){

    if (ver == true){
        document.getElementById("body").style.backgroundColor = "black";
        ver = false
        
    }else if(ver == false){
        document.getElementById("body").style.backgroundColor = "#FFF"
        ver = true
    }
}