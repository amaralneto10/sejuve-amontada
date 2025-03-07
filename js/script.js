// SLIDE INICIO
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}
// SLIDE FIM

// MENU TOPO INICIO
let burguer = document.getElementById('burguer')
let menu = document.getElementById('menuAlto')
function menuTopo() {
    if (menu.style.display == 'block') {
        menu.style.display == 'none'
    } else {
        menu.style.display = 'block'
    }
}

// MENU TOPO FIM

// JANELA MODAL INICIO
function openModal(){
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-container' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
}
// JANELA MODAL FIM

// JANELA MODAL INICIO 2
function openModal2(){
    const modal2 = document.getElementById('modal-container2')
    modal2.classList.add('mostrar')

    modal2.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-container2' || e.target.id == "fechar2"){
            modal2.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container2'
        }
    })
}
// JANELA MODAL FIM 2


// MSG COOKIES

var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = 'sim'
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}
// MSG COOKIES FIM


// MENU ABRIR E FECHAR
const menuBurguer = document.getElementById('burguer')

const menuLista = document.getElementById('menuAlto')

function abrirMenu() {
    if (menuLista.style.display === 'block') {
        menuLista.style.display = 'none'
    } else {
        menuLista.style.display = 'block'
    }
}


// MENU ABRIR E FECHAR FIM