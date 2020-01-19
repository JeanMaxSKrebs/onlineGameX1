function inimigo(tipo) {
    console.log(tipo)

    if (tipo == "1") {
        this.alturaInimigo = pixel * 6
        this.larguraInimigo = pixel * 3
        this.hp = 750
        this.dano = 10
        this.speed = 5
        this.x = canvas.width - (100 + pixel * 3)
        this.y = (canvas.height - pixel * 6) / 2
        if(this.hp>0){
            this.status = "vivo"
        }
    }

    this.move = function (movesInimigo) {
        /*definiçoes movimento*/
        this.moveEsquerda = false,
        this.moveDireita = false,
        this.moveCima = false,
        this.moveBaixo = false

        let movimento = getRandom(movesInimigo)
        if(movimento == "1"){
            this.moveEsquerda=true
        }
        if(movimento == 2){
            this.moveDireita=true
        }
        if(movimento == 3){
            this.moveCima=true
        }
        if(movimento == 4){
            this.moveBaixo=true
        }

        if (this.moveEsquerda) {
            this.x = this.x - this.speed;
        }
        if (this.moveDireita) {
            this.x = this.x + this.speed;
        }
        if (this.moveCima) {
            this.y = this.y - this.speed;
        }
        if (this.moveBaixo) {
            this.y = this.y + this.speed;
        }
    }
    
    this.desenha = function() {
        contexto.restore()
        contexto.fillStyle = "black"
        contexto.fillRect(this.x, this.y, this.larguraInimigo, this.alturaInimigo)
        
        contexto.restore()
        contexto.font = "20px Arial"
        contexto.fillStyle = "black"
        contexto.fillText("HP: " + this.hp, canvas.width - 150, 20)        
    }
    this.verificaColisaoBorda = function() {
        if(this.x<=0)
        {
            this.x = this.x+this.speed
        }
        if(this.x>=canvas.width-this.larguraInimigo)
        {
            this.x = this.x-this.speed
        }
        if(this.y<=0)
        {
            this.y = this.y+this.speed
        }
        if(this.y>=canvas.height-this.alturaInimigo)
        {
            this.y = this.y-this.speed
        }
    }

    this.verificaMorte = function() {
        if(this.hp>0){
            this.status = "vivo"
            return false
        }else{
            this.status = "morto"
            this.x = 0 - this.alturaInimigo
            this.y = 0 - this.larguraInimigo
            contexto.restore()
            contexto.font = "48px Arial"
            canvas.style.backgroundColor = "green"
            contexto.fillStyle = "white"
            contexto.fillText("Parabéns", canvas.width/3+50, canvas.height/2)
            return true
        }
    }
}