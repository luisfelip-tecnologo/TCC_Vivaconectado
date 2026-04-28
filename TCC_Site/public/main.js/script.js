window.addEventListener("componentesCarregados", function(){

const areaPerfil = document.querySelector(".header-perfil");

if(!areaPerfil) return;

const usuarioLogado = localStorage.getItem("usuarioLogado");
const nomeUsuario = localStorage.getItem("nomeUsuario") || "Usuário";

if(usuarioLogado){

areaPerfil.innerHTML = `
<div class="perfil-dropdown">

<span class="bem-vindo">
Bem-vindo, ${nomeUsuario} 👋
</span>

<i class="bi bi-person-circle perfil-icone"
id="botaoPerfil"></i>

<div class="dropdown-conteudo" id="menuPerfil">
<a href="Perfil.html">Meu Perfil</a>
<a href="#" id="btnSair">Sair da Conta</a>
</div>

</div>
`;

const botaoPerfil = document.getElementById("botaoPerfil");
const menuPerfil = document.getElementById("menuPerfil");
const btnSair = document.getElementById("btnSair");

botaoPerfil.addEventListener("click", function(){
menuPerfil.classList.toggle("fixo");
});

btnSair.addEventListener("click", function(e){
e.preventDefault();

localStorage.removeItem("usuarioLogado");
localStorage.removeItem("nomeUsuario");

window.location.href="login.html";
});

}
else{

areaPerfil.innerHTML = `
<a href="Login.html" class="login-icone">
<i class="bi bi-person perfil-icone"></i>
</a>
`;

}

});
