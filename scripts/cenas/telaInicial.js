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
        textSize(120);
        fill('white');
        text('lost in space', width/2, height * 0.45); 
    }

    _botao() {
        botaoGerenciador.y = height / 7 * 4;
        botaoGerenciador.draw();
    }
}