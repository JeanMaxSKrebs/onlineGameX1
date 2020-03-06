// console.log(personagem(tipo))
// console.log(inimigo(tipo))

function Personagem(x, y, estaEsquerda) {

    console.log("personagem esta a esquerda?", estaEsquerda)
    this.arma = {}
    this.estaEsquerda = estaEsquerda
    /* fica no servidor */
    /* posição */
    this.x = x
    this.y = y
    /* aspectos fisicos */
    this.width = 32 * 2
    this.height = 32 * 2
    this.hp = 100
    this.hpMaximo = 100
    this.lifeSteal = 10
    this.lifeSteal = 0
    this.speed = 10
    this.dano = 10
    this.larguraPersonagem = pixel
    this.alturaPersonagem = pixel * 2

    /* projetil */
    this.qtdMaximaProjeteis = 10
    // console.log(this.width)

    this.atualizarPosicao = function (x, y) {
        this.x = x
        this.y = y
    }

    this.setArma = function (arma){
        this.arma = arma
    }

    this.apertarGatilho = function(){
        this.arma.disparar()
    }
    
    this.desenha = function () {
        contexto.restore()
        contexto.fillStyle = "white"
        contexto.fillRect(this.x, this.y, this.larguraPersonagem, this.alturaPersonagem)

        contexto.restore()
        contexto.font = "20px Arial"
        contexto.fillStyle = "white"
        contexto.fillText("HP: " + this.hp, 70, 20)
        contexto.fillText("Dano: " + this.dano, 70, 40)
    }
    this.verificaColisaoBorda = function () {
        if (this.x <= 0) {
            this.x = this.x + this.speed
        }
        if (this.x >= canvas.width - this.larguraPersonagem) {
            this.x = this.x - this.speed
        }
        if (this.y <= 0) {
            this.y = this.y + this.speed
        }
        if (this.y >= canvas.height - this.alturaPersonagem) {
            this.y = this.y - this.speed
        }
    }
    this.verificaColisaoInimigo = function () {
        if (this.x < Inimigo.x + Inimigo.larguraInimigo &&
            this.x + this.larguraPersonagem > Inimigo.x &&
            this.y < Inimigo.y + Inimigo.alturaInimigo &&
            this.y + this.alturaPersonagem > Inimigo.y) {

            this.hp = this.hp - Inimigo.dano
            Inimigo.hp = Inimigo.hp - Player1.dano
            return true
        }
        else {
            return false
        }
    }
    this.isDead = function () {
        if (this.hp > 0) {
            this.status = "vivo"
            return false
        } else {
            this.status = "morto"
            this.x = 0 - this.alturaPersonagem
            this.y = 0 - this.larguraPersonagem
            contexto.restore()
            contexto.font = "48px Arial"
            canvas.style.backgroundColor = "black"
            contexto.fillStyle = "red"
            contexto.fillText("GAME OVER", canvas.width / 3, canvas.height / 2)
            return true
        }
    }
    this.rouboHP = function () {

        if (this.hp < this.hpMaximo) {
            this.hp = this.hp + (this.dano * this.lifeSteal / 100)
        }
    }
}