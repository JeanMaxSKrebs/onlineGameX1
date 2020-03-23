const Player1 = new Personagem(100, (canvas.height - pixel * 2) / 2, true)
const Player2 = new Personagem(canvas.width - 100, (canvas.height - pixel * 2) / 2, false)

const municaoPlayer1 = new Projetil(Player1.meioX, Player1.meioY, Player1.estaEsquerda, 30, pixel / 3, pixel / 3)
const pistolaPlayer1 = new Arma("pistola", 8, municaoPlayer1, Player1.x, Player1.y)
Player1.setArma(pistolaPlayer1)

const municaoPlayer2 = new Projetil(Player2.meioX, Player2.meioY, Player2.estaEsquerda, 30, pixel / 3, pixel / 3)
const pistolaPlayer2 = new Arma("pistola", 8, municaoPlayer2, Player2.x, Player2.y)
Player2.setArma(pistolaPlayer2)

const ControlerPlayer1 = new Controle(Player1, 87, 83, 65, 68, 32, Player1.estaEsquerda)
const ControlerPlayer2 = new Controle(Player2, 38, 40, 37, 39, 13, Player2.estaEsquerda)

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

    if (Player1.arma.projetil.estaDisparado()) {
        Player1.arma.projetil.movimentar()
    }

    if (Player2.arma.projetil.estaDisparado()) {
        Player2.arma.projetil.movimentar()
    }
    moveProjetil(Player1.arma.arrProjeteis)
    moveProjetil(Player2.arma.arrProjeteis)
    ControlerPlayer1.move()
    ControlerPlayer2.move()


    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)