function solution(c) {
    var answer = 0;
    var len = c.length
    if(c[1]/c[0] === c[2]/c[1]) {
        let div = c[1]/c[0]
        answer = c[c.length-1]*div
    }
    if(c[1]-c[0] === c[2] - c[1]) {
        let dis = c[1] - c[0] 
        answer = c[c.length-1] + dis
    }
    return answer;
}