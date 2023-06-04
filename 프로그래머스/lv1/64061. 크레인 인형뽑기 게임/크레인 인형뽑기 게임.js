function solution(board, moves) {
    var answer = 0;
    
    let backet = [];
    
    moves.forEach(x => {
        for(let i=0; i<board.length; i++) {
            //backet.push(board[i][x-1])
            
            if(board[i][x] != 0) {
                backet.push(board[i][x-1])
            }
        }
    })
    return backet;
}