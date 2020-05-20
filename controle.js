class Controle {

    constructor(personagem, UP, DOWN, LEFT, RIGHT, TIRO, RECARREGA, estaEsquerda) {
        this.personagem = personagem
        this.UP = UP
        this.DOWN = DOWN
        this.LEFT = LEFT
        this.RIGHT = RIGHT
        this.TIRO = TIRO
        this.RECARREGA = RECARREGA
        this.moveEsquerda = false;
        this.moveDireita = false;
        this.moveCima = false;
        this.moveBaixo = false;
        this.atirar = false;
        this.recarregar = false;
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
        if (key === this.RECARREGA) {
            this.recarregar = true
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
        if (key === this.RECARREGA) {
            this.recarregar = false
        }
    }
    move() {
        let newX = this.personagem.x;
        let newY = this.personagem.y;
        let speed = this.personagem.speed;
        let lowSpeed = speed / 2;

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
        this.personagem.movimentar(newX, newY)
    }
    recarrega() {
        if (this.recarregar){
            if (this.personagem.arma.quantidadeProjeteisnoPente() <= 0) {
                this.personagem.recarregarArma()
            }
        }
    }
    atira() {
        if (this.atirar) {
            if (this.personagem.arma.quantidadeProjeteisnoPente() > 0) {
                this.personagem.apertarGatilho()
            }
        }

    }
}