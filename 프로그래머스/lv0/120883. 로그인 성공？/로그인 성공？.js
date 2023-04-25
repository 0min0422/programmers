function solution(id_pw, db) {
    var answer = '';
    db.forEach(x => {
        if(x.includes(id_pw[0]) === true && x.includes(id_pw[1]) === true )
            answer = 'login'
        if(x.includes(id_pw[0]) === true && x.includes(id_pw[1]) === false )
            answer = 'wrong pw'
        if(x.includes(id_pw[0]) === false && x.includes(id_pw[1]) === false )
            answer = 'fail'
    })
    return answer;
}