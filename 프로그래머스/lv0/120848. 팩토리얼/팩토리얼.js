function solution(n) {
    var answer = 0;
    var ans = 1;
    for(let i=1; i<=n; i++) {
        ans *= i;
        
        if(ans === n) {
            return i;
        }else if(ans>n) {
            return i-1;
        }
        
        
    }
    //return answer;
}