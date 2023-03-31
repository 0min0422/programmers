function solution(array) {
    var answer = [];
    max = Math.max(...array)
    index = array.indexOf(max)
    answer.push(max, index)
    return answer;
}