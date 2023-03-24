function solution(my_string) {
    var answer = [];
    var a = [...my_string];
    for(let x of a) {
        if(isNaN(x) === false) {
            answer.push(Number(x))
        }
        
    }
    answer.sort(function (a, b) {
        return a-b
    })
    return answer;
}