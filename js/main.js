gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
    ease: "none",
});

const slides = document.querySelectorAll(".slide");
let scrollYpos;
window.addEventListener("scroll", function() {
    scrollYpos = window.scrollY;
    if(scrollYpos > 350) {
        slides.forEach(element => {
            element.classList.add("on");
        });
    }
    else {
        slides.forEach(element => {
            element.classList.remove("on");
        });
    }
});

let li1 = document.querySelector(".li1").offsetWidth;
let li2 = document.querySelector(".li2").offsetWidth;
let li3 = document.querySelector(".li3").offsetWidth;
let li = document.querySelector(".li1").offsetHeight;

// document.querySelector(".word4").style.width = `${li1 + 20}px`;
document.querySelector(".word4").style.height = `${li}px`;
document.querySelector(".li1").style.transform = `translate(0px, ${li * -2}px)`;
document.querySelector(".li2").style.transform = `translate(0px, ${li * -2}px)`;
document.querySelector(".li3").style.transform = `translate(0px, ${li * -2}px)`;


const scroll = gsap.timeline({
    scrollTrigger: {
        trigger: "section",
        start: "top top",
        end: "+=15000",
        scrub: true,
        pin: true,
    }
});



scroll.from(".scroll_1", { backgroundColor: "#3D61AD", })
.to("header>a", {color: "rgb(144, 66, 66)"})
.to(".middle", { scale: 0, duration: 4, }, "<")
.from(".slide_L", { scrollTrigger: { start: "400", }, opacity: 0, duration: 1, } , "<")
.from(".slide_R", { scrollTrigger: { start: "400", }, opacity: 0, duration: 1, }, "<")
.to(".scroll_2", { opacity: 1, })
.to("header>a", {color: "rgb(229, 107, 36)"})
.from(".word1", { y: -30, opacity: 0, })
.from(".word2", { y: -30, opacity: 0, })
.from(".word3", { y: -30, opacity: 0, })
.to(".word4", { width: `${li1 + 20}`, }, "<")
.from(".word4", { y: -60, opacity: 0, })
.from(".word5", { y: -60, opacity: 0, })
.from(".word6", { y: -60, opacity: 0, })
.from(".word7", { y: -90, opacity: 0, })
.from(".word8", { y: -90, opacity: 0, })
.from(".word9", { y: -90, opacity: 0, })
.from(".word10", { y: -90, opacity: 0, })
.to(".line", { width: "100%", })
.to("li", { y: `${li * -1}`, })
.to(".word4", { width: `${li2 + 20}`, }, "<")
.to("li", { y: 0, })
.to(".word4", { width: `${li3 + 20}`, }, "<")
.to(".scroll_3", { delay: 0.5, opacity: 1, })
.to("header>a", {color: "rgb(45, 96, 34)"})
.to(".container", { bottom: 0, duration: 4, })
.to(".w1", { opacity: 1, ease: Circ.easeIn, }, "<")
.to(".w2", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w3", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w4", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w5", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w6", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w7", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".w8", { opacity: 1, delay: 0.2, ease: Circ.easeIn, }, "<")
.to(".scroll_4", { opacity: 1, duration: 0.7, })
.to("header>a", {color: "#fff"})
.from(".main_title", { opacity: 0, top: 0, })
.from(".article_1", { opacity: 0, duration: 0.8, })
.from(".article_2", { opacity: 0, duration: 0.8, })
.from(".article_3", { opacity: 0, duration: 0.8, });


// scroll4 click
const scroll4 = document.querySelector(".scroll_4");

scroll4.addEventListener("click", (e) => {
    if(window.scrollY> 13000) {
        const article = e.target.closest("article");

        if(article.className === "article_1") {
            window.open('korea.html');
        } else if (article.className === "article_2") {
            window.open('italy.html');
        } else if (article.className === "article_3") {
            window.open('spain.html');
        } 
    }
})

// scroll4 css
const blackOut = document.querySelector(".black");
const passCard = document.querySelectorAll(".article_wrapper>article");

function hover(target) {
    target.addEventListener("mouseover",() => {
        target.style.transform = "scale(1.1)";
        blackOut.style.backgroundColor = "rgba(0,0,0,0.5)";
    })
    target.addEventListener("mouseout", () => {
        target.style.transform = "scale(1)"
        blackOut.style.backgroundColor = "rgba(0,0,0,0)";
    })
}

for(let i=0; i<passCard.length; i++) {
    if(passCard[i].className === "article_1") {
        hover(passCard[i]);
    } else if(passCard[i].className === "article_2") {
        hover(passCard[i]);
        
    } else if(passCard[i].className === "article_3") {
        hover(passCard[i]);
    }
}   

