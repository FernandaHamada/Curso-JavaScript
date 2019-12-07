function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora= data.getHours()
var hora = 2


msg.innerHTML = `Agora são ${hora} horas`

if(hora >= 0 && hora < 12){
    // Bom dia!
    img.src ='manha-2.png'
    document.body.style.background = '#a3836b'
}
else if(hora >= 12 && hora <= 18){
    //Boa tarde!
    img.src='tarde-3.png'
    document.body.style.background = '#88545d'
}
else{
    //Boa noite!
    img.src='noite-4.png'
    document.body.style.background = '#0a2033'
}
}