function solution(babbling) {
    /* 오답
    var answer = [];
    let ans = ["aya", "ye", "woo", "ma", ""]
    var count = 0;
    
    babbling.map(x=> {
        for(let i=0; i<ans.length; i++) {
            for(let j=0; j<ans.length; j++) {
                if(x.indexOf(ans[i]) !== -1 && babbling[i].replace(ans[i], '') === ans[j])
                count++
            }
        }
    })
    
    return count;*/
    
    var answer = 0;
    const correctList = ["aya", "ye", "woo", "ma"]

    const returnData = babbling.filter((val) => {
        let result = val
        correctList.forEach((coval) => {
            if (val.includes(coval)) result = result.replace(coval, '')
        })
        return !result
    })
    
    return returnData.length;
}