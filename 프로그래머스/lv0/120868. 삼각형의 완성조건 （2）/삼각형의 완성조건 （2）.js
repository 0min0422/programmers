function solution(sides) {
    var answer = [];
    var ans = sides[0] > sides[1] ? sides[0] : sides[1]
    var ans1 = sides[0] < sides[1] ? sides[0] : sides[1]
    for(let i =1; i<=1000; i++) {
        if(ans<ans1+i && ans >=i) {
            answer.push(i)
        }
        
    }
    for(let i =1; i<=10000; i++){
        if(i<ans+ans1 && i>ans) {
            answer.push(i)
        }
    }
    return answer.length;
}