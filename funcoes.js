function verifica() {
    // isShot()

    //tentrar verficar antes n deu
    // let meioX = Player1.x + Player1.larguraPersonagem / 2 - Player1.arma.projetil.larguraProjetil / 2
    // let meioY = Player1.y + Player1.alturaPersonagem / 2 - Player1.arma.projetil.alturaProjetil / 2

    // Player1.arma.atualizarPosicao(meioX, meioY)

    if (!Player1.isDead() && !Player2.isDead()) {

        desenhaProjetil(Player1.arma.arrProjeteis)
        desenhaProjetil(Player2.arma.arrProjeteis)
        Player1.desenha()
        Player2.desenha()

        Player1.verificaColisaoBorda()
        Player2.verificaColisaoBorda()

        colisaoProjetilBorda(Player1.arma.arrProjeteis)
        colisaoProjetilBorda(Player2.arma.arrProjeteis)
    }
}

function limpa() {
    /* Limpa a tela */
    contexto.clearRect(0, 0, canvas.width, canvas.height)
    contexto.restore()
}

function getRandom(valor) {
    return Math.floor(Math.random() * valor) + 1
}