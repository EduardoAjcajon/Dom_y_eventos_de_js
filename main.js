let cuadro = document.querySelector(".cuadro");
let btn_rojo = document.querySelector(".btn1");
let btn_verde = document.querySelector('.btn2');

function cambiar_rojo (){
    cuadro.innerHTML = '<div class="rojo"></div>';
}
function cambiar_verde (){
    cuadro.innerHTML = '<div class="verde"></div>';
}

btn_rojo.addEventListener('click', cambiar_rojo);
btn_verde.addEventListener('click', cambiar_verde);