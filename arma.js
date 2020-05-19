class Arma {
    constructor(nome, qtdProjeteis, dados, x, y, altura, largura) {
        this.nome = nome
        this.qtdProjeteis = qtdProjeteis
        this.projetil = dados
        this.arrProjeteis = []
        this.x = x
        this.y = y
        this.alturaArma = altura
        this.larguraArma = largura

    }

    copy(projetil) {
        return new Projetil(projetil.x, projetil.y, projetil.estaEsquerda, projetil.speedProjetil, projetil.larguraProjetil, projetil.alturaProjetil)
    }

    quantidadeProjeteisnoPente() {
        let qtdProjeteisnoPente = 0
        for (let i = 0; i < this.qtdProjeteis; i++) {
            if (this.arrProjeteis[i] !== undefined)
                if (!this.arrProjeteis[i].disparado)
                    qtdProjeteisnoPente++
        }
        return qtdProjeteisnoPente
    }

    recarregar() {

        console.log(this.arrProjeteis.length + " " + this.qtdProjeteis)
        if (this.arrProjeteis.length = this.qtdProjeteis) {
            for (let i = 0; i < this.qtdProjeteis; i++) {
                this.arrProjeteis.shift()
                this.arrProjeteis.push(this.copy(this.projetil))
            }
        }
    }
    desenhar() {
        contexto.fillStyle = "white"
        contexto.fillRect(this.x, this.y, this.larguraArma, this.alturaArma)
    }

    disparar() {
        const index = this.obterIndexDeUmaMunicaoNaoDisparada();
        // console.log("     ultima munição disparada: "+index)

        if (index !== -1 || index > this.qtdProjeteis)
        {
            this.arrProjeteis[index].disparado = true
        }
    }

    atualizarPosicaoInicial(x, y) {
        this.x = x - this.larguraArma / 2
        this.y = y - this.alturaArma / 2
        for (let i = 0; i < this.qtdProjeteis; i++) {
            if (this.arrProjeteis[i] !== undefined) {
                this.arrProjeteis[i].atualizarPosicaoInicial(x, y)
            }
        }
    }

    obterIndexDeUmaMunicaoNaoDisparada() {
        return this.arrProjeteis.findIndex(x => !x.disparado);
    }



}