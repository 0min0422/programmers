function solution(survey, choices) {
    var answer = '';
    
    let score = {}
    let choScore = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3}
    
    
    let cho = 0;
    survey.forEach(x=> {
        let sur = [];
        sur = x.split("");
        
        
        if(choices[cho] <4) {
            if(score[sur[0]]>=-1 ) {
                score[sur[0]] += choScore[choices[cho]];
                
            }else {
                score[sur[0]] = choScore[choices[cho]];
                score[sur[1]] = 0;
            }
        }else {
            if(score[sur[0]]>=-1 ) {
                score[sur[1]] += choScore[choices[cho]];
                
                
            }else {
                score[sur[1]] = choScore[choices[cho]];
                score[sur[0]] = 0;
            }
        }
        cho++;
    })
    
    //1번지표
    let seq = {1:["R", "T"], 2:["C", "F"], 3:["J", "M"], 4:["A", "N"]};
    
    for(let i=1; i<=Object.keys(seq).length; i++) {
        let ans = seq[i];
        if(score[ans[0]] >= score[ans[1]] || typeof score[ans[0]] === "undefined") {
            answer += ans[0];
        }else {
            answer += ans[1];
        }
        
    }
    
    return answer;
    //return score;
}