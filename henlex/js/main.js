// Плавная прокрутка до якоря
$('a[href*="#"]').on('click', function() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  return false;
});

// Анимация при скролле страницы
let scroll =
  window.requestAnimationFrame ||
  // Откат IE
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
let elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    }
    // } else {
    //   element.classList.remove("is-visible");
    // }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  let rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
};

let button = document.querySelector('button');
setTimeout(function() {
  button.classList.remove("show-on-scroll", "show-on-scroll__5");
}, 1000);