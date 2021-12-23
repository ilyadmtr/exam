$(document).ready(function(){
  $('.slider_feedback').slick({
    arrows:true,
    dots:true,
    infinite:false
  });
});

$(window).on('load resize', function() {
  if ($(window).width() < 769) {
    $('.slider_gallery:not(.slick-initialized)').slick({
      arrows:false,
      infinite: false
    });
    $('.item_none').remove();

  } else {
    $(".slider_gallery.slick-initialized").slick("unslick");
  }
});