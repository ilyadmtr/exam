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