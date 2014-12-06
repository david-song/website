var terms = ["Developer", "Graphic Designer", "Student", "Freelancer", "Camera Enthusiast", "Volunteer"];
function rotateText(){
  var ct = $(".rotate").data("term") || 0;
  $(".rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn().delay(4000).fadeOut(250, rotateText);
}
$(document).ready(function() {
    /* Every time the window is scrolled ... */
    var scroll = $(window).scrollTop();
    $(rotateText);
    $(window).scroll(function(){

        /* Check the location of each desired element */
        $('.scrollIn').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            bottom_of_window = bottom_of_window + 200;
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).addClass('fadeIn animated');
            }
        });
        if($(window).scrollTop() >=150 && $(window).scrollTop() <=450)
        {
          $('.nav').removeClass('noBackground').addClass('nav-bg-semi').fadeIn(300);
        }
        if($(window).scrollTop() <=150)
        {
          $('.nav').removeClass('nav-bg-semi').addClass('noBackground');
        }
        if($(window).scrollTop() >=450)
        {
          $('.nav').removeClass('noBackground').addClass('nav-bg').fadeIn(300);
        }
        if($(window).scrollTop() <=450 && $(window).scrollTop() >=150)
        {
          $('.nav').removeClass('nav-bg').addClass('nav-bg-semi');
        }
    });

});
