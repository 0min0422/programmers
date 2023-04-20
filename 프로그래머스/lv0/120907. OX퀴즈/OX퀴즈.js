function solution(quiz) {
    let ans = [];
    
    quiz.forEach((item) => {
        const oneQuiz = item.split(" ");
        
        const X = +oneQuiz[0];
        const Y = Number(oneQuiz[2]);
        
        let calc = 0;
        
        if(oneQuiz[1] === "+"){
            calc = X + Y;
        }
        
        if(oneQuiz[1] === "-"){
            calc = X - Y;
        }
        
        const result = Number(oneQuiz[4]);
        
        if(calc === result){
            ans.push("O");
        }
        
        if(calc !== result){
            ans.push("X");
        }
    })
    
    return ans;
}

// function solution(quiz) {
//     var answer = [];
//     var [calc, result] = quiz[0].split(' = ')
//     return [calc, result]
//     return quiz.map(t => {
//         const [calc, result] = t.split(' = ');
//         const sign = calc.includes('+') ? 1 : -1
//         const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

//         return +a + (+b * sign) === +result ? 'O' : 'X'
//     });
//}