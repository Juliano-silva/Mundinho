// Pedra Papel e Tesoura
function Escolhas(){
const Computador = Math.floor(Math.random() * 3)
const Placar = document.getElementById("JOGO")
const Placar1 = document.getElementById("JOGO1")
const Jogador = document.querySelector("select").selectedIndex
const Result = document.getElementById("Resultado");
if (Jogador == "0"){
    document.getElementById("Jogada").innerText = "Pedra"
}else if(Jogador == "1"){
    document.getElementById("Jogada").innerText = "Papel"
}
else{
    document.getElementById("Jogada").innerText = "Tesoura"
}
if (Computador == "0"){
    document.getElementById("Computada").innerText = "Pedra"
}else if(Computador == "1"){
    document.getElementById("Computada").innerText = "Papel"
}
else if(Computador == "2"){
    document.getElementById("Computada").innerText = "Tesoura"
}
let JogadorPoint = 0;
let ComputadorPoint = 1;
// 0 Pedra - 1 Papel - 2 Tesoura
// Pedra Ganhou
if (Jogador == "0" && Computador == "0"){
    Result.innerText = "Empate"
}
else if (Jogador == "0" && Computador == "1"){
    Result.innerText = "Você Perdeu"
    ComputadorPoint +=1
}
else if (Jogador == "0" && Computador == "2"){
    Result.innerText = "Você Ganhou"
    JogadorPoint += 1
}
// Papel Ganhou
else if (Jogador == "1" && Computador == "0"){
    Result.innerText = "Você Ganhou"
    JogadorPoint += 1
}
else if (Jogador == "1" && Computador == "1"){
    Result.innerText = "Empate"
}
else if (Jogador == "1" && Computador == "2"){
    Result.innerText = "Você Perdeu"
    ComputadorPoint +=1
}
// Pedra
else if (Jogador == "2" && Computador == "0"){
    Result.innerText = "Você Perdeu"
    ComputadorPoint += 1
}
else if (Jogador == "2" && Computador == "1"){
    Result.innerText = "Você Ganhou"
    JogadorPoint += 1
}
else if (Jogador == "2" && Computador == "2"){
    Result.innerText = "Empate"
}
console.log(JogadorPoint)
}
// SideBar
var buttonSidebar = document.getElementById("MenuICone1")
var buttonS = document.getElementById("MenuICone")
var Sidebar = document.getElementById("Sidebar")
var Rota = document.getElementById("ROTA")
buttonSidebar.addEventListener("click",Abrir)
buttonS.addEventListener('click',Sair)
function Abrir(){
    Sidebar.style.display="block"
    buttonS.style.display="block"
    buttonSidebar.style.display="none"
    Rota.style.width = "90%"
    Rota.style.marginLeft = "10%"
}
function Sair(){
    Sidebar.style.display="none"
    buttonS.style.display="none"
    buttonSidebar.style.display="block"
    Rota.style.width = "100%"
    Rota.style.marginLeft = "0%"
}
