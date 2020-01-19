let principal = "1"
// let principal = "2"
let Personagem = new personagem(principal)

let movesInimigo = 4
let outro = "1"
let Inimigo = new inimigo(outro)
let contador = 0
let contador1 = 0

async function loop() {
    limpaImprimeVerifica()
    // console.log(Personagem.projetil[0])

    if(contador==10)
    {
        Inimigo.move(movesInimigo)
        contador=1
    }
    Personagem.move()
    
    Personagem.moveProjetil()

    contador++
    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)


// let definicoes = {
//     alturaPersonagem: pixel * 2,
//     larguraPersonagem: pixel,
//     hp: 100,
//     dano: 20,
//     speed: 20,
//     x: 100,
//     y: (canvas.height - pixel * 2) / 2
// }
