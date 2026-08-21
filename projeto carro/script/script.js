let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicador')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlader() {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.ative')
    dotsOld.classList.remove('ative')
    dots[active].classList.add('ative')


    indicator.querySelector('.number').innerHTML = '0' + (active + 1)

}

nextButton.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlader()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition
        : active - 1
    setSlader()
    items[active].classList.add('active')
}

