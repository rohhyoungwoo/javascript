//4. 배열의 모든 요소의 합을 계산하는 함수를 작성하고 호출하세요.

const ar1 = [];
let count = 1;
let result = 0;
function calculateSum(){
  for(let i = 0; i < 100; i++){
    ar1[i] = count++;
    result += ar1[i];
  }
  console.log(result);
}
calculateSum();