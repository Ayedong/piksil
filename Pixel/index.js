const container = document.querySelector('.container')
const sizeE1 = document.querySelector('.size')
let size = sizeE1.value 
const color = document.querySelector('.color')
const resetbtn = document.querySelector('.btn')

let draw = false

function populate(size){
    container.style.setProperty('--size', size)
    for(let i = 0; i < size * size; i++){
        const div = document.createElement('div')
        div.classList.add('pixel')

        div.addEventListener('mouseover', function(){
            if (!draw) return
            div.style.backgroundColor = color.value
        })
        div.addEventListener('mousedown', function(){
            div.style.backgroundColor = color.value
        })

        container.appendChild(div)
    }
}

window.addEventListener("mousedown", function(){
    draw = true
})
window.addEventListener("mouseup", function(){
    draw = false
})

function reset(){
    container.innerHTML = ''
    populate(size)
}

resetbtn.addEventListener('click', reset)

sizeE1.addEventListener('keyup', function(){
    size = sizeE1.value
    reset()
})

populate(size)