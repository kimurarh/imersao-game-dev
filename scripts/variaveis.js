let imagemCenario;
let imagemParallax;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemVida;
let imagemTelaInicial;
let fonteTelaInicial;
let somDoPulo;
let jogo;
let config;

let cenario;
let parallax;
let somDoJogo;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

let cenaAtual = 'telaInicial'; 
let cenas;
let telaInicial;
let botaoGerenciador;
let vida;

const matrizInimigo = [
	[0, 0],
	[104, 0],
	[208, 0],
	[312, 0],
	[0, 104],
	[104, 104],
	[208, 104],
	[312, 104],
	[0, 208],
	[104, 208],
	[208, 208],
	[312, 208],
	[0, 312],
	[104, 312],
	[208, 312],
	[312, 312],
	[0, 418],
	[104, 418],
	[208, 418],
	[312, 418],
	[0, 522],
	[104, 522],
	[208, 522],
	[312, 522],
	[0, 626],
	[104, 626],
	[208, 626],
	[312, 626],
];

const matrizPersonagem = [
	[0, 0],
	[88, 0],
	[176, 0],
	[264, 0],
	[352, 0],
	[440, 0],
	[0, 132],
	[88, 132],
	[176, 132],
	[264, 132],
	[352, 132],
	[440, 132],
	[0, 264],
	[88, 264],
	[176, 264],
	[264, 264],
	[352, 264],
	[440, 264]
];

const matrizInimigoGrande = [
[0,0],
[400,0],
[800,0],
[1200,0],
[1600,0],
[0,400],
[400,400],
[800,400],
[1200, 400],
[1600, 400],
[0,800],
[400, 800],
[800, 800],
[1200, 800],
[1600, 800],
[0, 1200],
[400, 1200],
[800, 1200],
[1200, 1200],
[1600, 1200], 
[0, 1600],
[400, 1600],
[800, 1600],
[1200, 1600],
[1600, 1600],
[0, 2000],
[400, 2000],
[800, 2000],
];

const matrizInimigoVoador = [
[0,0],
[200, 0],
[400, 0],
[0, 150],
[200, 150],
[400, 150],
[0, 300],
[200, 300],
[400, 300],
[0, 450],
[200, 450],
[400, 450],
[0, 600],
[200, 600],
[400, 600],
[0, 750],
];

const inimigos = [];