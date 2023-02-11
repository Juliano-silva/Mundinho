// Pedra Papel e Tesoura
function Escolhas(){
const Computador = Math.floor(Math.random() * 3)
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
    ComputadorPoint ++
}
else if (Jogador == "0" && Computador == "2"){
    Result.innerText = "Você Ganhou"
    JogadorPoint ++
}
// Papel Ganhou
else if (Jogador == "1" && Computador == "0"){
    Result.innerText = "Você Ganhou"
    JogadorPoint ++
}
else if (Jogador == "1" && Computador == "1"){
    Result.innerText = "Empate"
}
else if (Jogador == "1" && Computador == "2"){
    Result.innerText = "Você Perdeu"
    ComputaComputadorPoint ++
}
// Pedra
else if (Jogador == "2" && Computador == "0"){
    Result.innerText = "Você Perdeu"
    ComputadorPoint ++
}
else if (Jogador == "2" && Computador == "1"){
    Result.innerText = "Você Ganhou"
    JogadorPoint ++
}
else if (Jogador == "2" && Computador == "2"){
    Result.innerText = "Empate"
}

}
// SideBar
var buttonSidebar = document.getElementById("MenuICone1")
var buttonS = document.getElementById("MenuICone")
var Sidebar = document.getElementById("Sidebar")
var Rota = document.getElementById("ROTA")
var Corpo = document.querySelector("body")
buttonSidebar.addEventListener("click",Abrir)
buttonS.addEventListener('click',Sair)
function Abrir(){
    Sidebar.style.display="block"
    buttonS.style.display="block"
    buttonSidebar.style.display="none"
    Rota.style.width = "90%"
    Rota.style.marginLeft = "10%"
    Corpo.style.overflow = "hidden"
}
function Sair(){
    Sidebar.style.display="none"
    buttonS.style.display="none"
    buttonSidebar.style.display="block"
    Rota.style.width = "100vw"
    Rota.style.marginLeft = "0"
    Corpo.style.overflow = "auto"
}
// Random
// Random com Cor
function Random(tamanho){
    var Primeiro = "#"
    var caracteres = 'ABCDEF0123456789';
    for(var i = 0;i < tamanho; i++){
        Primeiro += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return Primeiro
}
// Random com Image
function RandomImage(tamanho){
    HttpPri = "https://wallpapercave.com/wp/wp"
    var caracteres = "0123456789"
    for(var i = 0;i < tamanho; i++){
        HttpPri += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return HttpPri
}
function Cores(){
document.getElementById("Cor").style.background = (Random(6))
}
function Image(){
    const GerarImg = (RandomImage(7))
    document.getElementById("ImageRandom").src = GerarImg + ".jpg"
    console.log(GerarImg + ".jpg")
}
function Copiar(){
    navigator.clipboard.writeText(CorRandom(6))
}
// Texto Configurações
function Palavras(){
    var Palavra = document.getElementById("Input").value
    document.getElementById("Texto1").innerText = "Palavra Normal: " +  Palavra.toString()
    document.getElementById("Texto2").innerText = "Palavra Minúscula: " + Palavra.toLocaleLowerCase()
    document.getElementById("Texto3").innerText = "Número de Palavras com espaços: " + Palavra.length
    document.getElementById("Texto4").innerText = "Número de Palavras sem espaços: " + Palavra.replace(/\s/g,"").length
    document.getElementById("Texto5").innerText = "Palavra Côdigo Point: " + Palavra.codePointAt()
    document.getElementById("Texto6").innerText = "Palavra Tirando os Espaços: " + Palavra.replace(/\s/g,"")
    document.getElementById("Texto7").innerText = "Palavra Tirando os Espaços e colocado - : " + Palavra.replace(/\s/g,"-")
    document.getElementById("Texto8").innerText = "Palavra Separadas: " + Palavra.split("")
    document.getElementById("Texto9").innerText = "Primeira Palavra: " + Palavra.charAt(0)
    document.getElementById("Texto10").innerText = "Palavra Maiúsculas : " + Palavra.toUpperCase()
}// Pokédex
