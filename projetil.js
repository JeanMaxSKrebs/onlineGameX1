class Projetil {
    constructor(x, y, estaEsquerda, speedProjetil, larguraProjetil, alturaProjetil) {
        this.x = x
        this.y = y
        this.estaEsquerda = estaEsquerda
        this.speedProjetil = speedProjetil
        this.larguraProjetil = larguraProjetil
        this.alturaProjetil = alturaProjetil
        this.disparado = false
        this.meuIndex
    }

    desenhar() {
        contexto.fillStyle = "black"
        contexto.fillRect(this.x - this.larguraProjetil / 2, this.y - this.alturaProjetil / 2, this.larguraProjetil, this.alturaProjetil)
    }
 
    atualizarPosicaoInicial(x, y) {
        this.x = x
        this.y = y
    }

    verificaColisaoBorda() {
        if (this.x <= 0) {
            return true
        }
        if (this.x >= canvas.width - this.larguraProjetil) {
            return true
        }
        if (this.y <= 0) {
            return true
        }
        if (this.y >= canvas.height - this.alturaProjetil) {
            return true
        }

    }
}