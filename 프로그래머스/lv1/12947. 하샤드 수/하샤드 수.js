// function solution(x) {
//     var answer = true;
    
//     let div = x.toString().split("");
//     let sum = div.reduce((acc, num) => {acc + num},)
    
//     return sum;
// }

function solution(x) {
    var sum = 0;
    var arr = String(x).split('');

    for(var i=0; i<arr.length; i++) {
        sum += Number(arr[i]);
    }

  return (x % sum == 0) ? true : false;
}