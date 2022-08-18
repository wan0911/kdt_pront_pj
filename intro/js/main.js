const block = document.querySelector(".block");
const middleText = document.querySelector(".middle");
const body = document.querySelector("body");
const audio = document.querySelector(".audio");

//블록 떨어지는 애니메이션
setTimeout(function () {
  block.classList.add("on");
}, 3800);
setTimeout(function () {
  console.log("!!");
  body.classList.add("on");
  // body.style.backgroundColor="pink";
  // block1.classList.add("on");
  // block2.classList.add("on");
  // block3.classList.add("on");
  middleText.style.color = "black";
}, 5200);


//다음 html 넘어가는 부분
setTimeout(function() {
  location.href = "../index.html";
  // location.href = "2.html";
  // location.replace('2.html');
}, 6900);


