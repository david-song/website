var clicked = false;
$(document).ready(function(){
  $('.nav-link').hide();
  $('.content-container').hide();
  $('.content-projects').hide();
  $('.content-blog').hide();
});
$(".button-projects").click(function(){
  $('.wrapper').fadeOut();
  $('.content-container').show();
  $('.content-projects').fadeIn();
});
$(".button-blog").click(function(){
  $('.wrapper').fadeOut();
  $('.content-container').show();
  $('.content-blog').fadeIn();
});
$(".fa-times").click(function(){
  $('.content-blog').fadeOut();
  $('.content-projects').fadeOut();
  $('.wrapper').fadeIn();
  $('.content-container').hide();
});
$(".nav-button").click(function(){
  if(clicked == false){
    // $("nav-button").animate();
    clicked = true;
    $(".nav-icon").addClass("rotate-90");
    $(".nav-icon").removeClass("rotate90");
    $(".nav-icon").removeClass("rotate");
    console.log(clicked);

    $(".nav-link").fadeIn(600);
  }
  else if(clicked == true)
  {
    clicked = false;
    $(".nav-icon").removeClass("rotate-90");
    $(".nav-icon").addClass("rotate");
    $(".nav-icon").addClass("rotate90");
    console.log(clicked);
    $(".nav-link").fadeOut(600);
  }
});
