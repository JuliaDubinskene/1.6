let burgerOpen = document.querySelector('.header-menu__btn_theme-menu');
let mobileMenu = document.querySelector('.aside-menu');
let burgerClose = mobileMenu.querySelector('.header-aside-menu__btn');
let hiddenWrapper = document.querySelector('.container__blur');
let page = document.querySelector('.body');

let windowWidth = window.screen.availWidth;

export let openMenu = function () {

  burgerOpen.addEventListener('click', function (evt){
    evt.preventDefault();
    mobileMenu.classList.add('aside-menu_show');
    hiddenWrapper.style.opacity = "0.2";
    page.classList.add('body_unscrollable');

  })

  burgerClose.addEventListener('click', function (){
    mobileMenu.classList.remove('aside-menu_show');
    hiddenWrapper.style.opacity = "1";
    page.classList.remove('body_unscrollable');
  })
  if(windowWidth > 768) {
  hiddenWrapper.addEventListener('click', function(e) {
    const target = e.target;
    const its_mobileMenu = target == mobileMenu || mobileMenu.contains(target);
    const its_burgerOpen = target == burgerOpen;
    const mobileMenu_is_active = mobileMenu.classList.contains('aside-menu_show');

    if (!its_mobileMenu && !its_burgerOpen && mobileMenu_is_active) {
      mobileMenu.classList.remove('aside-menu_show');
      hiddenWrapper.style.opacity = "1";
      page.classList.remove('body_unscrollable');

    }
  });
}

}


