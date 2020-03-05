function verifica() {
    // isShot()
    if (!Player1.isDead() && !Player2.isDead()) {

        desenhaProjetil()
        Player1.desenha()
        Player2.desenha()

        Player1.verificaColisaoBorda()
        Player2.verificaColisaoBorda()
    
        colisaoProjetilBorda()
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