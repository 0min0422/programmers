function solution(id_list, report, k) {
    
    
//     var answer = [];
//     const dec = {};
//     const decCount = {};
    
//     for(let i=0; i<report.length; i++) {
//         decCount[id_list[i]] = 0;
        
//     }
    
//     report.forEach(x => {
//         let list = [];
//         list = x.split(" ");
//         if(dec[list[0]] in dec) {
//             let num = dec[list[0]];
//             num.push(list[1]);
            
//         }else {
//             dec[list[0]] = [list[1]];
//         }
        
//         decCount[list[1]] +=1
//     })
    
//     // answer = id_list.filter(x=> {
//     //     dec[x].
//     // })
    
    
    //풀이 참고
    
    // answer배열을 id_list길이 만큼 할당하고 0으로 초기화 한다.
    const answer = new Array(id_list.length); 
    answer.fill(0);
    const report_list = {};
    
    // 키는 유저의 아이디 값으로는 신고한 유저를 넣는다.
    id_list.forEach( user => { report_list[user] = [] })
    
    
    report.forEach( user => {
        const [user_id, report_id] = user.split(" ");
        if(!report_list[report_id].includes(user_id)) {
            report_list[report_id].push(user_id);
        }
    })
    
    for(const key in report_list) {
        if(report_list[key].length >=k) {
            report_list[key].forEach(user => {
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    
    
    return answer;
}