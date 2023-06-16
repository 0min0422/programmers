
//참고
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let num1 = answers.filter((num, i) => num ===  a1[i%a1.length]).length;
    let num2 = answers.filter((num, i) => num ===  a2[i%a2.length]).length;
    let num3 = answers.filter((num, i) => num ===  a3[i%a3.length]).length;
    
    let cor = [num1,num2,num3].sort((a,b) => b-a);
    
    if (num1 === cor[0]) {answer.push(1)};
    if (num2 === cor[0]) {answer.push(2)};
    if (num3 === cor[0]) {answer.push(3)};
    
    return answer;
}