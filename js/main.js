const swiper1 = document.querySelector('.slider-container'),
      swiper2 = document.querySelector('.slider-container'),
      burger = document.querySelector('.burger'),
      close = document.querySelector('.menu__close'),
			menu = document.querySelector('.menu');

let swiper = new Swiper(swiper1, {
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 105,
});

let swiper2= new Swiper(swiper2, {
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 105,
});

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});

