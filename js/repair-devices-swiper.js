import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';


export function windowSizeDevices () {
  let windowWidth = window.screen.availWidth;

  if (windowWidth < 768) {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }
  else {
    let repairBrands = document.querySelector(".repair-brands-container");

    let buttonMoreOne = repairBrands.querySelector('.swiper-look-more__btn');
    let swiperImageOne = repairBrands.querySelector('.swiper-look-more__image');
    let buttonMoreContainerOne = repairBrands.querySelectorAll('.swiper-look-more');

    let repairDevices = document.querySelector('.repair-devices-container');

    let buttonMoreTwo = repairDevices.querySelector('.swiper-look-more__btn');
    let swiperImageTwo = repairDevices.querySelector('.swiper-look-more__image');
    let buttonMoreContainerTwo = repairDevices.querySelectorAll('.swiper-look-more');

    buttonMoreOne.addEventListener('click',function (evt){
      let hiddenItem = repairBrands.querySelectorAll('.swiper__slide_hidden');
      let isNotHaveClass = !hiddenItem[0].classList.contains('swiper__slide_show');
      evt.preventDefault();

      if (isNotHaveClass) {
        for (let i = 0; i < hiddenItem.length; i++) {
          hiddenItem[i].classList.add('swiper__slide_show');
        }
        buttonMoreOne.textContent = 'Скрыть';
        swiperImageOne.classList.add('rotate');
      }
      else {
        for (let i = 0; i < hiddenItem.length; i++) {
          hiddenItem[i].classList.remove('swiper__slide_show');
        }
        buttonMoreOne.textContent = 'Показать все';
        swiperImageOne.classList.remove('rotate');


      }

    });

    buttonMoreTwo.addEventListener('click',function (evt){
      let hiddenItem = repairDevices.querySelectorAll('.swiper__slide_hidden');
      let isNotHaveClass = !hiddenItem[0].classList.contains('swiper__slide_show');
      evt.preventDefault();

      if (isNotHaveClass) {
        for (let i = 0; i < hiddenItem.length; i++) {
          hiddenItem[i].classList.add('swiper__slide_show');
        }
        buttonMoreTwo.textContent = 'Скрыть';
        swiperImageTwo.classList.add('rotate');
      }
      else {
        for (let i = 0; i < hiddenItem.length; i++) {
          hiddenItem[i].classList.remove('swiper__slide_show');
        }
        buttonMoreTwo.textContent = 'Показать все';
        swiperImageTwo.classList.remove('rotate');

      }

    });
}
}
