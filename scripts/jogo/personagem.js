class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;

        this.velocidadeDoPulo = 0;
        this.gravidade = 5;
        this.alturaDoPulo = -50;
        this.pulos = 0;
        this.invencivel = false;
    }

    pula() {
        if(this.pulos < 2) {
            this.velocidadeDoPulo = this.alturaDoPulo;
            this.pulos++;
        }
    }

    aplicaGravidade() {
        this.y += this.velocidadeDoPulo;
        this.velocidadeDoPulo += this.gravidade;

        if(this.y > this.yInicial) {
            this.y = this.yInicial;
            this.pulos = 0;
        }
    }

    tornarInvencivel() {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false;
        }, 1000);
    }

    estaColidindo(inimigo) {
        if(this.invencivel) {
            return false;
        }
        const precisao = 0.6;

        // Teste de colisao
        // noFill();
        // circle(this.x + this.largura/2, this.y + this.altura/2, this.largura * precisao);
        // circle(inimigo.x + inimigo.largura * precisao, inimigo.y + inimigo.altura/2, inimigo.largura * precisao);

        // const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

        const colisao = collideCircleCircle(this.x + this.largura/2, this.y + this.altura/2, this.largura * precisao, inimigo.x + inimigo.largura * precisao, inimigo.y + inimigo.altura/2, inimigo.largura * precisao); 

        return colisao;
    }

}