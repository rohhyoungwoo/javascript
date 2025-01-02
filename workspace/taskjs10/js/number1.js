// 1. 배열을 선언하고 1부터 10까지의 정수를 배열에 저장하고 출력하세요

const numbersArray = [];
let count = 1;
for(let i = 0; i < 10; i++){
  numbersArray[i] = count++;
}
console.log(numbersArray);