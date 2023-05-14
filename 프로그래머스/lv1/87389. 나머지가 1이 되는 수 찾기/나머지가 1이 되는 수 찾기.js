function solution(n) {
    var answer = 0;
    let ans = [];
    
    if(n%2 === 1) { answer = 2; } else if(n%3 === 1) {answer = 3; } else {
        for(let i =1; i<n; i++) {
            if(n%i === 1) ans.push(i);
        }
        
        answer = ans[0]
    }
    
    
    return answer;
}