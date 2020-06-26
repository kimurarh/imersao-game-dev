class TelaInicial {
    constructor() {
        
    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        textSize(50);
        text('As aventuras de', width/2, height * 0.35); 
        textSize(140);
        text('Hipsta', width/2, height * 0.52); 
    }

    _botao() {
        botaoGerenciador.y = height / 7 * 4;
        botaoGerenciador.draw();
    }
}