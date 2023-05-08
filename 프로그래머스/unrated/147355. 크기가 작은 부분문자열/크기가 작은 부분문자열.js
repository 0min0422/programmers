function solution(t, p) {
    var answer = 0;
    let ans = [];
    let count = 0;
    
    
    for(let i=0; i<=t.length; i++) {
        ans.push(t.slice(i, i+p.length))
    }
    
    ans.forEach(x=> {
        
        if(x.length === p.length && Number(x)<=Number(p) ) {
            count++
        }
    })
    
    
    return count;
}