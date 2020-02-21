// module.exports = class controle {

//     constructor(personagem, UP, DOWN, LEFT, RIGHT, TIRO) {
//         this.personagem = personagem
//         this.UP = UP
//         this.DOWN = DOWN
//         this.LEFT = LEFT
//         this.RIGHT = RIGHT
//         this.TIRO = TIRO

//     }
//     moveEsquerda = false;
//     moveDireita = false;
//     moveCima = false;
//     moveBaixo = false;
//     atirar = false;

//     comecaMovimento(e) {
//         var key = e.keyCode;
//         if (key === this.LEFT && key !== this.RIGHT) {
//             this.moveEsquerda = true
//         }
//         if (key === this.RIGHT && key !== this.LEFT) {
//             this.moveDireita = true
//         }
//         if (key === this.UP && key !== this.DOWN) {
//             this.moveCima = true
//         }
//         if (key === this.DOWN && key !== this.UP) {
//             this.moveBaixo = true
//         }
//         if (key === this.TIRO) {
//             this.atirar = true
//         }

//     }
//     paraMovimento(e) {
//         var key = e.keyCode;
//         if (key === this.LEFT && key !== this.RIGHT) {
//             this.moveEsquerda = false;
//         }
//         if (key === this.RIGHT && key !== this.LEFT) {
//             this.moveDireita = false;
//         }
//         if (key === this.UP && key !== this.DOWN) {
//             this.moveCima = false;
//         }
//         if (key === this.DOWN && key !== this.UP) {
//             this.moveBaixo = false;
//         }
//         if (key === this.TIRO) {
//             this.atirar = false
//         }
//     }


//     move() {
//         let newX = this.personagem.x;
//         let newY = this.personagem.y;
//         let speed = this.personagem.speed;
//         let lowSpeed = speed / this.personagem.reducaoVelocidade;

//         z
//         if (this.moveEsquerda && !this.atirar) {
//             console.log("oi")
//             newX -= speed;
//         }
//         if (this.moveDireita && !this.atirar) {
//             newX += speed;
//         }
//         if (this.moveCima && !this.atirar) {
//             newY -= speed;
//         }
//         if (this.moveBaixo && !this.atirar) {
//             newY += speed;
//         }
//         if (this.atirar) {
//             if (this.projetil.length <= 20) {
//                 this.meioX = this.x + this.larguraPersonagem / 2
//                 this.meioY = this.y + this.alturaPersonagem / 2

//                 this.projetil.push({
//                     x: this.x + (this.larguraPersonagem / 2) - (this.larguraProjetil / 2),
//                     y: this.y + (this.alturaPersonagem / 2) - (this.alturaProjetil / 2)
//                 })
//             }
//         }
//         if (this.moveEsquerda && this.atirar) {
//             newX -= lowSpeed;
//         }
//         if (this.moveDireita && this.atirar) {
//             newX += lowSpeed;
//         }
//         if (this.moveCima && this.atirar) {
//             newY -= lowSpeed;
//         }

//         if (this.moveBaixo && this.atirar) {
//             newY += lowSpeed;
//         }
//         this.personagem.atualizarPosicao(newX, newY)
//     }
// }