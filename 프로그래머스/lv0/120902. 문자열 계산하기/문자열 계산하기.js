function solution(my_string) {
    let arr = my_string.split(' ')
    let cal = Number(arr[0]);
    for(let i = 1; i< arr.length; i++){
        if(arr[i] === '+')
            cal += arr[i+1] * 1;
        else if(arr[i] === '-')
            cal -= arr[i+1] * 1;
        else
            continue;
    }
    return cal;
}