window.addEventListener('scroll', function() {
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  var scrollButton = document.getElementById('scroll-top');
  
  if (scrollPos > 300) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
});

document.getElementById('scroll-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
