class controle {

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

    comecaMovimento(e) {
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
    paraMovimento(e) {
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
        let lowSpeed = speed / reducaoVelocidade;

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
        if (this.atirar) {
            if (arrProjeteis.length <= this.personagem.qtdMaximaProjeteis) {
                console.log(this.personagem.qtdMaximaProjeteis)
                this.personagem.meioX = this.x + this.personagem.larguraPersonagem / 2
                this.personagem.meioY = this.y + this.personagem.alturaPersonagem / 2

                arrProjeteis.push({
                    x: this.personagem.x + (this.personagem.larguraPersonagem / 2) - (larguraProjetil / 2),
                    y: this.personagem.y + (this.personagem.alturaPersonagem / 2) - (alturaProjetil / 2),
                    direcao: this.estaEsquerda
                })

            }
        }

    }
}

const Player1 = new personagem(100, (canvas.height - pixel * 2) / 2, true)

const Player2 = new personagem(canvas.width - 100, (canvas.height - pixel * 2) / 2, false)

const ControlerPlayer1 = new controle(Player1, 87, 83, 65, 68, 32, Player1.estaEsquerda)
// console.log(Player1.estaEsquerda)

const ControlerPlayer2 = new controle(Player2, 38, 40, 37, 39, 13, Player2.estaEsquerda)
// console.log(Player2.estaEsquerda)

function comecarMovimento(e) {
    ControlerPlayer1.comecaMovimento(e)
    ControlerPlayer2.comecaMovimento(e)
}
function pararMovimento(e) {
    ControlerPlayer1.paraMovimento(e)
    ControlerPlayer2.paraMovimento(e)
}

window.addEventListener("keydown", comecarMovimento);
window.addEventListener("keyup", pararMovimento);


async function loop() {
    limpa()
    verifica()
    ControlerPlayer1.atira()
    ControlerPlayer2.atira()
    moveProjetil()
    ControlerPlayer1.move()
    ControlerPlayer2.move()

    requestAnimationFrame(loop)
}

requestAnimationFrame(loop)