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


var ver = true;
var verificacao = false
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
function toogler(){
    if(verificacao === false){
        document.getElementById("id").style.marginLeft = '-205px'
        verificacao = true
    }else if(verificacao === true){
        document.getElementById("id").style.marginLeft = '5px'
        verificacao = false
    }
}