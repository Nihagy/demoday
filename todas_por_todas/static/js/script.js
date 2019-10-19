let cabecalho = document.querySelector(`header`)
let logo = document.querySelector(`.logo_max img`)
let navLetra = document.querySelectorAll(`.nav_max`)[0]
let menu = document.querySelectorAll(`.menu`)[0]
let traco1 = document.querySelectorAll(`span`)[0]
let traco2 = document.querySelectorAll(`span`)[1]
let traco3 = document.querySelectorAll(`span`)[2]
let circulo = document.querySelectorAll(`.circulo-efe`)[0]


window.addEventListener(`scroll`,rolagem, false)
function rolagem(){
    
    if(window.pageYOffset > 60 && cabecalho.classList.contains(`tam_max`)){
        cabecalho.classList.remove(`tam_max`)
        cabecalho.classList.add(`tam_min`)
        // logo.setAttribute(`src`, `../images/login.png `)
        logo.classList.remove(`logo_max`)
        logo.classList.add(`logo_min`)
        navLetra.classList.remove(`nav_max`)
        navLetra.classList.add(`nav_min`)
        menu.firstElementChild.classList.remove(`menu-max`)
        menu.firstElementChild.classList.add(`menu-min`)
        traco2.classList.remove(`menu-max`)
        traco2.classList.add(`menu-min`)
        traco3.classList.remove(`menu-max`)
        traco3.classList.add(`menu-min`)
    }else if(pageYOffset <= 60 && cabecalho.classList.contains(`tam_min`)) {
        cabecalho.classList.remove(`tam_min`)
        cabecalho.classList.add(`tam_max`)
        // logo.setAttribute(`src`, `{% static 'images/teste.png' %}`)
        logo.classList.remove(`logo_min`)
        logo.classList.add(`logo_max`)
        navLetra.classList.remove(`nav_min`)
        navLetra.classList.add(`nav_max`)
        menu.firstElementChild.classList.remove(`menu-min`)
        menu.firstElementChild.classList.add(`menu-max`)
        traco2.classList.add(`menu-max`)
        traco2.classList.remove(`menu-min`)
        traco3.classList.add(`menu-max`)
        traco3.classList.remove(`menu-min`)
    }


}



window.addEventListener(`scroll`,rolarSimb, false)
function rolarSimb(){
    if(cabecalho.classList.contains(`tam_min`) && navLetra.classList.contains("menu-visivel")){
        circulo.style.color= "#2980b9";
    }else if(cabecalho.classList.contains(`tam_max`) && navLetra.classList.contains("menu-visivel")){
        circulo.style.color = `#c5eff7`
    }
}


menu.addEventListener(`click`,mostrarMenu,false)


function mostrarMenu(){
    navLetra.classList.toggle("menu-visivel")
}

navLetra.addEventListener(`click`, navegarMenu, false)
function navegarMenu(event){
    if (event.target.tagName == 'A'){
        mostrarMenu()
    }
}
