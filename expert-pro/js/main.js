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