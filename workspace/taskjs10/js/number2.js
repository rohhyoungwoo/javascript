//2. 위에서 만든 배열에서 짝수만 출력하는 함수를 작성하고 호출하세요.

const numbersAraay = [];
let count = 1;

// console.log(numbersAraay);

function printEvenNumbers (){
  for(let i = 0; i < 10; i++){
    numbersAraay[i] = count++;
    if(numbersAraay[i] % 2 === 0){
      console.log(numbersAraay[i]);
    }
  }
}
printEvenNumbers();