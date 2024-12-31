const boxClick = document.querySelector("#click");
const boxOver = document.querySelector("#over");
const boxOut = document.querySelector("#out");
const boxOverOut = document.querySelector("#over-out");

// console.log(boxClick);
// console.log(boxOver);
// console.log(boxOut);
// console.log(boxOverOut);

function changeBgGreen(){
  // boxClick.setAttribute("style", "background-color:green");
  // console.log(this);
  //this는 현재 이벤트가 걸린 자기 자신을 의미한다
  this.setAttribute("style", "background-color:green");
}

boxClick.addEventListener("click", changeBgGreen); // (요소 이벤트명, 사용할 함수명(콜백함수))

boxOver.addEventListener("mouseover", function(){
  boxOver.setAttribute("style", "background-color:skyblue");
});

function changeBgPink(){
  this.setAttribute("style", "background-color:pink");
  console.log(this);
}

boxOut.addEventListener("mouseout", changeBgPink);

boxOverOut.addEventListener("mouseover", changeBgGreen);
boxOverOut.addEventListener("mouseout", changeBgPink);
