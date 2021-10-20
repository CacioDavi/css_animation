var ver = true;
function background(elemento){

    if (ver == true){
        document.getElementById("text").style.color = "#FFF";
        document.getElementById("body").style.backgroundColor = "#585858";
        ver = false;
        
    }else if(ver == false){
        document.getElementById("text").style.color = "black";
        document.getElementById("body").style.backgroundColor = "#FFF";
        ver = true;
    }
};
function Translation(elemento){
    window.location.href = "file:///C:/projetos/css_animation/pt-Br.html"
}