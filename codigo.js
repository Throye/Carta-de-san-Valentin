
document.getElementById('btn-corazon').addEventListener('click', () => {
    let corazon = document.getElementById('corazon');
    let fondo = document.getElementById('particles-js');
    let carta = document.getElementById('carta');

    corazon.style.animation = "fadeOut 0.5s ease-out forwards";
    carta.style.animation = "fadeInScale 0.5s ease-out forwards";
    fondo.style.animation = "aparecer 0.4s forwards";

    setTimeout(() => {
        corazon.style.display = 'none';
        carta.classList.add("mostrar");
        fondo.style.opacity = 1;
    },500);
});

document.getElementById('btn-carta').addEventListener('click', () => {
    document.querySelector(".carta-contenedor").classList.add("girar");
});

document.getElementById('btn-sello').addEventListener('click', () => {
    document.querySelector(".borde-aleta").classList.add("abrir");
    document.querySelector(".nota-oculta").classList.add("animacion");

    setTimeout(() => {
        document.querySelector(".borde-aleta").style.zIndex = 6;
    }, 500);
});