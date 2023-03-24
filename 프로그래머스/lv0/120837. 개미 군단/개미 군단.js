function solution(hp) {
    var answer = 0;
    a = Math.floor(hp/5);
    b = Math.floor((hp-a*5)/3);
    c = Math.floor(hp-(a*5)-(b*3)/1);
    
    answer = a + b + c
    return answer;
}