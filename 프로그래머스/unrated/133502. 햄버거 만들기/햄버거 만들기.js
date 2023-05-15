function solution(ing) {
    // 다른 사람거 참고
    var answer = 0;
    
    let ans = [];
    
    ing.forEach(x => {
        
        ans.push(x);
        
        if(ans.length >= 4) {
            let a = ans.slice(-4).join('');
            if(a === '1231') {
                ans.pop();
                ans.pop();
                ans.pop();
                ans.pop();
                answer++
            }
        }
    })
    
    return answer;
}