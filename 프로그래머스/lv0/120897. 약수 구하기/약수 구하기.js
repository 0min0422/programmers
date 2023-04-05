function solution(n) {
    var answer = [];
    for(let i=0; i<=10000; i++) {
        if(n%i === 0) {
            answer.push(i);
        }
    }
    return answer;
}