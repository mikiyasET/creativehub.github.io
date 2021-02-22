	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 30,
		loop: true,
	    speed: 2000,
	    effect: 'fade',
	    fadeEffect: {
	      crossFade: true
	    },
	    autoplay: {
	        delay: 4000,
	        disableOnInteraction: false,
	    },
	    // Navigation arrows
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
    });

    var swipers = new Swiper('.swipers-container', {
    	spaceBetween: 530,
    	loop: true,
	    speed: 1000,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: true,
		},
		autoplay: {
	        delay: 1000,
	        disableOnInteraction: false,
	    },
    });