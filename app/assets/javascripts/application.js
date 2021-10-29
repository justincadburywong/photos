
// ...
//= require activestorage
//= require jquery
//= require jquery_ujs
//= require popper
//= require jquery.min
//= require jquery.easing.1.3
//= require bootstrap.min
//= require owl.carousel.min
//= require jquery.magnific-popup.min
//= require jquery.stellar.min
//= require jquery.waypoints.min
//= require jquery.countTo
//= require jquery.lazyload
//= require main

window.addEventListener("load", () => {
  eventListeners();
});

function eventListeners(){
  // $("img").lazyload();

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return;
			}
		}
	});
}
