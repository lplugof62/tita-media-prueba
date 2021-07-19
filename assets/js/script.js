const menuBurguer = document.getElementById('menuBurguer');
const listMenu = document.getElementById('listMenu');
menuBurguer.addEventListener('click', () => {
    listMenu.classList.toggle('is-active')
})

const imagenes = [
    {
        "id": 1,
        "category": "branding",
        "imgPro": "marte.jpg"
    },
    {
        "id": 2,
        "category": "branding",
        "imgPro": "desierto.jpg"
    },
    {
        "id": 3,
        "category": "branding",
        "imgPro": "mar.jpg"
    },
    {
        "id": 4,
        "category": "branding",
        "imgPro": "torre.jpg"
    },
    {
        "id": 5,
        "category": "branding",
        "imgPro": "sol.jpg"
    },
    {
        "id": 6,
        "category": "branding",
        "imgPro": "campo.jpg"
    },
    {
        "id": 7,
        "category": "branding",
        "imgPro": "ave.jpg"
    }

]

document.querySelector('.grid__container').innerHTML = imagenes.map(obj => {
    return `<div class="grid__box"><img class="grid__img" src="assets/img/${obj.imgPro}" alt=""></img></div>`;
}).join('\n');