// Добавляем класс "scrollbar" к элементам, которым нужна стилизованная прокрутка
var elements = document.getElementsByClassName('scrollbar');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('mouseenter', function() {
    this.classList.add('scrollbar-visible');
  });
  elements[i].addEventListener('mouseleave', function() {
    this.classList.remove('scrollbar-visible');
  });
}
