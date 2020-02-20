function controle(personagem, UP, DOWN, LEFT, RIGHT, TIRO) {

    this.moveEsquerda = false,
    this.moveDireita = false,
    this.moveCima = false,
    this.moveBaixo = false

    this.atirar = false

    this.comecaMovimento = function (e) {
        var key = e.keyCode;
        if (key === LEFT && key !== RIGHT) {
            this.moveEsquerda = true
        }
        if (key === RIGHT && key !== LEFT) {
            this.moveDireita = true
        }
        if (key === UP && key !== DOWN) {
            this.moveCima = true
        }
        if (key === DOWN && key !== UP) {
            this.moveBaixo = true
        }
        if (key === TIRO) {
            this.atirar = true
        }
        
    }

    this.paraMovimento = function (e) {
        var key = e.keyCode;
        if (key === LEFT && key !== RIGHT) {
            this.moveEsquerda = false;
        }
        if (key === RIGHT && key !== LEFT) {
            this.moveDireita = false;
        }
        if (key === UP && key !== DOWN) {
            this.moveCima = false;
        }
        if (key === DOWN && key !== UP) {
            this.moveBaixo = false;
        }
        if (key === TIRO) {
            this.atirar = false
        }
    }
    window.addEventListener("keydown", this.comecaMovimento);
    window.addEventListener("keyup", this.paraMovimento);
    
    this.move = function () {
        let newX = personagem.x;
        let newY = personagem.y;
        let speed = personagem.speed;
        let lowSpeed = speed/personagem.reducaoVelocidade;

        if (this.moveEsquerda && !this.atirar) {
            console.log("oi")
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
        if (this.atirar) {
            if (this.projetil.length <= 20) {
                this.meioX = this.x + this.larguraPersonagem / 2
                this.meioY = this.y + this.alturaPersonagem / 2

                this.projetil.push({
                    x: this.x + (this.larguraPersonagem / 2) - (this.larguraProjetil / 2),
                    y: this.y + (this.alturaPersonagem / 2) - (this.alturaProjetil / 2)
                })
            }
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
        personagem.atualizarPosicao(newX,newY)
    }
}