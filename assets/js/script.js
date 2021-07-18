const menuBurguer = document.getElementById('menuBurguer');
const listMenu = document.getElementById('listMenu');
menuBurguer.addEventListener('click', ()=>{
    listMenu.classList.toggle('is-active')
})