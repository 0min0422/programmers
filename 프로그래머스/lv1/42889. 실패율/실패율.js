function solution(N, stages) {
    var answer = [];
    
    let num = stages.length;
    
    for(let i =1; i<=N; i++) {
        let count = stages.filter( nums => i === nums).length;
        let fail = count/num;
        answer.push([i,fail]);
        num = num-count;
    }
    
    answer.sort((a,b) => b[1] - a[1]);
    
    answer = answer.map( x => x[0])
    return answer;
}