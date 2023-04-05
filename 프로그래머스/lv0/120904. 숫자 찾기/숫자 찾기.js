function solution(num, k) {
    var answer = 0;
    num = num + "";
    k = k+"";
    if(num.indexOf(k) !== -1) {
        answer = (num.indexOf(k)) + 1;
    }else {
        answer = num.indexOf(k);
    }
    return answer;
    
}