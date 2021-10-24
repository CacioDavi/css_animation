var ver = true;
var verificacao = false
var con = true 
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
    window.location.href = "file:///C:/projetos/css_animation/en.html"
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
function contact(elemento){

    if (con == true){
        document.getElementById('conta').innerHTML = '<ul class="contact"><li id="cont" class="cont" onclick=\"git(this)\">Github</li><li id="cont"  onclick=\"email(this)\" class="cont">E-mail</li></ul>'
        con = false;
        
    }else if(con == false){
        document.getElementById('conta').innerHTML = ''
        con = true;
    }
};
function email(elemento){
    alert('indisponível')
}
function git(elemento){
    window.open('https://github.com/CacioDavi')
}
