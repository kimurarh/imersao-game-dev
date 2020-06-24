class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        textAlign(RIGHT);
        fill('#ffffff');
        textSize(50);
        text(parseInt(this.pontos), width - 20, 50);
    }

    adicionarPonto() {
        this.pontos += 0.1;
    }
}