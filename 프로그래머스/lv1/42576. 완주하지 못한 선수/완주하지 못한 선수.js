function solution(participant, completion) {
    
    
    participant.sort(); // 참가자 
    completion.sort(); // 완주자
    
    for(let i=0; i<participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}