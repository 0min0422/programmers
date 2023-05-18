function solution(babbling) {
//     var answer = 0;
//     let ans = ["aya", "ye", "woo", "ma"];
//     let newAns = ""
    
//     babbling.forEach( x=> {
//         for(let i=0; i<= ans.length; i++) {
//             a= ans[i]
//             newAns = "aya".replace(/a/gi, "")
//         }
        
//         if(newAns === "") answer++;
        
//     })
//     //return newAns;
//    // return answer;
    
//     return "yeye".replace(/ye/gi, "")
    
    const can = ['aya','ye','woo','ma'];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < can.length; j++) {
            if(babble.includes(can[j].repeat(2))){
                break;
            }
                
            babble = babble.split(can[j]).join(" ");
        }
        
        if(babble.split(" ").join("").length === 0) {
            count += 1;
        }
    //return babbling[0].split(can[0]).join(" ");
    }
    
    return count;
}