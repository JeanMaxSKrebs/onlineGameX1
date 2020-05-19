class Arma {
    constructor(nome, qtdProjeteis, dados, x, y) {
        this.nome = nome
        this.qtdProjeteis = qtdProjeteis
        this.projetil = dados
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

    quantidadeProjeteisnoPente() {
        let qtdProjeteisnoPente = 0
        for (let i = 0; i < this.qtdProjeteis; i++) {
            if(!this.arrProjeteis[i].disparado)
                qtdProjeteisnoPente++
        }
        console.log("qtdProjeteis no pente: "+qtdProjeteisnoPente)
        return qtdProjeteisnoPente
    }

    recarregar() {
        if (this.arrProjeteis.length <= this.qtdProjeteis) {
            for (let i = 0; i < this.qtdProjeteis; i++) {
                this.arrProjeteis.push(this.copy(this.projetil))
            }
        }
    }

    disparar() {
        const index = this.obterIndexDeUmaMunicaoNaoDisparada();
        console.log("     ultima munição disparada: "+index)

        if (index !== -1 || index > this.qtdMunicao)
            this.arrProjeteis[index].disparado = true
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