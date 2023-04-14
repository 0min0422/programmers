// function solution(array, n) {
//     var answer = 0;
//     var ans = array.map(x => n-x).sort((a, b) => a-b)
//     ans1 = -1*(ans[0]-n);
//     return ans1;
// }

const solution = (array, n) => 
+array.filter(a => Math.abs(a-n) === Math.min(...array.map(a => Math.abs(a-n)))).sort((a,b) => a-b)[0]