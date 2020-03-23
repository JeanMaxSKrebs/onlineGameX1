class Arma {
    constructor(nome, qtdMunicao, tipo, x, y) {
        this.nome = nome
        this.qtdMunicao = qtdMunicao
        this.projetil = tipo
        this.arrProjeteis = []
        this.x = x
        this.y = y
        this.recarregar()
    }

    copy(projetil) {
        return new Projetil(projetil.x, projetil.y, projetil.estaEsquerda, projetil.speedProjetil, projetil.larguraProjetil, projetil.alturaProjetil)
    }

    getPosicaoProjeteis() {
        return this.arrProjeteis;
    }

    recarregar() {
        if (this.arrProjeteis.length <= this.qtdMunicao) {
            for (let i = 0; i < this.qtdMunicao; i++) {
                this.arrProjeteis.push(this.copy(this.projetil))
            }
        }
    }

    disparar() {
        const index = this.obterIndexDeUmaMunicaoNaoDisparada();

        if (index !== -1 || index > this.qtdMunicao) {
            this.arrProjeteis[index].disparado = true
        } else {
            this.recarregar()
            // this.disparar()
        }
    }

    atualizarPosicaoInicial(x, y) {
        this.projetil.x = x
        this.projetil.y = y
        for (let i = 0; i < this.qtdMunicao; i++) {
            this.arrProjeteis[i].atualizarPosicaoInicial(x, y)
        }
    }

    obterIndexDeUmaMunicaoNaoDisparada() {
        return this.arrProjeteis.findIndex(x => !x.disparado);
    }



}
class Projetil {
    constructor(x, y, estaEsquerda, speedProjetil, larguraProjetil, alturaProjetil) {
        this.x = x
        this.y = y
        this.estaEsquerda = estaEsquerda
        this.speedProjetil = speedProjetil
        this.larguraProjetil = larguraProjetil
        this.alturaProjetil = alturaProjetil
        this.disparado = false
    }
    desenhar() {
        contexto.fillStyle = "black"
        contexto.fillRect(this.x - this.larguraProjetil / 2, this.y - this.alturaProjetil / 2, this.larguraProjetil, this.alturaProjetil)
    }

    estaDisparado() {
        if (this.disparado) {
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

    destruir() {
        this.disparado = false
    }
}