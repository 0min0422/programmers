function solution(n, k) {
    var answer = 0;
    ang = n * 12000;
    let ser = Math.floor(n/10);
    ro = (k-ser) * 2000;
    answer = ang + ro;
    return answer;
}