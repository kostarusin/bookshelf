var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-header").style.top = "0";
  } else {
    document.getElementById("main-header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
