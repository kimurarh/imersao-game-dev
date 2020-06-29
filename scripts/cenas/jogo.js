class Jogo {
    constructor() {
        this.indice = 0;

        // Carrega do JSON o mapa
        this.mapa = config.mapa;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 6);
        parallax = new Cenario(imagemParallax, 2);
        pontuacao = new Pontuacao();

        // Carrega do JSON os parametros do personagem
        vida = new Vida(config.personagem.vidaMaxima, config.personagem.vidaInicial);

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, height*0.04, 88, 132, 88, 132);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, height*0.04, 52, 52, 104, 104, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2, 0, 200, 200, 400, 400, 15);

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }

    keyPressed(key) {
        if(key === 'ArrowUp' || key === ' ') {
            personagem.pula();
            somDoPulo.play();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();
        parallax.exibe();
        parallax.move();

        vida.draw();
        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < - inimigo.largura;
        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();

        if(inimigoVisivel) {
            this.indice++;
            inimigo.aparece();

            if(this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }
        
        if(personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();

            if(vida.vidas === 0) {
                vida.draw();
                image(imagemGameOver, width/2 - 200, height/2);
                noLoop();
                somDoJogo.stop();
            }
        }
    }
}