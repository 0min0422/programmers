function solution(age) {
    var answer = 0;
    const date = new Date()
    const year = date.getFullYear()
    answer = year - age
    return answer;
}