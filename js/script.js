// let menuSetor = document.getElementById('menuSetor')
// let setor = document.getElementById('setor')



// function clickMenu() {
//     if (menuSetor.style.display == 'none') {
//         menuSetor.style.display = 'block'
//     } else {
//         menuSetor.style.display = 'none'
//     }
// }


const carousel = document.querySelector(".carousel");
let index = 0;

function moveCarousel() {
    index++;
    if (index >= carousel.children.length) {
        index = 0;
    }
    let offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

setInterval(moveCarousel, 4000); // Troca a cada 3 segundos


// MENU TOPO
let burguer = document.getElementById('burguer')
let menu = document.getElementById('menuAlto')
function menuTopo() {
    if (menu.style.display == 'block') {
        menu.style.display == 'none'
    } else {
        menu.style.display = 'block'
    }
}