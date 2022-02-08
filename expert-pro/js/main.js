// Menu
$("a.target-burger").click(function (){
  if (!$().hasClass("toggled")) {
    $(".header-menu, a.target-burger").toggleClass("toggled");
    $("body").toggleClass("modal-open");
  } else {
    $(".header-menu, a.target-burger").removeClass("toggled");
    $("body").removeClass("modal-open");
  }
});
// $(document).mouseup(function (e){  
//   let div = $(".header-menu, a.target-burger");
//   if (!div.is(e.target) && div.has(e.target).length === 0) {  
//     div.removeClass("toggled");
//     $("body").removeClass("modal-open");
//   }
// });

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

//Fancybox 
Fancybox.bind('[data-fancybox="dialog"]', {
  Carousel: {
    Panzoom: {
      touch: false,
    },
    Navigation: false,
  },
  l10n: {
    CLOSE: "Закрыть",
    NEXT: "Следующий",
    PREV: "Предыдущий",
    ERROR: "Запрошенный контент не загружается. <br/> Пожалуйста, повторите попытку позже.",
    PLAY_START: "Начать слайд-шоу",
    PLAY_STOP: "Приостановить слайд-шоу",
    FULL_SCREEN: "На полный экран",
    THUMBS: "Миниатюры",
    DOWNLOAD: "Скачать",
    SHARE: "Поделиться",
    ZOOM: "Увеличить"
  },
});

// Валидация формы dialog-form
$(document).ready(function () {
  $("#dialog-form").validate({
    rules: {
      dialog_form_phone: {
        required: true,
      },
      dialog_form_email: {
        required: true,
      },
    },
    messages: {
      dialog_form_phone: {
        required: "Введите номер телефона",
      },
      dialog_form_email: {
        required: "Введите адрес почты",
        email: "E-mail в формате name@domain.com",
      },
    },
  });
  // Маска для телефона
  $(".phone").mask("+7 (999) 999-99-99");
});
// Валидация формы callback-form
$(document).ready(function () {
  $("#callback-form").validate({
    rules: {
      callback_form_phone: {
        required: true,
      },
      callback_form_email: {
        required: true,
      },
    },
    messages: {
      callback_form_phone: {
        required: "Введите номер телефона",
      },
      callback_form_email: {
        required: "Введите адрес почты",
        email: "E-mail в формате name@domain.com",
      },
    },
  });
  // Маска для телефона
  $(".phone").mask("+7 (999) 999-99-99");
});
// Валидация формы offer-form
$(document).ready(function () {
  $("#offer-form").validate({
    rules: {
      offer_form_phone: {
        required: true,
      },
      offer_form_email: {
        required: true,
      },
    },
    messages: {
      offer_form_phone: {
        required: "Введите номер телефона",
      },
      offer_form_email: {
        required: "Введите адрес почты",
        email: "E-mail в формате name@domain.com",
      },
    },
  });
  // Маска для телефона
  $(".phone").mask("+7 (999) 999-99-99");
});