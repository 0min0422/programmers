function solution(today, terms, privacies) {
    var answer = [];
    
    // 현재 날짜 [년, 월, 일], 숫자로 변경
    let todayArr = today.split(".").map(v=> +v)
    
    //약간의 유효기간 객체로 저장 ex) "A" : "6"
    let termObj = {};
    
    terms.forEach(x=> {
        let [kind, period] = x.split(" ");
        termObj[kind] = period;
    })
    
    privacies.forEach((x,i) => {
        //개인정보 수집일자, 약관 정보 분리 저장
        let [date, kind] = x.split(" ");
        //개인정보 수집일자 [년, 월, 일]로 저장
        let [y, m, d] = date.split(".").map(v=> +v);
        // 개인정보 수집일자 달에 유효기간 달더하기
        m += +termObj[kind];
        //일은 유효기간 하루 전날이여서 1를 빼줌
        d--;
        
        //answer.push(m)
        
        //개인정보수집일자에 유효기간 더해서 저장
        if(m>12) {
            if(m%12 === 0) {
                y += parseInt(m/12) -1;
                m = 12;
            }else {
                y += parseInt(m/12);
                m = m%12;
            }
        }
        
        if(d===0) {
            m--;
            d=28;
            if(m === 0){
                y--;
                m=12;
            }
        }
        
        //현재 날짜가 유효기간보다 
        if(y<todayArr[0]) {
            answer.push(i+1);
            return;
        }else if(y === todayArr[0]) {
            if(m < todayArr[1]) {
                answer.push(i+1);
                return;
            }else if(m === todayArr[1]) {
                if(d<todayArr[2]) {
                    answer.push(i+1);
                    return;
                }
            }
        }
        
        
    })
    
    return answer
    //return termObj
}