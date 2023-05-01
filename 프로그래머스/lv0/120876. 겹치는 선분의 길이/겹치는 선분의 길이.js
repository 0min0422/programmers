function solution(lines) {
    
    //오답
    /*
    var answer = 0;
    var ans = [];
    var ans2 = []
    
    lines.forEach(x => {
        for(let i=x[0]; i<=x[1]; i++) {
            ans.push(i)
        }
    })
    
    ans2 = ans.filter((x, index) =>  ans.indexOf(x) !== index )
    ans2 = [...new Set(ans2)].sort((a,b) => a-b)
    
    if(ans2[1] - ans2[0] === 1) {
        answer = ans2.length -1
    }else {
        answer = 0
    }
    
    return ans2;
    */
    
    const start = lines.map(x=>x[0]);
    const end = lines.map(x=>x[1]);
    
    
    let count = 0;
    let intersection = 0;
    for(let i = Math.min(...start); i <= Math.max(...end); i++){
        for(let j = 0; j < lines.length; j++){
            if(i >= start[j] && i < end[j]){
                count++
            }
        }
        if(count >= 2){
            intersection++
        }
        count = 0;
    }
    return intersection;
    
}