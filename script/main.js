$(document).ready(function(){
$(".text_link").magnificPopup();
});




$(document).ready(function(){
$('.header__burger').click(function(event){
  $('.header__burger, .header__menu').toggleClass('active');
  $('body').toggleClass('lock');
})
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