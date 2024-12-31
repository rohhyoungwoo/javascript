// //1. 학생의 정보를 저장하는 객체를 만들고 그 학생의 정보를 출력하기
// //학생정보 : 이름, 나이, 성적(1과목)
// //1) 객체에 최소 3명의 데이터를 추가하고 이름과 성적 출력하기
// //2) 객체에서 이름 키에 해당하는 값들만 출력하기
// //3) 객체에 새로운 속성(학년)을 추가하고 객체 전체 출력하기(for문 사용)

// //방법1) 클래스로 객체 생성
// class Students1{
//   constructor(name, age, score){
//     this.name = name;
//     this.age = age;
//     this.score = score;
//   }
// }

// //학생 객체 생성
// const student1 = new Students1("짱구", 5, 85);
// const student2 = new Students2("철수", 5, 90);
// const student3 = new students3("유리", 5, 100);

// const students = [student1, student2, student3];

// //이름과 성적 출력
// students.forEach(student => {
//   console.log(`이름 : ${student.name}, 성적 : ${student.score}`);
// });

// //방법2) 생성자 함수 사용
// function Students2(name, age, score){
//   this.name = name;
//   this.age = age;
//   this.score = score;
// }

// //학생 객체 생성
// const student4 = new students4("짱구", 5, 85);
// const student5 = new students5("철수", 5, 90);
// const student6 = new students6("유리", 5, 100);

// const stu2 = [student4, student5, student6];

// //2) 이름만 출력
// stu2.forEach(student => {
//   console.log(`이름 : ${student.name}`);
// });

// //방법3) 객체 리터럴 바로 사용
// const students3 = {
//   student01 : {name : '짱구', age : 5, score:90},
//   student02 : {name : '철수', age : 5, score:100},
//   student03 : {name : '유리', age : 5, score:88},
// };

// //2) 이름만 출력
// for(let key in students3){
//   console.log(`이름 : ${students3[key].name}`);
// }

// //3) 학년 속성 추가 후 전체 출력
// for(let key in students3){
//   students3[key].grade = '1학년';
// }

// for(let key in students3){
//   console.log(students3[key]);
// }


//2. 배열의 모든 요소를 2개로 증가시켜 새로운 배열을 만들어 출력하기
// const numbers = [1, 2, 3, 4, 5];

// const newnumber = numbers.map(function (element, index, array){
//   return element + 2;
// })
// console.log(newnumber);

//1) 2배 증가시켜 새로운 배열로 출력하기
// const newnumber2 = numbers.map(function (element, index, array){
//   return element * 2;
// })
// console.log(newnumber2);

// // const newnumbers = [];
// // for(let i in numbers){
// //   newnumbers[i] = numbers[i]*2;
// // }
// // console.log(numbers);


// //2) 배열의 길이를 구하고 출력하기
// console.log(numbers.length);

// //3) 배열에서 특정요소를 삭제하기(3) 메소드 사용
// // .pop(), .shift(), .splice()
// console.log(numbers.pop()); // 마지막 5
// console.log(numbers); // 5 삭제

// console.log(numbers.shift()); // 첫번째 요소 값 삭제 1 삭제 
// console.log(numbers); // 1 삭제

// console.log(numbers.splice(1,1)); // 인덱스 번호 1부터 1개 요소 삭제
// console.log(numbers); // 3 삭제

// //4) 배열에서 특정 값(cat)을 검색하고 그 값의 인덱스 출력하기
// const animals = ['dog', 'cat', 'rabbit'];
// console.log(animals.indexOf('cat'));
// console.log(animals.indexOf('rabbit'));

// //5) 배열의 첫번째와 마지막요소를 제거한 뒤 남은 배열 출력하기
// const colors = ['red', 'blue', 'green', 'yellow'];
// console.log(colors.shift());
// console.log(colors.pop());
// console.log(colors);

//3. 혼합문제
//1) 배열의 요소를 객체로 변환하여 새로운 배열을 만들기
//  주어진 배열의 값을 객체의 value 속성으로 저장할것
// const data = [10, 20, 30];
// const newdata = data.map(function (element, index, Array){
//   return element;
// })
// console.log(newdata);

// // 다른 방법?
// const data1 = [];
// console.log(data1);

// data.forEach(function (element){
//   data1.push(element);
// });
// console.log(data1);

//2) 배열을 활용하여 특정값을 기준으로 객체 업데이트하기
//id가 2인 객체의 나이를 6으로 변경, subject를 'web 표준'으로 변경
const users = [
  {id : 1, name : "짱구", age : 5, subjects :  'javascript'},
  {id : 2, name : "철수", age : 5, subjects :  'javascript'},
  {id : 3, name : "맹구", age : 5, subjects :  'javascript'},
];
const result = users.map(users =>{
  return users.id === 2 ? {...users, age: 6 , subjects: 'web 표준'} : users
});
console.log(result);


// const newusers1 = users.map(function (element){
//   if(element.id === 2){
//     element.age = 6;
//     element.subjects = `web 표준`;
//   }
//   return element;
// });
// console.log(newusers1);

// const newusers = users.map(function (element){
//   return element;
// });
// console.log(newusers);
// console.log(users.id(2));

//3) 배열의 요소를 모두 더하여 총합 출력하기
// const numbers2 = [2, 5, 20, 10];

// let result2 = 0;
// for(let i in numbers2){
//   result2 += numbers2[i];
//  }
// console.log(result2);