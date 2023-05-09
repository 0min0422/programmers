/*function solution(food) {
    var answer = '';
    let ans = [0];
    food.sort((a,b)=> b-a)
    
    food.forEach(x => {
        
        if(x>=2) {
            let foodEat = Math.floor(x/2);
            ans.push(food.indexOf(x));
            ans.unshift(food.indexOf(x));
        }
    })
    return food;
}*/

function solution(food) {
    let leftSide = [];
    
    food.forEach((item, index) => {
        if(item >= 2){
            const quotient = Math.floor(item / 2);
            
            leftSide.push(String(index).repeat(quotient)); 
        }
    })
    
    const ans = [leftSide.join(""), 0, leftSide.reverse().join("")];
    
    return ans.join("");
}