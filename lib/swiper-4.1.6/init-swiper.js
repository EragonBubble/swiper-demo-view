//$(document).ready(function() {
//	var swiper = new Swiper('.swiper-container', {
//		navigation: {
//			nextEl: '.swiper-button-next',
//			prevEl: '.swiper-button-prev',
//		},
//	});
//});

window.onload = function() {
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 5,
		spaceBetween: 30,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};