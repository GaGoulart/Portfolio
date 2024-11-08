
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

/*Quando clica nas tres listas abre o menu*/
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

/*Quando clica no 'X' fecha o menu*/
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

/*Adicionar certo o numero de telefone*/
/*$('#telefone').mask('(00) 00000-0000');: Aplica uma máscara ao campo de telefone no formato (XX) XXXXX-XXXX*/
$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
});