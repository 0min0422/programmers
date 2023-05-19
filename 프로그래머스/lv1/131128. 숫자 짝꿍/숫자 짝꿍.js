function solution(X, Y) {
    var answer = '';
    X = X.split("");
    Y = Y.split("");
    
    
    for(let i = 0 ; i < 10 ; i ++) {
        const cX = X.filter(a => Number(a) === i).length;
        const cY = Y.filter(a => Number(a) === i).length;
        answer += String(i).repeat(Math.min(cX, cY));
    }
    
    if(answer==='') answer = "-1";
    if(Number(answer) === 0) return "0"
    
    
    return answer.split("").sort((a,b) => Number(b) - Number(a)).join("");
}