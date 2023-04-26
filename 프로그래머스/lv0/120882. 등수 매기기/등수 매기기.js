function solution(score) {
    /*
    let answer = new Array(score.length).fill(1)
    
    var avg = score.map(x=> (x[0]+x[1])/2);
    
    for(let i=0; i<=avg.length; i++) {
        for(let j=0; j<=avg.length; j++)
            if(avg[i]<avg[j]) answer[i]++;
    }
                        
                        
    return answer;
    */
    
    var avg = score.map(x=> (x[0]+x[1])/2);
    
    var sorted = avg.slice().sort((a,b) => b-a);
    
    return avg.map(v => sorted.indexOf(v)+1)
    
    //return avg
    //return sorted;
}

