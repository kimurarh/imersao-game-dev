let imagemCenario;
let imagemParallax;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemInimigoNave;
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
let inimigoNave;
let pontuacao;

let cenaAtual = 'telaInicial'; 
let cenas;
let telaInicial;
let botaoGerenciador;
let vida;

const matrizInimigo = [
	[0, 0],
	[451, 0],
	[902, 0],
	[1353, 0],
	[1804, 0],
	[0, 508],
	[451, 508],
	[902, 508],
	[1353, 508],
	[1804, 508],
	[0, 1016],
	[451, 1016],
	[902, 1016],
	[1353, 1016],
	[1804, 1016],
	[0, 1524],
	[451, 1524],
	[902, 1524],
	[1353, 1524],
	[1804, 1524],
	[0, 2032],
	[451, 2032],
	[902, 2032],
	[1353, 2032],
	[1804, 2032]
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
	[1214, 0],
	[2482, 0],
	[0,787],
	[1214, 787],
	[2482, 787],
	[0, 1574],
	[1214, 1574],
	[2482, 1574],
	[0, 2361],
	[1214, 2361],
	[2482, 2361],
	[0, 3148],
	[1214, 3148],
	[2482, 3148],
	[0, 3935],
	[1214, 3935],
	[2482, 3935],
	[0, 4722],
	[1214, 4722],
	[2482, 4722]
];

const matrizInimigoVoador = [
	[0, 0],
];

const matrizInimigoNave = [
	[0, 0],
];

const inimigos = [];