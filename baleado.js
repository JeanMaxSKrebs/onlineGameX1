function isShot(personagem, posicaoProjeteis) {

}
function posicaoProjeteis() {

}
function moveProjetil() {
    for (var i = 0; i < arrProjeteis.length; i++) {
        if (arrProjeteis[i].direcao) {
            arrProjeteis[i].x = arrProjeteis[i].x + speedProjetil
        } else {
            arrProjeteis[i].x = arrProjeteis[i].x - speedProjetil
        }
    }

}
function desenhaProjetil() {
    for (var i = 0; i < arrProjeteis.length; i++) {
        contexto.restore()
        contexto.fillStyle = "white"
        contexto.fillRect(arrProjeteis[i].x, arrProjeteis[i].y, larguraProjetil, alturaProjetil)
    }
}
function colisaoProjetilBorda() {

    for (var i = 0; i < arrProjeteis.length; i++) {
        if (arrProjeteis[i].x > canvas.width - larguraProjetil || arrProjeteis[i].x <= 0) {
            console.log(arrProjeteis)
            arrProjeteis.shift()
        }
    }
}