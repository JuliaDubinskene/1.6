import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';

    export function windowSize () {
    let windowWidth = window.screen.availWidth;

        if(windowWidth < 768) {
            const swiper = new Swiper('.repair-brands-container', {
                slidesPerView: 'auto',
                spaceBetween: 3,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            })
        }
        else {
            let buttonMore = document.querySelector('.repair-brands-swiper-look-more__btn');
            let swiperImage = document.querySelector('.repair-brands-swiper-look-more__image');
            let buttonMoreContainer = document.querySelector('.repair-brands-swiper-look-more');

            buttonMore.addEventListener('click',function (evt){
                let hiddenItem = document.querySelectorAll('.swiper__slide_hidden');
                let isNotHaveClass = !hiddenItem[0].classList.contains('swiper__slide_show');

                evt.preventDefault();

                if (isNotHaveClass) {
                   for (let i = 0; i < hiddenItem.length; i++) {
                            hiddenItem[i].classList.add('swiper__slide_show');
                   }
                   buttonMore.textContent = 'Скрыть';
                   swiperImage.classList.add('rotate');
                   buttonMoreContainer.classList.add('repair-brands-swiper-look-more_top');
                }
                else {
                   for (let i = 0; i < hiddenItem.length; i++) {
                   hiddenItem[i].classList.remove('swiper__slide_show');
                   }
                   buttonMore.textContent = 'Показать все';
                   swiperImage.classList.remove('rotate');
                   buttonMoreContainer.classList.remove('repair-brands-swiper-look-more_top');

                }

            });
        }

}

