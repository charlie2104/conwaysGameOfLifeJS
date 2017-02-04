var createBoard = (width, height) => {
    board = [];
    row = [];
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            row.push(" - ");
        }
        board.push(row);
        row =[];
    }
    return (board);
}

var displayBoard = (board) =>{
    for (var i = 0; i < board.length; i++) {
        console.log(board[i].join(""));
    }
}
 var width = 10
 var height = 10

var cell = {
    x: 0,
    y: 0,
    dead: false,    
}

gameBoard = createBoard(width,height);
displayBoard(gameBoard);
