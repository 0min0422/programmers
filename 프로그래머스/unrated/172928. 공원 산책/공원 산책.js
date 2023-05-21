function solution(park, routes) {
    var answer = [];
    
    let dic = { E:[0,1], S:[1,0], W:[0, -1], N : [-1,0]};
    
    let start = [0, 0]; // 시작 위치
    
    //S의 위치
    park.forEach((x, i) => {
        let findS = x.indexOf('S');
        if(x.indexOf('S') > -1) {
            start = [i, findS];
            return;
        }
    })
    
    routes.forEach(x => {
        
        let [def, dis] = x.split(' ');
        let temp = [...start]
        
        let n = false;
        
        for(let i=0; i<dis; i++) {
            temp[0] += dic[def][0];
            temp[1] += dic[def][1];
        
            if((temp[0] < 0) || (temp[0] > park.length - 1) ||
                (temp[1] < 0) || (temp[1] > park[0].length - 1)) {
                n = true;
                break;
            }
            
            if(park[temp[0]][temp[1]] === 'X') {
                n = true;
                break;
            }
        }
        
        if(n === false) {
            start = temp;
        }
        
    })
    
    
    return start;
}