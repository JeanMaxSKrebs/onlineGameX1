const Player1 = new Personagem(100, (canvas.height - pixel * 2) / 2, true)
const Player2 = new Personagem(canvas.width - 100, (canvas.height - pixel * 2) / 2, false)

const municaoPlayer1 = new Projetil(Player1.meioX, Player1.meioY, Player1.estaEsquerda, 30, pixel / 3, pixel / 3)
const pistolaPlayer1 = new Arma("pistola", 8, municaoPlayer1, Player1.x, Player1.y, 10, 10)
Player1.setArma(pistolaPlayer1)

const municaoPlayer2 = new Projetil(Player2.meioX, Player2.meioY, Player2.estaEsquerda, 30, pixel / 3, pixel / 3)
const pistolaPlayer2 = new Arma("pistola", 8, municaoPlayer2, Player2.x, Player2.y, 10, 10)
Player2.setArma(pistolaPlayer2)

const ControlerPlayer1 = new Controle(Player1, 87, 83, 65, 68, 32, 82, Player1.estaEsquerda)
const ControlerPlayer2 = new Controle(Player2, 38, 40, 37, 39, 13, 8, Player2.estaEsquerda)

function comecarAcao(e) {
    ControlerPlayer1.comecaAcao(e)
    ControlerPlayer2.comecaAcao(e)
}
function pararAcao(e) {
    ControlerPlayer1.paraAcao(e)
    ControlerPlayer2.paraAcao(e)
}

window.addEventListener("keydown", comecarAcao);
window.addEventListener("keyup", pararAcao);


async function loop() {
    limpa()
    verifica()
    ControlerPlayer1.atira()
    ControlerPlayer2.atira()
    ControlerPlayer1.recarrega()
    ControlerPlayer2.recarrega()

    // debugger
    
    ControlerPlayer1.move()
    ControlerPlayer2.move()

    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)