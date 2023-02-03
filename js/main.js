
	const swiper1 = document.querySelector('.slider-container'),
			swiper2 = document.querySelector('.swiper-container'),
			burger = document.querySelector('.burger'),
			close = document.querySelector('.menu__close'),
			menu = document.querySelector('.menu'),
			playButtonsFirst = document.querySelectorAll('.main-slider__play ');

let swiperSlider1 = new Swiper(swiper1, {
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 105,
});

let swiperSlider2 = new Swiper(swiper2, {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	fadeEffect: {
		crossFade: true
	},
	effect: 'fade',
	navigation: {
		nextEl: '.btn-right',
		prevEl: '.btn-left',
	},
});


swiperSlider2.on('transitionEnd', function () {
	let videos = document.querySelectorAll('.first__slider video');
	videos.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	playButtonsFirst.forEach((el) => {
		el.style.display = 'block';
	});
});

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});

playButtonsFirst.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
		video.play();
		e.currentTarget.style.display = 'none';
		setTimeout(() => {
			video.volume = 0.5;
		}, 1000);
	});
});





// Elements on the page
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function (slide, index) {
    console.log(slide);

    // Hide all the sides except first
    if (index !== 0) slide.classList.add('hidden');

    // Add index to every slide
    slide.dataset.index = index;

    // Add data attribute active for first/active slide
    sliderItems[0].setAttribute('data-active', '');

    // Click on the slides
    slide.addEventListener('click', function () {
        showNextSlide('next');
    });
});

btnNext.onclick = function() {
    console.log('Next Slide');
    showNextSlide('next');
}

btnPrev.onclick = function() {
    console.log('Prev Slide');
    showNextSlide('prev');
};

function showNextSlide(direction) {
    // Hide current slide
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Calculate the next index depending on the direction
    let nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

     // Show next slide
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}

