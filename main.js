
const Player1 = new personagem(100, (canvas.height - pixel * 2) / 2, true)

const Player2 = new personagem(canvas.width - 100, (canvas.height - pixel * 2) / 2, false)

const ControlerPlayer1 = new controle(Player1, 38, 40, 37, 39, 32)

const ControlerPlayer2 = new controle(Player2, 87, 83, 65, 68, 13)

async function loop() {
    limpaImprimeVerifica()

    ControlerPlayer1.move()

    ControlerPlayer2.move()

    Player1.moveProjetil()

    Player2.moveProjetil()

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
