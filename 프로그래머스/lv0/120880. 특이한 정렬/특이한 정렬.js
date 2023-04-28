function solution(numlist, n) {
    var answer = [];
    let idx = numlist.indexOf(n)
    
    // for(let i=0; i<=numlist.length; i++) {
    //     if()
    // }
    
    answer = numlist.map(x=> x-n)
    return answer;
}