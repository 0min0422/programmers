function solution(players, callings) {
    const answer = {};
    
    for(let i=0; i<players.length; i++) {
        answer[players[i]] = i;
    }
    
    for(let i=0; i<callings.length; i++) {
        const idx = answer[callings[i]]; //
        const temp = players[idx-1];
      
        players[idx-1] = callings[i];
        players[idx] = temp;
        
        answer[callings[i]] = idx -1;
        answer[temp] = idx;
    }
    return players;
}