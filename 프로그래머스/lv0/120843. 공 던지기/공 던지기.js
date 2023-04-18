function solution(numbers, k) {
    let ansIndex = 0-2;
    
    for(let i = 0; i < k; i++){
        ansIndex += 2;    
        
        if(ansIndex > numbers.length){
            ansIndex -= numbers.length;
        }
    }
    
    return numbers[ansIndex];
}