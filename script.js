const website_button = document.querySelector('.website_button')



const mainPage = document.querySelector('body')
let blur = 100

function removeBlur() {
    blur--;
    mainPage.style.filter = `blur(${blur}px)`
}

setInterval(removeBlur, 7)

