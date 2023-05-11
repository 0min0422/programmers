function solution(s) {
    var answer = [];
    let ans = '';
    let count = 1;
    let cnSecond = 0;
    
    for(let i=0; i<=s.length; i++) {
        if(ans === '') { ans += s[i]; }
        
        if(ans === s[i]) { count++; }
        
        else {
            cnSecond++;
            ans += s[i];
        }
        if(count === cnSecond) {
            answer.push(ans);
            ans = '';
            count = 1;
            cnSecond = 0;
        }
        
        /*
        if(s[i] === s[i-1]){
             count++;
        }else{
            cnSecond++
            ans += s[i]
        }
        
        if(count === cnSecond) {
            answer.push(ans);
            ans = '';
            count = 1;
            cnSecond = 0;
        }*/
        
        
    }
    return answer;
}

//이해가 안돼서 다름 사람거 참고 다시 할 예정
function solution(s) {
    // 1) a:동일할 경우 증가, b:다른 경우 증가
    let answer=a=b=0;

    // 2) 비교 문자
    let word='';

    // 3) true 경우만 비교 문자를 담는다.
    let isTrue = true;
    
    // 4) 문자열 하나씩 꺼내서 비교
    for(let i=0; i<s.length; i++){
    
        // 5) 비교 문자 담기
        if(isTrue) word = s[i];
        
        // 6) 현재 문자가 비교문자와 동일하면 a 증가 후 false
        if(word === s[i]) { a++; isTrue = false; }
        
        // 7) 다르면 b증가
        else b++;
      
        // 8) a 와 b가 동일하면 answer증가, a와b 초기화, 다시 문자를 담기 위해 true
        if(a === b) {
            answer++;
            a=b=0;
            isTrue = true;
        }
    }
    // 9) 증가 값이 없으면 딱 떨어지는 경우로 answer 리턴, 아닌 경우 남는 문자가 있으므로 1증가
    return a === 0 && b === 0 ? answer : answer+1;
}