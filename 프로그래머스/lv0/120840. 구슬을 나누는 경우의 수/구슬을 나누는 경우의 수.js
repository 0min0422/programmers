function solution(balls, share) {
    var answer = 0;
    
 //     function factorial(num) {
 //   if (num < 0)
 //     return -1;
 //   else if (num == 0)
 //     return 1;
 //   else {
 //     return (num * factorial(num - 1));
 //   }
 // }
    
   function factorial(num) {
    let returnFactorial = BigInt(1)
    for(let i = num; i >= 2; i-- ) {
        returnFactorial*=BigInt(i)
    }
    return returnFactorial
}
   
    answer = factorial(balls)/(factorial(balls-share)*factorial(share))
    return answer;
}