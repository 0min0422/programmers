// function solution(c1, c2, goal) {
    
//     //오답 몇개가 틀림
//     /*
//     let ans = []
    
//     goal.forEach(x=> {
//         if(c1.join("").indexOf(x) !== -1) {
//             ans.push(c1.indexOf(x));
//         }else {
//             ans.push(c2.indexOf(x));
//         }
        
        
//     })
    
//     const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]); 
//     let sortedAns = ans.slice().sort((a,b) => a-b);
    
//     return  equals(ans, sortedAns) ? 'Yes' : 'No'
//     */
    
    
    
// }


//모르겠어서 다른 사람거 참고 내가 한거랑 맥락은 비슷한데 으흠 아쉽다. 나중에 다시 할 예정
function solution(cards1, cards2, goal) {
  // cards1과 cards2에 이용할 카드를 사용할 순서
  let idx1 = 0;
  let idx2 = 0;

  // goal의 길이는 cards1의 길이 + cards2의 길이이므로
  // goal을 for문으로 돌려 모든 단어를 확인해본다.
  for (let word of goal) {

    // * 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
    // 현재 들어온 단어가 cards1에 idx1 순서에 있다면
    // idx1을 1 증가시키고 넘어간다.
    if (cards1[idx1] === word) idx1++;

    // cards1 현재 순서에 단어가 같지 않다면
    // cards2 현재 순서의 단어와 같은지 확인한다.
    // 현재 순서에 있다면 idx2를 1 증가시키고 넘어간다.
    else if (cards2[idx2] === word) idx2++;
    
    // cards1과 cards2의 순서에 단어가 다 다르다면
    // 문장을 만들수 없으므로 No를 반환해준다.
    else return "No";
  }

  // for문을 통과했으면 문장을 만든 것이므로 Yes를 반환해준다.
  return "Yes";
}