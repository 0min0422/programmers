function solution(chicken) {
//     var answer = 0;
//     //서비스로시킨 치킨 수
//     var ans = Math.floor(chicken/10)
    
//     //남은 쿠폰 수
//     var ans1 = Math.floor(chicken%10)
    
//     // 쿠폰으로 시킨 치킨으로 받은 쿠폰 수 = 쿠폰으로 시킨 치킨 수
//     var ans2 = Math.floor(ans/10)
    
//     // 쿠폰으로 시킨 치킨으로 받은 쿠폰에서 시키고 남은 수
//     var ans3 = ans%10
    
//     var ans4 = Math.floor(ans2/10)
    
//     var ans5 = ans%10
    
//     var ans6 = Math.floor((ans1 + ans3 + ans5)/10)
    
    
//     return ans + ans2 + ans4 + ans6;
    var answer = 0;
    while(chicken >=10) {
        answer += Math.floor(chicken/10);
        chicken = chicken%10 + Math.floor(chicken/10);
    }
    return answer;
}