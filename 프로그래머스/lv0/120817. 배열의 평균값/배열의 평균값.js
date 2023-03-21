function solution(numbers) {
    var answer = 0;
    var ans = 0;
    
    for(let i=0; i<numbers.length; i++) {
        ans += numbers[i]
        answer = ans/numbers.length
    }
    return answer;
}