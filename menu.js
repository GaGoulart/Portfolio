
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