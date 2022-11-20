//get element
const containerLoader = document.querySelector(".container-loader")

window.addEventListener( "load", waitLoad)

function waitLoad (time = 0.6) {
    containerLoader.classList.add('hide')
    setTimeout( () =>containerLoader.remove(),time*1000)
}