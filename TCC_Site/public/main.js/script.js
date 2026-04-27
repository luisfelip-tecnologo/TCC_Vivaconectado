document.addEventListener("DOMContentLoaded", function(){

const iconePerfil = document.getElementById("iconePerfil");
const menuPerfil = document.getElementById("menuPerfil");
const btnSair = document.getElementById("btnSair");

const usuarioLogado = localStorage.getItem("usuarioLogado");

iconePerfil.addEventListener("click", function(){

    if(!usuarioLogado){
        window.location.href = "Login.html";
        return;
    }

    menuPerfil.classList.toggle("fixo");
});

btnSair.addEventListener("click", function(e){
    e.preventDefault();

    localStorage.removeItem("usuarioLogado");

    window.location.href = "Login.html";
});

});
