function carregar() {
let msg = window.document.getElementById('msg');
let img = window.document.getElementById('imagem');
let data = new Date();
let hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 5 && hora < 12) {
    img.src = 'images/foto_manha.jpg';
    document.body.style.background = '#79ecf0';
} else if (hora >= 12 && hora < 18) {
    img.src = 'images/foto_tarde.jpg';
    document.body.style.background = 'hsl(44, 100%, 65%)';
}else if(hora >= 19 && hora < 23){
    img.src = 'images/foto_noite.jpg';
    document.body.style.background = '#515154';
}else{
    img.src = 'images/foto_noite.jpg';
    document.body.style.background = '#131313';
}
}