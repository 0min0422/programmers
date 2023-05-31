function solution(numbers) {
    var answer = [];
    
    numbers.forEach((num, index) => {
        let number = 0;
        for(let i=0; i<numbers.length; i++) {
            if(i === index) continue;
            number = num + numbers[i];
            
            if(answer.indexOf(number) === -1) answer.push(number);
        }
    })
    return answer.sort((a,b) => a-b);
}