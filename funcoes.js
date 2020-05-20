function verifica() {
    // isShot()



    if (!Player1.isDead() && !Player2.isDead()) {
        moveProjetil(Player1)
        moveProjetil(Player2)

        Player1.verificaColisaoBorda()
        Player2.verificaColisaoBorda()

        if (Player1.arma.projetil.verificaColisaoBorda()) {
            destroiProjetil(Player1)
        }
        if (Player2.arma.projetil.verificaColisaoBorda()) {
            destroiProjetil(Player2)
        }
        desenhaProjetil(Player1)
        desenhaProjetil(Player2)

        Player1.arma.projetil.desenhar()
        Player2.arma.projetil.desenhar()
        Player1.desenhar()
        Player2.desenhar()
        Player1.arma.desenhar()
        Player2.arma.desenhar()
    }
}
function destroiProjetil(player) {
    player.arma.arrProjeteis.shift()
}


function moveProjetil(player) {
    for (var i = 0; i < player.arma.arrProjeteis.length; i++) {
        if (player.arma.arrProjeteis[i].disparado) {
            if (player.arma.arrProjeteis[i].estaEsquerda) {
                player.arma.arrProjeteis[i].x = player.arma.arrProjeteis[i].x + player.arma.arrProjeteis[i].speedProjetil
            } else {
                player.arma.arrProjeteis[i].x = player.arma.arrProjeteis[i].x - player.arma.arrProjeteis[i].speedProjetil
            }
        }
    }
}
function desenhaProjetil(player) {

    for (var i = 0; i < player.arma.arrProjeteis.length; i++) {
        if (player.arma.arrProjeteis[i].disparado) {
            contexto.restore()
            contexto.fillStyle = "white"
            contexto.fillRect(player.arma.arrProjeteis[i].x, player.arma.arrProjeteis[i].y, player.arma.arrProjeteis[i].larguraProjetil, player.arma.arrProjeteis[i].alturaProjetil)
        }
    }
}

function limpa() {
    /* Limpa a tela */
    contexto.clearRect(0, 0, canvas.width, canvas.height)
}

function getRandom(valor) {
    return Math.floor(Math.random() * valor) + 1
}