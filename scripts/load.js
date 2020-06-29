function preload() {
	imagemCenario = loadImage('imagens/cenario/espaco.png');
	imagemParallax = loadImage('imagens/cenario/asteroides.png');
	imagemGameOver = loadImage('imagens/assets/game-over.png');
	imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
	fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
	imagemVida = loadImage('imagens/assets/coracao.png');
	imagemPersonagem = loadImage('imagens/personagem/astroboy.png'); 
	imagemInimigo = loadImage('imagens/inimigos/gotinha.png'); 
	imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
	imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
	config = loadJSON('config/config.json')
	somDoJogo = loadSound('sons/trilha_jogo.mp3');
	somDoPulo = loadSound('sons/somPulo.mp3');
}
