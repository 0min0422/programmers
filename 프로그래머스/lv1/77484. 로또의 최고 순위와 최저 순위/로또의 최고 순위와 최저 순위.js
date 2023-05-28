function solution(lottos, win_nums) {
    var answer = [];
    
    const win = {6:1,5:2,4:3,3:4,2:5,1:6,0:6}
    const maxValue = [];
    const minValue = [];
    lottos.forEach( num => {
        if(win_nums.includes(num) === true) {
            maxValue.push(num);
            minValue.push(num);
        }
        
        if(num === 0) {
            maxValue.push(num)
        }
    })
    
    answer.push(win[maxValue.length], win[minValue.length])
     
    return answer;
}