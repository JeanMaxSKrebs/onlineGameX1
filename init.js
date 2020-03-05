const largura = window.innerWidth
const altura = window.innerHeight
const pixel = 20
const canvas = document.querySelector('canvas')
const contexto = canvas.getContext('2d')
// console.log(altura)
// console.log(largura)
/*definições canvas*/
canvas.style.position = "absolute"
canvas.style.left = "25vw"
canvas.style.top = "25vh"
canvas.style.backgroundColor = "gray"

canvas.height = altura*0.50
canvas.width = largura*0.50
// console.log(canvas.height)
// console.log(canvas.width)