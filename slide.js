var slide = document.querySelector('.slideshow');
var imagens = [
    './imagem/01.jpeg',
    './imagem/02.jpeg',
    './imagem/03.jpeg',
    './imagem/04.jpeg'
];

var tempo = 2500;
var cont = 0;

function moverSlide(){
    slide.src = imagens[cont];

    if (cont < imagens.length - 1){
        cont++;
    }else{
        cont = 0;
    }

    setTimeout("moverSlide()", tempo);
}

window.onload = moverSlide;