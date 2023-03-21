function solution(numbers) {
    var answer = 0;
    numbers.sort(function (a, b) {
        return a - b
    })
    var max = Math.max(...numbers);
    var sec = numbers.length - 2;
    var min = numbers[sec];
    answer = max*min;
    return answer;
}