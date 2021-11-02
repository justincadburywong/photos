
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

$(document).on('turbolinks:load', function(){
  eventListeners();
});

function eventListeners(){
  // $("img").lazyload();
  editAllTags();
  deleteImage();
  magnificPopup();
  setInterval();
}

// magnific popup feature
function magnificPopup(){
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

setInterval(function() {
  $.magnificPopup.instance.next();
}, 6000);

// toggle all edit tag forms
function editAllTags(){
  var counter = 0
  $('#edit').on('click', function(e){
    e.preventDefault();
    if(counter == 0){
      $('.tags').show();
      $('.del').show()
      counter = 1
    }else{
      $('.tags').hide();
      $('.del').hide();
      counter = 0
    };
  })
}


function deleteImage(){
  $('.del').on('click', function(e){
    e.preventDefault();
    var postUrl = "/albums/" + $(this).parent().attr('id').match(/\d+/)
    $.ajax({
      url: postUrl,
      method: 'DELETE'
    }).done(function(data){
      // delete image div
      $(e.target).parent().remove();
    })
  })
};
