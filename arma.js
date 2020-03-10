class Arma {
    constructor(nome, qtdMunicao, tipo, x, y) {
        this.nome = nome
        this.qtdMunicao = qtdMunicao
        this.projetil = tipo
        this.arrProjeteis = []
        this.recarregar()
    }

    copy(projetil) {
        return new Projetil(projetil.x, projetil.y, projetil.estaEsquerda, projetil.speedProjetil, projetil.larguraProjetil, projetil.alturaProjetil)
    }

    getPosicaoProjeteis() {
        return this.arrProjeteis;
    }

    recarregar() {
        console.log("Oi")
        for (let i = 0; i < this.qtdMunicao; i++) {
            this.arrProjeteis.push(this.copy(this.projetil))
        }
    }

    disparar() {
        const index = this.obterIndexDeUmaMunicaoNaoDisparada();
        if (index !== -1) {
            this.arrProjeteis[index].disparado = true
        } else {
            this.recarregar()
            this.disparar()
        }
    }
    atualizarPosicao(x, y) {
        this.projetil.x = x
        this.projetil.y = y
        for (let i = 0; i < this.qtdMunicao; i++) {
            this.arrProjeteis[i].atualizarPosicao(x,y)
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
        this.i = 0;
    }

    movimentar() {
        if (this.disparado) {
            if (this.estaEsquerda)
                this.x += this.speedProjetil
            else
                this.x -= this.speedProjetil
        }
    }

    atualizarPosicao(x,y){
        this.x = x - this.larguraProjetil / 2
        this.y = y - this.alturaProjetil / 2
    }
}