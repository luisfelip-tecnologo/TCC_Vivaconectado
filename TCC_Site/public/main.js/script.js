window.addEventListener("componentesCarregados", function(){

const iconePerfil = document.getElementById("iconePerfil");
const menuPerfil = document.getElementById("menuPerfil");
const btnSair = document.getElementById("btnSair");

if(!iconePerfil) return;

iconePerfil.addEventListener("click", function(){

   const usuarioLogado = localStorage.getItem("usuarioLogado");

   if(usuarioLogado){
      menuPerfil.classList.toggle("fixo");
   } else {
      window.location.href = "Login.html";
   }

});

if(btnSair){
btnSair.addEventListener("click", function(e){
   e.preventDefault();

   localStorage.removeItem("usuarioLogado");

   window.location.href="Login.html";
});
}

});
