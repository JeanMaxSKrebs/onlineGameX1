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
canvas.style.backgroundColor = "gray"

canvas.height = altura*0.75
canvas.width = largura*0.75
// console.log(canvas.height)
// console.log(canvas.width)