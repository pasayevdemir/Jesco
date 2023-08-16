//variables
var navbar = document.getElementById("stickyBar");
var sticky = navbar.offsetTop;
var iconMenu = document.querySelector(".jsc-icon-menu");
let mobilList = document.querySelectorAll(".plus-icon");
var mobilBtnClose = document.getElementById("mobilBtnClose");
const mobilBar = document.getElementById("mobilBar");
let acordionCheck = false;
let acordionCheckShop = false;
let acordionShop = false;
let currentElement = document.createElement('div');
let currentElementShop = document.createElement('div');


// slider
let nextBtn = document.getElementById("right");
let prevBtn = document.getElementById("left");
let sliderItem = document.querySelectorAll(".jsc-slider-item");
let counter = 0;


nextBtn.addEventListener('click', nextSlide);

function nextSlide() {
    sliderItem[counter].style.animation = "next1 1s ease-in forwards";
    if(counter >=  sliderItem.length-1){
        counter=0; 
    }
    else{
        counter++; 
    }
    sliderItem[counter].style.animation = "next2 1s ease-in forwards";

 
}

// nextSlide = () =>{
//     this.move += 640;
//        if(this.move >= 640 * Array.from(this.images).length){
//         this.move=0;
//        }
//         Array.from(this.images).forEach(x => {
//             x.style.left = -this.move + "px"
//         })
//         console.log( this.move);
//    }




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
            if (acordionCheck == false) {
                currentElement=acordionBlock(liveElement,currentElement);
                acordionCheck = true;
            }
            else {
                currentElement=acordionNone(liveElement,currentElement);
                acordionCheck = false;
            }
        }
        else if (acordionShop == false) {
            liveElement = e.target.parentElement.children[1]
            if (acordionCheckShop == false ) {
                currentElementShop = acordionBlock(liveElement,currentElementShop);
                acordionCheckShop = true;
            }
            else {
                currentElementShop = acordionNone(liveElement, currentElementShop);
                acordionCheckShop = false;
            }
            acordionShop = true;
            console.log("salam");
        }
        else {acordionShop = false; }
    });
});





//Function


function acordionBlock(liveElement,current) {
    current.style.display = "none";
    liveElement.style.display = "block";
    return liveElement;
}
function acordionNone(liveElement,current) {
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
}
function mobilBarClose() {
    mobilBar.style.left = "-400px";
    document.querySelector("body").style.overflow = "auto";
    document.body.style.backgroundColor = "white";
}





