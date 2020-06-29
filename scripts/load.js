function preload() {
	imagemCenario = loadImage('imagens/cenario/espaco.png');
	imagemParallax = loadImage('imagens/cenario/asteroides.png');
	imagemGameOver = loadImage('imagens/assets/game-over.png');
	imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
	fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
	imagemVida = loadImage('imagens/assets/coracao.png');
	imagemPersonagem = loadImage('imagens/personagem/astroboy.png'); 
	imagemInimigo = loadImage('imagens/inimigos/green-alien.png'); 
	imagemInimigoGrande = loadImage('imagens/inimigos/big-alien.png');
	imagemInimigoVoador = loadImage('imagens/inimigos/alien-voador.png');
	imagemInimigoNave = loadImage('imagens/inimigos/alien-nave.png');
	config = loadJSON('config/config.json')
	somDoJogo = loadSound('sons/trilha_jogo.mp3');
	somDoPulo = loadSound('sons/somPulo.mp3');
}
