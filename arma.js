class Arma {
    constructor(nome, qtdMunicao, tipo, x, y) {
        this.nome = nome
        this.qtdMunicao = qtdMunicao
        this.projetil = tipo
        this.arrProjeteis = []
        this.recarregar()
        this.x = x
        this.y = y
    }

    copy(projetil) {
        return new Projetil(projetil.x, projetil.y, projetil.estaEsquerda, projetil.speedProjetil, projetil.larguraProjetil, projetil.alturaProjetil)
    }

    getPosicaoProjeteis() {
        return this.arrProjeteis;
    }

    recarregar() {
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
        this.x = x
        this.y = y

        // for (let i = 0; i < this.qtdMunicao; i++) {
        //     if (this.arrProjeteis[i].disparado)
        //         this.arrProjeteis[i].atualizarPosicao()
        // }
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

    atualizarPosicao() {
        if (this.disparado) {
            if (this.estaEsquerda)
                this.x += this.speedProjetil
            else
                this.x -= this.speedProjetil
        }
    }
}