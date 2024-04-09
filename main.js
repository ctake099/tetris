class Game {
    constructor(){
        this.field = new Field(20, 10);
        this.currentTetromino = this.generateNewTetromino();
        this.isGameOver = false;
        this.gameInterval = null;
        this.renderer = this.initRenderer();
    }

    initRenderer(){
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        return new Renderer(canvas, context); 

    }

    generateNewTetromino(){
        return new Tetromino(4, 0);

    }

    start(){
        this.isGameOver = false;
        this.gameInterval = setInterval(() => this.update(), 1000);

    }

    update(){
        if (this.isGameOver){
            clearInterval(this.gameInterval);
            console.log("Game Over");
            return;
        }
        //ゲームの更新
        // テトロミノの落下、ラインの消去、ゲームオーバーかなど
        
        this.renderer.clear();
        this.renderer.drawField(this.field);
        this.renderer.drawTetromino(this.currentTetromino);
        // プレイヤーの入力で動かす
        // 仮にy座標を+1ずつする
        this.currentTetromino.y += 1;

    }

    checkGameOver(){

    }
}

class Tetromino {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tetro = [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 0]
        ]
        this.color = "red";
    }

    initializeTetro() {

    }

    move(dx, dy){


    }

    rotate() {

    }
}

class Field {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = this.initializeGrid(rows, cols);
    }

    initializeGrid(rows, cols) {
        let grid = [];
        for (let i = 0; i < rows; i++) {
            grid[i] = [];
            for (let j = 0; j < cols; j++) {
                grid[i][j] = 0;
            }
        }
        return grid;
    }

    addTetromino(tetro) {

    }

    clearLines() {

    }
}

class Renderer{
    constructor(canvas, field){
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext('2d');
        this.blockSize = 25;
        this.canvas.width = this.blockSize * 10;
        this.canvas.height = this.blockSize * 20;
        this.canvas.style.backgroundColor = "gray";
    }

    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawField(field){

        for (let y = 0; y < field.rows; y++) {
            for (let x = 0; x < field.cols; x++) {
                if (field.grid[y][x] !== 0) {
                    this.context.fillStyle = 'gray'; // ここではすべてのテトロミノを灰色で描画しています
                    this.context.fillRect(x * this.blockSize, y * this.blockSize, this.blockSize, this.blockSize);
                    this.context.strokeRect(x * this.blockSize, y * this.blockSize, this.blockSize, this.blockSize); // ブロックの枠線を描画
                }
            }
        }
    }

    drawTetromino(tetromino){
        this.context.fillStyle = tetromino.color; // テトロミノの色を設定
        for (let y = 0; y < tetromino.tetro.length; y++) {
            for (let x = 0; x < tetromino.tetro[y].length; x++) {
                if (tetromino.tetro[y][x]) { // テトロミノの形状配列で1に相当する部分を描画
                    this.context.fillRect((tetromino.x + x) * this.blockSize, (tetromino.y + y) * this.blockSize, this.blockSize, this.blockSize);
                    this.context.strokeRect((tetromino.x + x) * this.blockSize, (tetromino.y + y) * this.blockSize, this.blockSize, this.blockSize); // ブロックの枠線を描画
                }
            }
        
        }
    }
    
}




function gameStart() {
    console.log("gameStart");
    const game = new Game();
    game.start();
}

gameStart();


// 1. Game
// 役割:ゲームの状態、メインループ
// 属性:ゲームオーバー判定、現在のテトロ
// メソッド:ゲームの開始、終了、一時停止、再開
// 2. Tetromino
// 役割:テトロの状態
// 属性:色,形状の二次元配列
// メソッド:回転、移動、描画
// 3. Field
// 役割:フィールドの状態
// 属性:盤面のサイズ、現在の盤面上のブロックの配置
// メソッド:tetroを固定、tetroを動かせるか、行を消去
// 4. Render
// 役割:描画
// 属性:canvas
// メソッド:drawTetro,drawField,clear