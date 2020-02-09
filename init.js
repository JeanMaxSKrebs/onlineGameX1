const largura = window.innerWidth
const altura = window.innerHeight
const pixel = 20
const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')
// console.log(altura)
// console.log(largura)
/*definições canvas*/
canvas.style.position = "absolute"
canvas.style.left = "12.5vw"
canvas.style.top = "12.5vh"
canvas.style.backgroundColor = "green"

canvas.height = altura*0.75
canvas.width = largura*0.75
// console.log(canvas.height)
// console.log(canvas.width)

/*definiçoes teclado*/
let UP = 38,
    DOWN = 40,
    LEFT = 37,
    RIGHT = 39

let moveEsquerda = false,
    moveDireita = false,
    moveCima = false,
    moveBaixo = false
    
let ESPACO = 32

let atirar = false


