class Projetil {
    constructor(x, y, estaEsquerda, speedProjetil, larguraProjetil, alturaProjetil) {
        this.x = x
        this.y = y
        this.estaEsquerda = estaEsquerda
        this.speedProjetil = speedProjetil
        this.larguraProjetil = larguraProjetil
        this.alturaProjetil = alturaProjetil
        this.disparado = false
        this.destruir()
    }
    desenhar() {
        contexto.fillStyle = "black"
        contexto.fillRect(this.x - this.larguraProjetil / 2, this.y - this.alturaProjetil / 2, this.larguraProjetil, this.alturaProjetil)
    }

    estaDisparado() {
        if (this.disparado) {
            console.log('true')
            return true
        } else
            return false
    }

    movimentar() {
        if (this.estaEsquerda)
            this.x += this.speedProjetil
        else
            this.x -= this.speedProjetil

    }

    atualizarPosicaoInicial(x, y) {
        this.x = x - this.larguraProjetil / 2
        this.y = y - this.alturaProjetil / 2
    }

    verificaColisaoBorda() {
        if (this.x <= 0) {
            console.log(this.x)
            this.destruir()
        }
        if (this.x >= canvas.width - this.larguraProjetil) {
            this.destruir()
        }
        if (this.y <= 0) {
            this.destruir()
        }
        if (this.y >= canvas.height - this.alturaProjetil) {
            this.destruir()
        }
        return;
    }

    destruir() {
        console.log(this.x+" "+this.y)
        this.disparado = false
    }
}