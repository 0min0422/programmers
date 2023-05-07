function solution(k, m, score) {
    var answer = 0;
    let ans = [];
    score = score.sort((a, b) => b-a);
    score.forEach(x=> {
        if(ans.length<m) {
            ans.push(x);
        }
        
        if(ans.length == m) {
            answer += Math.min(...ans)*m
            ans.splice(0,ans.length)
        }
    })
    return answer;
}