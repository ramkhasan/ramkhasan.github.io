// Плавная прокрутка до якоря
$('a[href*="#"]').on('click', function() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
  return false;
});

//Кнопка вверх
(function scrollTop() {
  const scrollButton = document.querySelector('.scrollTop');
  if (!scrollButton) return;
  let trigger = false;
  function resetTrigger() {
      trigger = true;
  }
  window.addEventListener('scroll', resetTrigger);
  let scrollInterval = setInterval(function () {
      if (!trigger) return;
      trigger = false;
      let scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled >= 400) {
          scrollButton.classList.add('active');
      }
      else {
          scrollButton.classList.remove('active');
      }
  }, 250);
  scrollButton.addEventListener('click', function (e) {
      e.preventDefault();
      $("html, body").animate({scrollTop: 0}, 1000);
  });
})();

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