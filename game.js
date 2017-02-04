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

gameBoard = createBoard(width,height);
displayBoard(gameBoard);
