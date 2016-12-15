$( document ).ready(function() {
  var $mobileBtn = $('#mobile-menu-btn'),
      $closeBtn = $('#close');

  $mobileBtn.click(function() {
    $('#menu').fadeIn();
    $('#zaslona').fadeIn(300);
  });

  $closeBtn.click(function() {
    $('#menu').fadeOut();
    $('#zaslona').fadeOut(300);
  });

    $('#menu a').click(function(event) {
        event.preventDefault();

        var $targetElement = $($(this).attr('href')),
            targetOffset = $targetElement.offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000, function() {   
            if ($(document).width() < 767) {      
                $('#menu').fadeOut();
                $('#zaslona').fadeOut(300);
            }
        });
    });

    $(window).resize(function() {          
        if ($(document).width() >= 767) {            
            $('#menu').show();
            $('#zaslona').show();
        }
    });
});