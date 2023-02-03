// Image
setTimeout(function(){
    let img = document.createElement("img");
    img.src="https://i.pinimg.com/564x/50/06/3c/50063ca8293e0b682b27eeb900a0e739.jpg";
    document.getElementById("Dados").appendChild(img)
    document.body.insertBefore(Dados);
},1500)
setTimeout(function(){
    //Texto
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("Olá seja bem vindo ao Mundinho um lugar Mágico");
    divNova.appendChild(conteudoNovo);
    var divAtual = document.getElementById("div1");
    document.body.insertBefore(divNova, divAtual);
    // Voz
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[4];
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = "Olá seja bem vindo ao Mundinho um lugar Mágico";
    msg.lang = 'pt-br';
    speechSynthesis.speak(msg);
},2000)
