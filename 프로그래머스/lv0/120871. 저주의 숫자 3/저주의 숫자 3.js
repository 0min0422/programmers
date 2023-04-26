function solution(n) {
    var answer = 0;
    var arr = [];
    
    for(let i=1; i<=1000; i++) {
        if(i%3 !== 0 && i.toString().includes('3') === false) {  
            arr.push(i); 
        
        }
    }
    
    answer = arr[n-1]
    
    
    
    return answer;
}