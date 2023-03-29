function solution(numbers) {
    const answer = []
    // 모든 경우의 수를 구함
    for(let i = 0 ; i < numbers.length; i ++) {
        for(let j = 0 ; j < numbers.length; j++) {
            if(i !== j) {
                answer.push(numbers[i] * numbers[j])    
            }
        }
    }
    
    
    return Math.max(...answer)
}