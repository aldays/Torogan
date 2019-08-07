
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementByClass("navbar-fixed-top").style.top = "0";
  } else {
    document.getElementByClass("navbar-fixed-top").style.background = "blue";
  }
  prevScrollpos = currentScrollPos;
}

document.getElementByTagname("footer").innerHTML = "Hello World!";