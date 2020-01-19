function limpaImprimeVerifica(){
    /* Limpa a tela */
    contexto.clearRect(0, 0, canvas.width, canvas.height)
    contexto.save()

    
    
    /* Desenha o Personagem */
    if(!Personagem.verificaMorte()&&!Inimigo.verificaMorte())
    {
        /* Desenha na tela*/
        Personagem.desenha()
        Personagem.desenhaProjetil()
        Inimigo.desenha()
        
        /*Verifica colisao com a borda */
        Personagem.verificaColisaoBorda()
        Inimigo.verificaColisaoBorda()
        Personagem.colisaoProjetilBorda()
        
        /* Verifica colisao com paredes */
        
        /* Verifica colisao com inimigos */
        if(Personagem.verificaColisaoInimigo())
        {
            /* Roubo de hp */
            Personagem.rouboHP()
        }
    }
        /* Verifica colisao com itens */
        
}

function getRandom(valor) {
    return Math.floor(Math.random() * valor) + 1  
}