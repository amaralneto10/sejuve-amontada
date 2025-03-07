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
// const menuBurguer = document.getElementById('burguer')

// const menuLista = document.getElementById('menuAlto')



// function abrirMenu() {
//     if (menuLista.style.display === 'block') {
//         menuLista.style.display = 'none'
//     } else {
//         menuLista.style.display = 'block'
//     }
// }

    // Função para abrir o menu
    function abrirMenu() {
        document.getElementById("menu-lateral").classList.add("open");
        document.getElementById("conteudo").style.marginLeft = "250px"; // Empurrar o conteúdo para a direita
      }
  
      // Função para fechar o menu
      function fecharMenu() {
        document.getElementById("menu-lateral").classList.remove("open");
        document.getElementById("conteudo").style.marginLeft = "0"; // Retornar o conteúdo para a posição original
      }
  
      // Função chamada quando um item do menu é clicado
      function itemClicado() {
        fecharMenu();
      }
  
      // Fechar o menu quando clicar fora dele
      document.addEventListener('click', function(event) {
        var menu = document.getElementById("menu-lateral");
        var btn = document.querySelector('.abrir-btn');
        
        // Verifica se o clique foi fora do menu e do botão de abrir
        if (!menu.contains(event.target) && !btn.contains(event.target)) {
          fecharMenu();
        }
      });


// MENU ABRIR E FECHAR FIM

