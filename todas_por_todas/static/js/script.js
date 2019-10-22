let cabecalho = document.querySelector(`header`)
let logo = document.querySelector(`.logo-max img`)
let navLetra = document.querySelectorAll(`.nav-max`)[0]
let menu = document.querySelectorAll(`.menu`)[0]
let traco1 = document.querySelectorAll(`span`)[0]
let traco2 = document.querySelectorAll(`span`)[1]
let traco3 = document.querySelectorAll(`span`)[2]


window.addEventListener(`scroll`,rolagem, false)

function rolagem(){
    
    if(window.pageYOffset > 60 && cabecalho.classList.contains(`header-max`)){
        //efeito na nav bar
        cabecalho.classList.remove(`header-max`)
        cabecalho.classList.add(`header-min`)
        logo.classList.remove(`logo-max`)
        logo.classList.add(`logo-min`)
        navLetra.classList.remove(`nav-max`)
        navLetra.classList.add(`nav-min`)
        //efeito a listras do menu
        menu.firstElementChild.classList.remove(`menu-max`)
        menu.firstElementChild.classList.add(`menu-min`)
        traco2.classList.remove(`menu-max`)
        traco2.classList.add(`menu-min`)
        traco3.classList.remove(`menu-max`)
        traco3.classList.add(`menu-min`)
    }else if(pageYOffset <= 60 && cabecalho.classList.contains(`header-min`)) {
        cabecalho.classList.remove(`header-min`)
        cabecalho.classList.add(`header-max`)
        logo.classList.remove(`logo-min`)
        logo.classList.add(`logo-max`)
        navLetra.classList.remove(`nav-min`)
        navLetra.classList.add(`nav-max`)
        menu.firstElementChild.classList.remove(`menu-min`)
        menu.firstElementChild.classList.add(`menu-max`)
        traco2.classList.add(`menu-max`)
        traco2.classList.remove(`menu-min`)
        traco3.classList.add(`menu-max`)
        traco3.classList.remove(`menu-min`)
    }

}


menu.addEventListener(`click`,mostrarMenu,false)
// abre e fecha o menu
function mostrarMenu(){
    navLetra.classList.toggle("menu-visivel")
}

// faz o menu e para seção que foi clicado e fecha o menu
navLetra.addEventListener(`click`, navegarMenu, false)
function navegarMenu(event){
    if (event.target.tagName == 'A'){
        mostrarMenu()
    }
}


// ========================================
// efeito na figure
	