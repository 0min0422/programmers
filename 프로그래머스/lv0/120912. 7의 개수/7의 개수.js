function solution(array) {
    var answer = 0;
    var ans = array.join("").split("").filter(x => x === '7').length
    return ans;
}