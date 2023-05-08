function solution(k, score) {
    var answer = [];
    let ans = [];
    score.forEach(x=> {
        if(answer.length === 0) {
            answer.push(x);
            ans.push(x)
        }else {
            if(answer.length <k) {
                answer.push(x)
                ans.push(Math.min(...answer));
            }else {
                answer.push(x);
                answer = answer.sort((a,b) => b-a);
                ans.push(answer[k-1]);
            }
        }
    })
    return ans;
}