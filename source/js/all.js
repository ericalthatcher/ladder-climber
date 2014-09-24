//= require vendor/jquery-1.8.0.min
//= require vendor/modernizr-2.6.1.min
//= require images

$(document).ready(function(){

  // Transition from attract photo to first image
  function attractSlide(){
    $('.attract').click(function() {
      $(this).slideUp();
      $('.load').addClass('appear');
    });

    //set timer for slideshow
    setTimeout(function() {
      loadImgs()
    }, 2000);
  }

  // Load photos
  function loadImgs(){
    var l, i;
    l = window.images.length;
    console.log(window.images.length);
    // iterate through images in images object and put them into the
    for (i=0, i<l; i++) {
      $('.load').append(window.images[i].src);
    };
  }

})