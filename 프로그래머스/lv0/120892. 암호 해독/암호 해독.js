function solution(cipher, code) {
    var answer = '';
    for(let i=0; i<=cipher.length; i+=code) {
        answer += cipher.charAt(i-1)
    }
    return answer;
}