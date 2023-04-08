function solution(my_string) {
    var answer = '';
    answer = [...my_string]
    const set = new Set(answer)
    answer = [...set];
    var ans = answer.join("")
    return ans;
}