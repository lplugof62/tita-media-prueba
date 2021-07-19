const menuBurguer = document.getElementById('menuBurguer');
const listMenu = document.getElementById('listMenu');
menuBurguer.addEventListener('click', ()=>{
    listMenu.classList.toggle('is-active')
})

// grid 
// const data = [
//     {"name": "Holiday", "score": 25}, 
//     {"name": "Bargain", "score": 16}, 
//     {"name": "Frequent", "score": 5}, 
//     {"name": "Weekend", "score": 32},
//   ];
  
const imagenes = [
    {
        "id": 1,
        "category": "branding",
        "imgPro":  "marte.jpg"
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
//   document.querySelector('.grid').innerHTML = data.map(obj => {
//     return `<div class="item" style="grid-column-end: span ${obj.score };"><span>${obj.name}</span></div>`;
//   }).join('\n');

  document.querySelector('.grid__container').innerHTML = imagenes.map(obj => {
    return `<div class="grid__box"><img src="assets/img/${obj.imgPro}" alt=""></img></div>`;
    
  }).join('\n');