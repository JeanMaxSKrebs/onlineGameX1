function limpaImprimeVerifica(){
    /* Limpa a tela */
    contexto.clearRect(0, 0, canvas.width, canvas.height)
    contexto.restore()
    
    /* Desenha o Player1 */
    if(!Player1.verificaMorte()&&!Player2.verificaMorte())
    {
        /* Desenha na tela*/
        Player1.desenha()
        Player1.desenhaProjetil()
        Player2.desenha()
        Player2.desenhaProjetil()
        
        /*Verifica colisao com a borda */
        Player1.verificaColisaoBorda()
        Player2.verificaColisaoBorda()

        Player1.colisaoProjetilBorda()
        Player2.colisaoProjetilBorda()

        /* Verifica colisao com inimigos */
        // if(Player1.colisaoProjetilInimigo())
        // {
        //     /* Roubo de hp */
        //     Player1.rouboHP()
        // }
        // if(Player2.colisaoProjetilInimigo())
        // {
        //     /* Roubo de hp */
        //     Player2.rouboHP()
        // }
        
        /* Verifica colisao com paredes */
        
                                // /* Verifica colisao com inimigos */
                                // if(Player1.verificaColisaoInimigo()&&Player2.verificaColisaoInimigo())
                                // {
                                // /* Roubo de hp */
                                    // Player1.rouboHP()
                                    // Player2.rouboHP()
                                // }
    }
        /* Verifica colisao com itens */
        
}


function getRandom(valor) {
    return Math.floor(Math.random() * valor) + 1  
}