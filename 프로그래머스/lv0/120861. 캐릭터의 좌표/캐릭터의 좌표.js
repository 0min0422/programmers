function solution(keyinput, board) {
    var answer = [0,0];
    var k = Math.floor(board[0]/2)
    var s = Math.floor(board[1]/2)
    
    // const range = 
    //       [ Math.abs( Math.floor(board[0] / 2) ), 
    //        Math.abs( Math.floor(board[1] / 2) ) ];
    
    
    keyinput.map(x=> {
        if(x === 'left') {
            answer[0] = answer[0] - 1
        }
        
        if(x === 'right') {
            answer[0] = answer[0] + 1
        }
        
        if(x === 'up') {
            answer[1] = answer[1] + 1
        }
        
        if(x === 'down') {
            answer[1] = answer[1] - 1
        }
        
        
        if(Math.abs(answer[1])>s) {
            answer[1] = answer[1] >0 ? s : s*-1
        }
        
        if(Math.abs(answer[0])>k) {
            answer[0]=answer[0] > 0? k : k*-1
        }
    })
    return answer;
}