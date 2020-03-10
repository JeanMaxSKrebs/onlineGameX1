function isShot(personagem, posicaoProjeteis) {

}
function posicaoProjeteis() {

}
function moveProjetil(arrProjeteis) {
    for (var i = 0; i < arrProjeteis.length; i++) {
        arrProjeteis[i].movimentar()
    }

}
function desenhaProjetil(arrProjeteis) {
    for (var i = 0; i < arrProjeteis.length; i++) {
        if(arrProjeteis[i].disparado){
            contexto.restore()
            contexto.fillStyle = "white"
            contexto.fillRect(arrProjeteis[i].x, arrProjeteis[i].y, arrProjeteis[i].larguraProjetil, arrProjeteis[i].alturaProjetil)
        }
    }
}
function colisaoProjetilBorda(arrProjeteis) {

    for (var i = 0; i < arrProjeteis.length; i++) {
        if (arrProjeteis[i].x > canvas.width - arrProjeteis[i].larguraProjetil || arrProjeteis[i].x <= 0) {
            arrProjeteis.shift()
        }
    }
}