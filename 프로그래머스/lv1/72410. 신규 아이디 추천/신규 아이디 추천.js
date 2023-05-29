function solution(new_id) {
    var answer = '';
    
    //1단계 : 모든 대문자를 대응되는 소문자로 치환
    let id = new_id.toLowerCase();
    
    //2단계 : 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    id = id.replace(/[^a-z0-9-_.]/gi,"");
    
    //3단계 :  마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    id = id.replace(/[.]{2,}/g,".");
    
    //4단계 : 마침표(.)가 처음이나 끝에 위치한다면 제거
    id = id.replace(/^[.]|[.]$/gi,'');
    
    //5단계 :  빈 문자열이라면, new_id에 "a"를 대입
    if(id === "") id = "a"
    
    //6단계 : new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을       모두 제거합니다. 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문     자를 제거
    
    if(id.length > 15){
        id = id.substring(0, 15);
        id = id.replace(/[.]$/gi,'');
    }
    
    while(id.length<3) {
        id += id[id.length-1];
    }
    
    return id;
}