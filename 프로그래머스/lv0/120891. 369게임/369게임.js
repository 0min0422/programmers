function solution(order) {
    var answer = 0;
    order = String(order);
    o = [...order]
    o.map(num => {
        if(num === "3" || num === "6" || num === "9" ){
            answer++;
        }
    })
    return answer;
}