class Personagem extends Animacao {
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);

        this.yInicial = height - this.altura;
        this.y = this.yInicial;
        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
    }

    pula() {
        this.velocidadeDoPulo = -33;
    }

    aplicaGravidade() {
        this.y += this.velocidadeDoPulo;
        this.velocidadeDoPulo += this.gravidade;

        if(this.y > this.yInicial) {
            this.y = this.yInicial;
        }
    }

    estaColidindo(inimigo) {
        const precisao = 0.7;
        const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

        return colisao;
    }

    // // Atualiza o frame do personagem
    // this.xAxis += this.imagem.width/3;  // nº frames na horizontal da imagem

    // if(this.xAxis >= this.imagem.width) {
    //     this.xAxis = 0;
    //     this.yAxis += this.imagem.height/7; // nº frames na vertical da imagem
    //     if(this.yAxis >= this.imagem.height) {
    //         this.yAxis = 0;
    //     }
    // }
}