const menuBtn = document.querySelector('.menu-btn');
const dropdown = document.querySelector('.dropdown');
// const navLink = document.querySelector('.nav-link');
const dropdownMenu = document.querySelector('.dropdown-menu');
let menuOpen = false;
dropdown.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('show');
    // navLink.classList.add('show');
    dropdownMenu.classList.add('show');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('show');
    // navLink.classList.remove('show');
    dropdownMenu.classList.remove('show');
    menuOpen = false;
  }
  // return;
});
// menu.addEventListener('click', () => {
//   if(!menuOpen) {
//     menuBtn.classList.add('show');
//     // navLink.classList.add('show');
//     dropdownMenu.classList.add('show');
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove('show');
//     // navLink.classList.remove('show');
//     dropdownMenu.classList.remove('show');
//     menuOpen = false;
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   window.addEventListener('click', e => {
//     const target = e.target
//     if (!target.closest('.dropdown-menu') && !target.closest('.menu-btn')) {
//       menuBtn.classList.remove('show');
//       dropdownMenu.classList.remove('show');
//     }
//   })
// })
document.addEventListener('click', (e) => {
  const click = e.composedPath().includes(dropdown);
  if ( !click ) {
    menuBtn.classList.remove('show');
		dropdownMenu.classList.remove('show');
    menuOpen = false;
  }
})
document.addEventListener('keydown', function(e) {
	if( e.key ){
    menuBtn.classList.remove('show');
		dropdownMenu.classList.remove('show');
    menuOpen = false;
	}
});
//2
// $(document).mouseup(function (e) {
//   var container = $("YOUR CONTAINER SELECTOR");
//   if (container.has(e.target).length === 0){
//       dropdownMenu.classList.remove('show');
//   }
// });
//3
// const popup = document.querySelector(".pop-up");

// document.onclick = function (e) {
//     if (e.target.className != "pop-up") {
//         popup.style.display = "none";
//     };
// };
//4
// const box = document.querySelector('.box');

