$(document).ready(function(){
$(".text_link").magnificPopup();
});

$(document).ready(function(){
  $('.slider_feedback').slick({
    arrows:true,
    dots:true,
    infinite:false
  });
});


$(document).ready(function(){
$('.header__burger').click(function(event){
  $('.header__burger, .header__menu').toggleClass('active');
  $('body').toggleClass('lock');
})
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


function backToTop(){
  let button  = $('.back-to-top');

  $(window).on('scroll', () => {
    if($(this).scrollTop()>= 50){
      button.fadeIn();
    } else{
      button.fadeOut();
    }
  })

  button.on('click', () => {
    e.preventDefault();
    $('html').animate({scrollTop:0}, 500)
  })
}

backToTop();