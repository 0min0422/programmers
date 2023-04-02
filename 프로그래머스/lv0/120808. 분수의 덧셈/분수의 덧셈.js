function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    n1 = numer1*denom2 + numer2*denom1
    n2 = denom1*denom2
    
    let a = (num1, num2) => {
    let gcd = 1;

    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
    }
    
    if(n2%a(n1, n2) === 0 && n1%a(n1, n2) ===0) {
        getnum2 = n2/a(n1, n2);
        getnum1 = n1/a(n1, n2);
        
        answer.push(getnum1, getnum2);
    }else{
        answer.push(getnum1, getnum2);
    }
    
    return answer;
}