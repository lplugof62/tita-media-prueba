const menuBurguer = document.getElementById('menuBurguer');
const listMenu = document.getElementById('listMenu');
menuBurguer.addEventListener('click', () => {
    listMenu.classList.toggle('is-active')
})

// -------------boton search 
const searchBar = document.getElementById('search')
const boton = document.getElementById('btn')

boton.addEventListener('click', () => {
    searchBar.classList.toggle('active')
})
// -------grid con imágenes guardadas
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
        "category": "web",
        "imgPro": "torre.jpg"
    },
    {
        "id": 12,
        "category": "app",
        "imgPro": "abeja.jpg"
    },
    {
        "id": 5,
        "category": "web",
        "imgPro": "sol.jpg"
    },
    {
        "id": 6,
        "category": "web",
        "imgPro": "campo.jpg"
    },
    {
        "id": 7,
        "category": "photography",
        "imgPro": "ave.jpg"
    },
    {
        "id": 8,
        "category": "photography",
        "imgPro": "medusa.jpg"
    },
    {
        "id": 9,
        "category": "photography",
        "imgPro": "camello.jpg"
    },
    {
        "id": 10,
        "category": "app",
        "imgPro": "flor.jpg"
    },
    {
        "id": 11,
        "category": "app",
        "imgPro": "atardecer.jpg"
    },
    {
        "id": 12,
        "category": "app",
        "imgPro": "abeja.jpg"
    }

]
// document.querySelector('.grid__container').innerHTML = imagenes.map(obj => {
//     return `<div class="grid__box"><img class="grid__img" src="assets/img/${obj.imgPro}" alt=""></img></div>`;
// }).join('\n');

// --------grid con consumo de la API 
const urlAll = 'https://api.unsplash.com/photos?&'
let busqueda = 'dogs'
const url = `https://api.unsplash.com/search/photos?query=${busqueda}&`
const client_id = 'YXUCY68kVeweNb5tgjeAngpsr67wK2jFZQ_YM38p5oM'
// console.log(`${url}client_id=${client_id}`)
let image
let container = document.querySelector('.grid__container')

function getImagesQuery() {
    fetch(`${url}client_id=${client_id}`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(item => {
                console.log(item.urls.regular);
                const box = document.createElement('div');
                box.classList.add('grid__box');
                box.innerHTML += `<img class="grid__img" src="${item.urls.regular}" alt=""></img>`;
                container.appendChild(box);
            });
        })
}
function getImagesAll() {
    fetch(`${urlAll}client_id=${client_id}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                console.log(item.urls.regular)
                const box = document.createElement('div');
                box.classList.add('grid__box');
                box.innerHTML += `<img class="grid__img" src="${item.urls.regular}" alt=""></img>`;
                container.appendChild(box);
            });
        })
}
getImagesQuery();

// Access Key
// YXUCY68kVeweNb5tgjeAngpsr67wK2jFZQ_YM38p5oM
// Secret key
// Ur0111s_rTNcCM-wCewCxjJ7_SJLLR-i2DYMmbYiDAI