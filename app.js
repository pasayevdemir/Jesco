window.onscroll = function () { myFunction() };

var navbar = document.getElementById("stickyBar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.scrollY >= sticky + 100) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}