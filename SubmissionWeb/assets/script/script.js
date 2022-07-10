window.onscroll = function() {
    stickyFunction()
};

let navbar = document.querySelector("nav");
let sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}