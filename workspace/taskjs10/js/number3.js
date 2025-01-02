//3번 위에서 만든 배열에서 홀수만 출력하는 함수를 작성하고 호출하세요.

const numbersArray = [];
let count = 1;

function printOddnumbers (){
  for(let i = 0; i < 10; i++){
    numbersArray[i] = count++;
    if(numbersArray[i] % 2 === 1){
      console.log(numbersArray[i]);
    }
  }
}
printOddnumbers();