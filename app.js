//variables
var navbar = document.getElementById("stickyBar");
var sticky = navbar.offsetTop;
var iconMenu = document.querySelector(".jsc-icon-menu");
var ratingNum = document.querySelector(".rating-num").textContent.replace(" Review )", ' ').replace('(', ' ');
var starColor = document.querySelector(".star-color");
let mobilList = document.querySelectorAll(".plus-icon");
var mobilBtnClose = document.getElementById("mobilBtnClose");
const mobilBar = document.getElementById("mobilBar");
let acordionCheck = false;
let acordionCheckShop = false;
let acordionShop = false;
let currentElement = mobilList[0].children[1];
let currentElementShop = mobilList[0].children[1];

//clock
let timeEnd = new Date("Dec 31 2023 00:00:00");
clock();
setInterval(() => { clock() }, 1000);

//star rating
starColor.style.width = ratingNum * 19.5 + '%';


// slider
let nextBtn = document.getElementById("right");
let prevBtn = document.getElementById("left");
let sliderItem = document.querySelectorAll(".jsc-slider-item");
let counter = 0;

//Slider listener
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
//nav bar fixed listener
window.onscroll = function () { navbarSticky() };
//mobil bar open listener
iconMenu.addEventListener('click', mobilBarOpen);
//mobil bar close listener
mobilBtnClose.addEventListener('click', mobilBarClose);
//acordion control listener
mobilList.forEach((x) => {
    x.addEventListener('click', (e) => {
        let liveElement = e.target.parentElement.children[1];
        if (liveElement.parentElement.classList[0] == "jsc-mobil-list-li") {
            currentElementShop.style.display = "none";
            iconMinus(currentElementShop);
            if (acordionCheck == false) {
                currentElement = acordionBlock(liveElement, currentElement);
                acordionCheck = true;
            }
            else {
                currentElement = acordionNone(liveElement, currentElement);
                acordionCheck = false;
            }
        }
        else if (acordionShop == false) {
            liveElement = e.target.parentElement.children[1]
            if (acordionCheckShop == false) {
                currentElementShop = acordionBlock(liveElement, currentElementShop);
                acordionCheckShop = true;
            }
            else {
                currentElementShop = acordionNone(liveElement, currentElementShop);
                acordionCheckShop = false;
            }
            acordionShop = true;
            console.log("salam");
        }
        else { acordionShop = false; }
    });
});





//Function
function clock() {
    time = (timeEnd - new Date()) / 1000;
    day = Math.floor(time / 3600 / 24);
    hour = Math.floor(time / 3600) % 24;
    min = Math.floor(time / 60) % 60
    sec = Math.floor(time) % 60;
    document.getElementById("dayId").textContent = day < 10 ? "0" + day : day;
    document.getElementById("hourId").textContent = hour < 10 ? "0" + hour : hour;
    document.getElementById("minId").textContent = min < 10 ? "0" + min : min;
    document.getElementById("secId").textContent = sec < 10 ? "0" + sec : sec;
}

function nextSlide() {
    sliderItem[counter].style.animation = "next1 1s ease-in forwards";
    if (counter >= sliderItem.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    sliderItem[counter].style.animation = "next2 1s ease-in forwards";
}
function prevSlide() {
    sliderItem[counter].style.animation = "next2 1s ease-in forwards";
    if (counter == 0) {
        counter = sliderItem.length - 1;
    }
    else {
        counter--;
    }
    sliderItem[counter].style.animation = "next1 1s ease-in forwards";
}


function iconPlus(elemPlus) {
    elemPlus.parentElement.children[0].classList += " active-minus";

}
function iconMinus(elemMinus) {
    elemMinus.parentElement.children[0].classList.remove("active-minus");
}

function acordionBlock(liveElement, current) {
    iconMinus(current);
    iconPlus(liveElement);
    current.style.display = "none";
    liveElement.style.display = "block";
    return liveElement;
}
function acordionNone(liveElement, current) {
    iconPlus(liveElement);
    iconMinus(current);
    liveElement.style.display = "block";
    current.style.display = "none";
    return liveElement;
}

function navbarSticky() {
    if (window.scrollY >= sticky + 160) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
function mobilBarOpen() {
    mobilBar.style.left = "0px";
    document.querySelector("body").style.overflow = "hidden";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.querySelector(".body-blocked").style.zIndex = "6";
}
function mobilBarClose() {
    mobilBar.style.left = "-400px";
    document.querySelector("body").style.overflow = "auto";
    document.body.style.backgroundColor = "white";
    document.querySelector(".body-blocked").style.zIndex = "-777";
}





