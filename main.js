class Controle {

    constructor(personagem, UP, DOWN, LEFT, RIGHT, TIRO, estaEsquerda) {
        this.personagem = personagem
        this.UP = UP
        this.DOWN = DOWN
        this.LEFT = LEFT
        this.RIGHT = RIGHT
        this.TIRO = TIRO
        this.moveEsquerda = false;
        this.moveDireita = false;
        this.moveCima = false;
        this.moveBaixo = false;
        this.atirar = false;
        this.estaEsquerda = estaEsquerda
    }

    comecaAcao(e) {
        var key = e.keyCode;
        if (key === this.LEFT && key !== this.RIGHT) {
            this.moveEsquerda = true
        }
        if (key === this.RIGHT && key !== this.LEFT) {
            this.moveDireita = true
        }
        if (key === this.UP && key !== this.DOWN) {
            this.moveCima = true
        }
        if (key === this.DOWN && key !== this.UP) {
            this.moveBaixo = true
        }
        /* tiro */
        if (key === this.TIRO) {
            this.atirar = true
        }
    }
    paraAcao(e) {
        var key = e.keyCode;
        if (key === this.LEFT && key !== this.RIGHT) {
            this.moveEsquerda = false;
        }
        if (key === this.RIGHT && key !== this.LEFT) {
            this.moveDireita = false;
        }
        if (key === this.UP && key !== this.DOWN) {
            this.moveCima = false;
        }
        if (key === this.DOWN && key !== this.UP) {
            this.moveBaixo = false;
        }
        /* tiro */
        if (key === this.TIRO) {
            this.atirar = false
        }
    }
    move() {
        let newX = this.personagem.x;
        let newY = this.personagem.y;
        let speed = this.personagem.speed;
        let lowSpeed = speed / 1.5;

        if (this.moveEsquerda && !this.atirar) {
            newX -= speed;
        }
        if (this.moveDireita && !this.atirar) {
            newX += speed;
        }
        if (this.moveCima && !this.atirar) {
            newY -= speed;
        }
        if (this.moveBaixo && !this.atirar) {
            newY += speed;
        }
        if (this.moveEsquerda && this.atirar) {
            newX -= lowSpeed;
        }
        if (this.moveDireita && this.atirar) {
            newX += lowSpeed;
        }
        if (this.moveCima && this.atirar) {
            newY -= lowSpeed;
        }

        if (this.moveBaixo && this.atirar) {
            newY += lowSpeed;
        }
        this.personagem.atualizarPosicao(newX, newY)
    }
    atira() {
        // console.log(this.personagem)
        if(this.atirar)
        {   
            if (this.personagem.arma.qtdMunicao>0) {
                this.personagem.apertarGatilho()
            }
        }

    }
}

const Player1 = new Personagem(100, (canvas.height - pixel * 2) / 2, true)
const Player2 = new Personagem(canvas.width - 100, (canvas.height - pixel * 2) / 2, false)

const municaoPlayer1 = new Projetil(Player1.x, Player1.y, Player1.estaEsquerda, 15, pixel / 3, pixel / 3)
const pistolaPlayer1 = new Arma("pistola", 8, municaoPlayer1)
Player1.setArma(pistolaPlayer1)

const municaoPlayer2 = new Projetil(Player2.x, Player2.y, Player2.estaEsquerda, 15, pixel / 3, pixel / 3)
const pistolaPlayer2 = new Arma("pistola", 8, municaoPlayer2)
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

    moveProjetil(Player1.arma.arrProjeteis)
    moveProjetil(Player2.arma.arrProjeteis)

    ControlerPlayer1.move()
    ControlerPlayer2.move()

    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)