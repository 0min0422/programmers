function solution(left, right) {
    var answer = 0;
    
    const nums = [];
    
    for(let i=left; i<=right; i++) {
        let div = [];
        for(let j=1; j<=i; j++) {
            if(i%j === 0) {
                div.push(j);
            }
        }
        
        div.length%2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}