const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = 'I am Ajinkya a web developer. Lorem Ipsum is simply printing dummy text  '
let idx = 1
speed = 1000

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length){

        idx = 1
    }
    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 400 / e.target.value)