/*function solution(dots) {
    var answer = [];
    
    // 기울기는 y변화량 / x변화량
    // 경우의 수는 3가지임
    
    //12 - 34, 13 - 24, 14 - 23
    for(let i=0; i<dots.length; i++) {
        for(let j=i+1; j<dots.length; j++) {
            
            const xDiff = (dots[i][1] - dots[j][1])/ (dots[i][0]-dots[j][0])
            
            if(answer.indexOf(xDiff) != -1) return 1;
            answer.push(xDiff);
            
        }
    }
    
    return 0;
}*/
    
    function solution(dots) {
    if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
        return 1;
    if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
        return 1;
    if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
        return 1;
    return 0;
}

function calculateSlope(arr1, arr2) {
    return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}
