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