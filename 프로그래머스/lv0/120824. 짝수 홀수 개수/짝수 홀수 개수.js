function solution(num_list) {
    var answer = [];
    var a= 0;
    var b= 0;
    for(i=0; i<num_list.length; i++) {
        
        if(num_list[i]%2 === 0) {
            a += 1
            
        }else{
            b += 1
        }
    }
    answer[0] = a
    answer[1] = b
    return answer;
}