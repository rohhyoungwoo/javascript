//1. 나이가 19살 이상이면 입장가능, 19살 미만이면 입장 불가 출력
// 나이가 10살이면 당첨을 출력하고 아니면 다음기회에 출력
// 본인이름, 나이는 상수로 설정, 삼항연산자 사용할 것
const users = [
  {name : "짱구", age : 20, event : "결과"},
  {name : "철수", age : 17, event : "결과"},
  {name : "맹구", age : 10, event : "결과"},
  {name : "유리", age : 9, event : "결과"},
];

const result = users.map(users =>{
  return users.age === 10 ? {...users, event : `당첨`} : (users.age >= 19 ? {...users, event : '입장가능'} : 
    (users.age <= 18 ? {...users, event : '입장불가'} : {...users, event : '다음기회에'}));
});
console.log(result);

// const result1 = users.map(users => {
//   return users.age === 10 ? '당첨' : users.age < 19 ? '입장 불가' : '다음기회에';
// });
// console.log(result1);

//출력결과
// 본인이름님은 00살 입장가능여부는 결과 
// 이벤트 당첨여부
//출력

//2. 점수가 60점 이상이면 합격, 60점 미만이면 불합격출력
// 점수가 100점이면 장학생, 아니면 일반학생 출력
// 학생이름, 점수는 상수로 설정

//3. 학생의 이름과 성적을 입력받아서 성적에 따른 학점 출력
// 90점 이상 : A, 80점 이상 : B,  70점이상 : C, 그외 : F

//4. 1부터 100까지의 숫자중 3, 6, 9의 배수 합계 출력