function verifica() {
    // isShot()



    if (!Player1.isDead() && !Player2.isDead()) {

        Player1.verificaColisaoBorda()
        Player2.verificaColisaoBorda()

        console.log(Player1.arma.arrProjeteis.verificaColisaoBorda())
        // .verificaColisaoBorda()
        // Player2.arma.arrProjeteis.verificaColisaoBorda()

        Player1.desenhar()
        Player2.desenhar()
        // Player1.arma.desenha()
        // Player2.arma.desenha()
        Player1.arma.projetil.desenhar()
        Player2.arma.projetil.desenhar()
    }
}

function limpa() {
    /* Limpa a tela */
    contexto.clearRect(0, 0, canvas.width, canvas.height)
}

function getRandom(valor) {
    return Math.floor(Math.random() * valor) + 1
}