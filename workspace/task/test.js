// function sumAll(){
//   let resultl3 = 0;

//   for(let i = 0; i < arguments.length; i++){
//     resultl3+=arguments[i];
//   }
//   return resultl3;
// }

// let result2 = function sumAll1(...numbers){

//   console.log(sumAll(...numbers));
// }

// result2(10,20,30);

// ## 1. 매개변수로 두 숫자를 전달받아 합을 반환하는 함수를 작성하기
// (디폴트 매개변수 1개 사용 기본값 10)
// ### 일반함수 사용, addNumbers
// function addNumbers(num1,num2=10){
//   console.log(num1, num2);
//   return num1 + num2; 
// }
// console.log(addNumbers(20));

// ## 2. 숫자의 제곱을 계산하는 함수 작성하기
// ### 익명함수 사용, square
// let square = function (num3){
//   console.log(num3 * num3);
// };
// square(10);

// ## 3. 가변매개변수를 사용하여 전달받은 모든 숫자의 합 계산하기
// ### sumAll1 일반함수
function sumAll1(...numbers){
  let result = 0;
  for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    result += numbers[i]; 
  }
  console.log(result);
}
sumAll1(10,20,30,40,50);

// sumAll2 익명함수
let sumAll2 = function (...numbers){
  let result1 = 0;
  for(let i in numbers){
    // console.log(numbers[i]);
    result1 += numbers[i];
  }
  console.log(result1);
}
sumAll2(1,2,3);


// ## 4. 콜백함수를 매개변수로 받아 두 숫자를 전달하고 연산결과(사칙연산 모두) 출력하는 oper 만들기

// ## 5. 사용자 데이터를 배열로 받아 20살 이상인 사용자만 필터링 하는 newUser 함수 만들기

// ### newUser함수는 두개의 매개변수를 받는다
// users : 사용자 이름 배열(ex : [ { name: '짱구', age: 25 }, { name: '철수', age: 18 }, { name: '훈이', age: 30 } ])
// callback : 데이터를 처리할 함수

// ### 6. 비동기 작업 체인

// ### 세 가지 작업을 수행하는 step1, step2, step3가 있습니다. 각 함수는 1초 후에 실행하고 runStep 함수에서 각 단계가 완료되면 다음단계로 넘어가고 마지막에는 모든 함수 호출 완료를 출력한다
