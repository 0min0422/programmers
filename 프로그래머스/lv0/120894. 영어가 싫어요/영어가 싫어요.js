// function solution(numbers) {
//     var answer = 0;
//     var num = {
//         "zero" : 0, "one" : 1, "two" : 2, "three" : 3, "four" : 4, "five" : 5, "six" : 6, "seven" : 7, "eight" : 8, "nine" : 9
//     }
//     const ans = numbers.replace(/)
//     return answer;
// }

function solution(numbers) {
    const str = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    
    // for (let i = 0; i < numbers.length; i ++ ) {
    //     numbers = numbers.split(strN[i]).join(i);
    // }
    
    str.forEach((number, index) => {
        numbers = numbers.split(number).join(index)
    })
    
    return Number(numbers)
    
}