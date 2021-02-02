let requestCallMenu = document.querySelector('.request-call-container');
let btnCall = document.querySelectorAll('.tablet-list__btn_theme-call');
let windowWidth = window.screen.availWidth;
let btnClose = document.querySelector('.request-call-menu__btn');
let hiddenWrapper = document.querySelector('.container__blur');
let page = document.querySelector('.body');
let mobileMenu = document.querySelector('.aside-menu');
console.log(window);
export let openRequest = function () {
  btnCall[0].addEventListener('click', function (e){
    e.preventDefault();
    requestCallMenu.classList.add('request-call-container_show');
    mobileMenu.classList.remove('aside-menu_show');
    page.classList.add('body_unscrollable');

    if (windowWidth >= 1440) {
      hiddenWrapper.style.opacity = "0.2";
      mobileMenu.style.opacity = "0.2"
      page.classList.add('body_unscrollable');
    }
  })

  btnCall[1].addEventListener('click',function (e){
    e.preventDefault();
    requestCallMenu.classList.add('request-call-container_show');
    hiddenWrapper.style.opacity = "0.2";
    page.classList.add('body_unscrollable');

  })

  btnClose.addEventListener('click', function () {
    requestCallMenu.classList.remove('request-call-container_show');
    mobileMenu.style.opacity = "1"
    hiddenWrapper.style.opacity = "1";
    page.classList.remove('body_unscrollable');
  })
}
