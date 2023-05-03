function solution(s) {
    var answer = [];
    var ans = [];
    
    
    for(let i=0; i<s.length; i++) {
        if(!answer.includes(s[i])) {
            ans.push(-1);
            answer.push(s[i])
            continue;
        }
        
        if(answer.includes(s[i])) {
            ans.push(answer.length - answer.lastIndexOf(s[i]));
            answer.push(s[i]);
        }
    }
    
    return ans;
}