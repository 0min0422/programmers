function solution(price, money, count) {
    var answer = 0;
    
     let hap = 0;
    
    for(let i=1; i<=count; i++) {
        let priceBout = price * i;
        hap += priceBout;
        
    }

    
    if(hap>money) {
        answer = hap - money
    }
    return answer;
}