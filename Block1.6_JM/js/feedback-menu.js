let feedbackMenu = document.querySelector('.feedback-container');
let btnChat = document.querySelectorAll('.tablet-list__btn_theme-chat');
let mobileBtnOpen = btnChat[0];
let windowWidth = window.screen.availWidth;
let btnClose = document.querySelector('.feedback-menu__btn');
let hiddenWrapper = document.querySelector('.container');
let page = document.querySelector('.body');
let mobileMenu = document.querySelector('.aside-menu');

export let openFeedback = function () {
    mobileBtnOpen.addEventListener('click', function (e) {
      e.preventDefault();
      feedbackMenu.classList.add('feedback-menu_show');
      mobileMenu.classList.add('container_hidden');
      mobileMenu.classList.remove('aside-menu_show');

      if (windowWidth >= 1440) {
        hiddenWrapper.style.opacity = "0.2"
        page.classList.add('body_unscrollable');
        mobileMenu.style.opacity = '0.2';
      }
    })

    btnChat[1].addEventListener('click',function (e){
      e.preventDefault();
      feedbackMenu.classList.add('feedback-menu_show');
      hiddenWrapper.style.opacity = "0.2";
      page.classList.add('body_unscrollable');
    })

    btnClose.addEventListener('click', function () {
      feedbackMenu.classList.remove('feedback-menu_show');
      mobileMenu.style.opacity = "1"
      hiddenWrapper.style.opacity = "1"
      page.classList.remove('body_unscrollable');
    })

}

