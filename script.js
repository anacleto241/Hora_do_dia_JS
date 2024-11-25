function carregar() {
let msg = window.document.getElementById('msg');
let img = window.document.getElementById('imagem');
let data = new Date();
let hora = data.getHours();

msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 5 && hora < 12) {
    // Bom dia!
    img.src = 'images/foto_manha.jpg';
    document.body.style.background = '#e2cd9f';
} else if (hora >= 12 && hora < 18) {
    // Boa tarde!
    img.src = 'images/foto_tarde.jpg';
    document.body.style.background = '#b9846f';
}else if(hora >= 19 && hora < 23){
    // Boa noite!
    img.src = 'images/foto_noite.jpg';
    document.body.style.background = '#515154';
}else{
    // Boa madrugada!
    img.src = 'images/foto_noite.jpg';
    document.body.style.background = '#515154';
}
}