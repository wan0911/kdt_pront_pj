const body = document.querySelector("body");
const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
const len = list.length;
const deg = 360 / len;

// drag rotate
let startX, endX;
let temp = 0;

body.addEventListener("mousedown", function (e) {
  startX = e.screenX;
});

body.addEventListener("mouseup", function (e) {
  endX = e.screenX;
  frame.style.transform = `rotate(${(temp = temp - (startX - endX) / 15)}deg)`;
});

for (let i = 0; i < len; i++) {
  list[i].style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

  list[i].addEventListener("click", function () {
    let deg_rotate;
    let quot = parseInt(-temp / 360);

    if (temp > 0) {
      deg_rotate = quot * 360 - deg * (len - i);
      if (-temp - deg_rotate < -180)
        deg_rotate = --quot * 360 - deg * (len - i);
      else if (deg_rotate + temp < -180)
        deg_rotate = ++quot * 360 - deg * (len - i);
    } else if (temp === 0) {
      if (i === 0) deg_rotate = 0;
      else if (i === len - 1) deg_rotate = -deg;
      else deg_rotate = deg * i;
    } else {
      deg_rotate = quot * 360 + deg * i;
      if (-temp - deg_rotate > 180) deg_rotate = ++quot * 360 + deg * i;
      else if (deg_rotate + temp > 180) deg_rotate = --quot * 360 + deg * i;
    }
    frame.style.transform = `rotate(${-deg_rotate}deg)`;
  });
}

//page flip
const cards = document.querySelectorAll(".card");
const figure = document.querySelector("figure");

let cardY = list[0].getBoundingClientRect().top;
let cardX = list[0].getBoundingClientRect().left;
let cardWitdth = document.body.clientWidth / 2;
let header = document.querySelector("header");

let prev, next;

figure.addEventListener("click", (e) => {
  for (let i = 0; i < len; i++) {
    if (e.target.closest("article") === list[i]) {
      if (!cards[i].classList.contains("flip")) {
        cards[i].classList.add("flip");

        cards[i].style.left = `${cardWitdth - cardX}px`;
        cards[i].style.top = `-${cardY}px`;

        if (i === 0) {
          prev = len - 1;
          next = i + 1;
        } else if (i === len - 1) {
          prev = i - 1;
          next = 0;
        } else {
          prev = i - 1;
          next = i + 1;
        }

        list[prev].style.opacity = "0";
        list[next].style.opacity = "0";
        header.style.opacity = "0";
      } else {
        cards[i].classList.remove("flip");

        cards[i].style.left = `0px`;
        cards[i].style.top = `0px`;

        list[prev].style.opacity = "1";
        list[next].style.opacity = "1";
        header.style.opacity = "1";
      }
    }
  }
});

const colorList = [
  "rgb(222, 172, 64)",
  "rgb(61, 120, 81)",
  "rgb(60, 107, 150)",
  "rgb(121, 90, 132)",
  "rgb(190, 103, 90)",
  "rgb(148, 148, 148)",
  "rgb(157, 138, 130)",
  "rgb(198, 145, 167)",
];
const frontPage = document.querySelectorAll(".page_front");
const photoCard = document.querySelectorAll(".photo_card");

for (let i = 0; i < len; i++) {
  frontPage[i].style.backgroundColor = colorList[i];
  photoCard[i].style.backgroundColor = colorList[i];
}

//css 사진
let page = window.location.pathname.split("/").pop();
let leftImg = document.querySelectorAll(".photo_img.left");
let coverImg = document.querySelectorAll(".cover");
let rightImg = document.querySelectorAll(".photo_img.right");

if (page === "korea.html") {
  for (let i = 0; i < coverImg.length; i++) {
    coverImg[i].style.backgroundImage = `url('../img/korea_img/korea_cover_${
      i + 1
    }.jpg')`;
  }

  for (let i = 0; i < rightImg.length; i++) {
    rightImg[i].style.backgroundImage = `url('../img/korea_img/korea_right_${
      i + 1
    }.jpg')`;
  }

  for (let i = 0; i < leftImg.length; i++) {
    leftImg[i].style.backgroundImage = `url('../img/korea_img/korea_left_${
      i + 1
    }.jpg')`;
  }
} else if (page === "spain.html") {
  for (let i = 0; i < coverImg.length; i++) {
    coverImg[i].style.backgroundImage = `url('../img/spain_img/spain_cover_${i + 1}.jpg')`;
  }

  for (let i = 0; i < rightImg.length; i++) {
    rightImg[i].style.backgroundImage = `url('../img/spain_img/spain_right_${i + 1}.jpg')`;
  }

  for (let i = 0; i < leftImg.length; i++) {
    leftImg[i].style.backgroundImage = `url('../img/spain_img/spain_left_${i + 1}.jpg')`;
  }
} else if (page === "italy.html") {
  for (let i = 0; i < coverImg.length; i++) {
    coverImg[i].style.backgroundImage = `url('../img/italy_img/italy_cover_${i + 1}.jpg')`;
  }

  for (let i = 0; i < rightImg.length; i++) {
    rightImg[i].style.backgroundImage = `url('../img/italy_img/italy_right_${i + 1}.jpg')`;
  }

  for (let i = 0; i < leftImg.length; i++) {
    leftImg[i].style.backgroundImage = `url('../img/italy_img/italy_left_${i + 1}.jpg')`;
  }
}

//mouse animation
let mouseCursor = document.querySelector(".cursor");
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY - scrollY + "px";
}

for(let i =0; i<len; i++) {
  if(list[i]) {
    cursorHover(list[i]);
  }
}

function cursorHover(target) {
  target.addEventListener("mouseover", () => {
    mouseCursor.style.transform = "scale(1.3)";
    mouseCursor.style.backgroundColor = "rgb(93, 90, 90)";
  })
  target.addEventListener("mouseout", () => {
    mouseCursor.style.transform = "scale(1)";
    mouseCursor.style.backgroundColor = "";
  })
}