/*------------------------------------------------------------------
jQuery document ready
-------------------------------------------------------------------*/
$(document).ready(function () {
	"use strict";
	// GET PAGE ID
	var pageid = $('.page').data("page");
	
	// LOAD PANEL LEFT
	$( "#panel-left" ).load( "/pages/pages/panel-left.html", function() {
		var swipersubnav = new Swiper ('.panel__navigation', {
			direction: 'horizontal',
			effect: 'slide',
			slidesPerView: 1,
			slidesPerGroup: 1
		}); 
		swipersubnav.on('slideChangeTransitionEnd', function () {
			$(".panel").animate({ scrollTop: 0 }, "slow");
		});
		$(".opensubnav").on('click', function(e) { 
			swipersubnav.slideNext();
		});
		$(".backtonav").on('click', function(e) { 
			swipersubnav.slidePrev();
		});
	});
	
	//LOAD SOCIAL POPUP
	$( "#popup-social" ).load( "/pages/pages/popup-social.html" );
	//LOAD ALERT POPUP
	$( "#popup-alert" ).load( "/pages/pages/popup-alert.html" );
	//LOAD ABOUT POPUP
	$( "#popup-about" ).load( "/pages/pages/popup-about.html" );

	
	//OPEN PANEL ACTION
	$(document).on('click', '.open-panel' ,function(){
	    var panelPosition = $(this).data("panel");	
		var panel = $('.panel--' + panelPosition);
		var bodyOverlay = $('.body-overlay');
		panel.addClass('active');
		bodyOverlay.css({display: 'block'}).addClass('active');
		$('body').addClass('with-panel-' + panelPosition + '-reveal');
		$(".body-overlay").on('click', function(e) { 
			$('.header__icon--menu').removeClass('open');
		    panel.css({display: ''}).removeClass('active');
			$(this).css({display: ''}).removeClass('active');
			$('body').addClass('panel-closing').removeClass('with-panel-' + panelPosition + '-reveal');	
		});
		
	});
	
	//OPEN POPUP ACTION
	$(document).on('click', '.open-popup' ,function(){
	    var popupdata = $(this).data("popup");
		var popup = $('.popup--' + popupdata);
		popup.css({display: 'block'}).addClass('active');
	});
	//
	$(document).on('click', '.close-popup' ,function(){
	    var popupdataclose = $(this).data("popup");
		var popupclose  = $('.popup--' + popupdataclose );
		popupclose.removeClass('active');	
	});


	$(document).on('click', '.header__icon--menu', function() {
		  $(this).toggleClass('open');
	});

	$(".page__content").scroll(function() {
		var topposition = $(this).position().top;
		if(  $(this).scrollTop() > topposition ) {
			$('.header--change').addClass('header--page'); 
		} else {
			$('.header--change').removeClass('header--page');
		}
	});
	
/*-------------- Page Index----------- */
   if (pageid == 'intro') {
		var swiperslider = new Swiper ('.slider-intro', {
			direction: 'horizontal',
			effect: 'slide',
			parallax: true,
			pagination: {
			el: '.swiper-pagination'
			},
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
			autoplay: {
				delay: 3333,
			}
		}); 

   }

/*-------------- Page sliders----------- */
   if (pageid == 'sliders') {
		var galleryLinks = new Swiper('.slider-init-top', {
		  direction: 'horizontal',
		  spaceBetween: 10,
		  slidesPerView: "auto",
		  slideToClickedSlide: true,
		  centeredSlides: true,
		});
		
		var galleryImages = new Swiper('.slider-init-bottom', {
		  spaceBetween: 0,
		  slidesPerView: 1,
		  pagination: {
			el: '.slider-init-bottom__pagination',
			type: "bullets",
		  },

		});	

	    galleryLinks.controller.control = galleryImages;
		galleryImages.controller.control = galleryLinks;

   }
});