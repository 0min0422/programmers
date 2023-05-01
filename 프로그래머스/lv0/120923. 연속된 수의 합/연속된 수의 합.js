function solution(num, total) {
    var answer = [];
    
    const mid = Math.ceil(total/num);
    if(total%num === 0) {
        answer.push(mid);
        let i = 1;
        while(num >answer.length) {
            answer = [mid-i,...answer,mid+i];
            i++;
        }
    }
    
    if(total%num !==0) {
        let mid1 = parseInt(total/num);
        let i =1;
        answer.push(mid1, mid1+1)
        while(num>answer.length) {
            answer = [mid1-i,...answer,mid1+i+1];
            i++;
        }
    }
    
    return answer;
}