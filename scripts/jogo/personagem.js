class Personagem {
    constructor(imagem) {
        this.imagem = imagem;
        
        this.matriz = [];
        let xAxis = 0;
        let yAxis = 0;
        
        // Gera a matriz com frames do personagem
        for(var c = 0; c <= 15; c++ ) {
            if(c % 4 === 0 && c > 0) {
                xAxis = 0;
                yAxis += 270;
            } 
            this.matriz[c] = [xAxis, yAxis];
            xAxis += 220;
        }

        // For using the dog sprites
        // for(var c = 0; c <= 20; c++ ) {
        //     if(c % 3 === 0 && c > 0) {
        //         xAxis = 0;
        //         yAxis += 203;
        //     } 
        //     this.matriz[c] = [xAxis, yAxis];
        //     xAxis += 300;
        // }


        this.frameAtual = 0;
    }

    exibe() {
        // Coordenadas X e Y no canvas (onde o personagem irá aparecer)
        let xCoord = 0;   
        let yCoord = height - 154;    // Obs.: height -> altura do canvas 135
        // Largura e altura da imagem no canvas
        let imgLarg = 110;  //200
        let imgAlt = 135;    // 154
        // posição (X e Y) do frame do personagem dentro da imagem
        let xFrame = this.matriz[this.frameAtual][0];   
        let yFrame = this.matriz[this.frameAtual][1]; 
        // Largura e altura do frame do personagem
        let xFrameLarg = 220;  // 300 
        let yFrameAlt = 270;    // 203

        image(this.imagem, xCoord, yCoord, imgLarg, imgAlt, xFrame, yFrame, xFrameLarg, yFrameAlt);	
        
        this.anima();
    }

    anima() {
        this.frameAtual++;

        if(this.frameAtual >= this.matriz.length - 1) {
            this.frameAtual = 0;
        }
    }
}