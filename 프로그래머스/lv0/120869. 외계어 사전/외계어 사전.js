function solution(spell, dic) {
    var answer = [];
    dic.forEach(x => {
        let count = 0;
        spell.forEach(y => {
            if(x.includes(y) === true) {
                count += 1;
            }
        })
        if(count === spell.length) {
            answer.push(x);
        }
    })
    return answer.length === 0 ? 2 : 1;
}