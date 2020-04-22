function isShot(personagem, posicaoProjeteis) {

}
function posicaoProjeteis() {

}
function colisaoProjetilBorda(arrProjeteis) {

    for (var i = 0; i < arrProjeteis.length; i++) {
        if (arrProjeteis[i].x+arrProjeteis[i].larguraProjetil >= canvas.width || arrProjeteis[i].x <= 0) {
            if(arrProjeteis[i].disparado)
            {
                console.log('esta')
                arrProjeteis[i].destruir()
            }
        }
    }
}