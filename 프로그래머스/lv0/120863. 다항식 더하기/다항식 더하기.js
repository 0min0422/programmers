function solution(p) {
    var answer = '';
    
    //상수항 제외하고 x값만 따로 분리 (ex : ["3x","x"])
    var xValue = p.split(" + ").filter(x => { if(x.indexOf("x") !== -1) return x });
    
    //상수항
    let num = 0;
    var con = p.split(" + ").filter(x => { if(x.indexOf("x") === -1) return x });
    
    //상수항 숫자로 변경
    con.forEach(x=> num += parseInt(x, 10))
    //con = parseInt(con, 10);
    
    // 계수값 총합 구하기
    let xNum = 0;
    xValue.forEach(x=> {
        const strNum =  x.replace("x", "") || "1";
        
        xNum += parseInt(strNum, 10);
    })
    let ans = [];
    // x붙히기
    if (xNum) ans.push(`${xNum === 1 ? "" : xNum}x`);
    if(num !== 0 ) ans.push(num);
    
    ans = ans.join(" + ");
    
    return ans;
    
    
}