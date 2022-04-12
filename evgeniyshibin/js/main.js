// Инверсия цвета лого и меню на темном фоне
$(window).scroll(function () {
  let windowTop = Math.max($("body").scrollTop(), $("html").scrollTop());
  $(".section").each(function () {
    if (windowTop > $(this).position().top - 50) {
      if ($(this).hasClass("dark")) {
        $("#headerlogo").css("fill", "#ffffff");
        $(".bun").css("background-color", "#ffffff");
        // $(".main-nav").css("filter", "invert(1)");
        // $(".main-nav").css("background-color", "#ffffff");
        // $(".main-nav ul li a.item").css("color", "#1e2128");
      } else {
        $("#headerlogo").css("fill", "#2a2d3a");
        $(".bun").css("background-color", "#2a2d3a");
        // $(".main-nav").css("filter", "invert(0)");
        // $(".main-nav").css("background-color", "#1e2128");
        // $(".main-nav ul li a.item").css("color", "#ffffff");
      }
    };
  });
});

// Плавная прокрутка на верх страницы
$("#header-logo").click(function () {
  $("html, body").animate({scrollTop: 0}, 1500);
});

// Menu
$("a.target-burger").click(function () {
  $("nav.main-nav, a.target-burger").toggleClass("toggled");
});
$(document).mouseup(function (e) {  
  let div = $("nav.main-nav, a.target-burger");
  if (!div.is(e.target) && div.has(e.target).length === 0) {  
    div.removeClass("toggled");
  }
});
// $("a.item").click(function (){
//   $("nav.main-nav, a.target-burger").removeClass("toggled");
// });

// FAQ / Раскрывающиеся вкладки
$(".dropdown__top").click(function () {
  if ($(this).parent(".dropdown").hasClass("open")) {
    $(this).parent(".dropdown").removeClass("open");
    $(this).siblings(".dropdown__btm").slideUp(300);
  } else {
    // $(".dropdown").removeClass("open");
    // $(".dropdown .dropdown__btm").slideUp(300);
    $(this).parent(".dropdown").addClass("open");
    $(this).siblings(".dropdown__btm").slideDown(300);
  }
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

// Swiper 
const swiper1 = new Swiper(".project-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
  breakpoints: {
    769: {
      slidesPerView: 2
    },
    1440: {
      slidesPerView: 3
    },
    2560: {
      slidesPerView: 4
    }
  },
});
const swiper2 = new Swiper(".project-2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
  breakpoints: {
    769: {
      slidesPerView: 2
    },
    1440: {
      slidesPerView: 3
    },
    2560: {
      slidesPerView: 4
    }
  },
});
const swiper3 = new Swiper(".project-3", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },
  breakpoints: {
    769: {
      slidesPerView: 2
    },
    1440: {
      slidesPerView: 3
    },
    2560: {
      slidesPerView: 4
    }
  },
});

// Fancybox
Fancybox.bind('[data-fancybox="gallery-1"]', {
  infinite: true,
  dragToClose: false,
  closeButton: "top",
  Image: {
    fit: "cover",
  },
  Toolbar: false,
  Thumbs: false,
  Carousel: {
    Panzoom: {
      touch: true,
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


// if (window.matchMedia('(min-width: 1369px)').matches) {
//   Fancybox.bind('[data-fancybox="gallery-1"]', {
//     infinite: true,
//     dragToClose: false,
//     closeButton: "top",
//     Image: {
//       fit: "cover",
//     },
//     Toolbar: false,
//     Thumbs: false,
//     Carousel: {
//       Panzoom: {
//         touch: false,
//       },
//       Navigation: false,
//     },
//     l10n: {
//       CLOSE: "Закрыть",
//       NEXT: "Следующий",
//       PREV: "Предыдущий",
//       ERROR: "Запрошенный контент не загружается. <br/> Пожалуйста, повторите попытку позже.",
//       PLAY_START: "Начать слайд-шоу",
//       PLAY_STOP: "Приостановить слайд-шоу",
//       FULL_SCREEN: "На полный экран",
//       THUMBS: "Миниатюры",
//       DOWNLOAD: "Скачать",
//       SHARE: "Поделиться",
//       ZOOM: "Увеличить"
//     },
//   });
// } else {
//   Fancybox.bind('[data-fancybox="gallery-1"]', {
//     infinite: true,
//     dragToClose: false,
//     closeButton: "top",
//     Image: {
//       fit: "cover",
//     },
//     Toolbar: false,
//     Thumbs: false,
//     Carousel: {
//       Panzoom: {
//         touch: true,
//       },
//       Navigation: false,
//     },
//     l10n: {
//       CLOSE: "Закрыть",
//       NEXT: "Следующий",
//       PREV: "Предыдущий",
//       ERROR: "Запрошенный контент не загружается. <br/> Пожалуйста, повторите попытку позже.",
//       PLAY_START: "Начать слайд-шоу",
//       PLAY_STOP: "Приостановить слайд-шоу",
//       FULL_SCREEN: "На полный экран",
//       THUMBS: "Миниатюры",
//       DOWNLOAD: "Скачать",
//       SHARE: "Поделиться",
//       ZOOM: "Увеличить"
//     },
//   });
// };
if (window.matchMedia('(min-width: 1369px)').matches) {
  Fancybox.bind('[data-fancybox="gallery-2"]', {
    infinite: true,
    dragToClose: false,
    closeButton: "top",
    Image: {
      fit: "cover",
    },
    Toolbar: false,
    Thumbs: false,
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
} else {
  Fancybox.bind('[data-fancybox="gallery-2"]', {
    infinite: true,
    dragToClose: false,
    closeButton: "top",
    Image: {
      fit: "cover",
    },
    Toolbar: false,
    Thumbs: false,
    Carousel: {
      Panzoom: {
        touch: true,
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
};
if (window.matchMedia('(min-width: 1369px)').matches) {
  Fancybox.bind('[data-fancybox="gallery-3"]', {
    infinite: true,
    dragToClose: false,
    closeButton: "top",
    Image: {
      fit: "cover",
    },
    Toolbar: false,
    Thumbs: false,
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
} else {
  Fancybox.bind('[data-fancybox="gallery-3"]', {
    infinite: true,
    dragToClose: false,
    closeButton: "top",
    Image: {
      fit: "cover",
    },
    Toolbar: false,
    Thumbs: false,
    Carousel: {
      Panzoom: {
        touch: true,
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
};