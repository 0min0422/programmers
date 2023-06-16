function solution(array, commands) {
    var answer = [];
    
    commands.forEach(com => {
        let cor = array.slice(com[0]-1, com[1]).sort((a,b) => a-b)[com[2]-1];
        
        answer.push(cor)
    })
    return answer;
}